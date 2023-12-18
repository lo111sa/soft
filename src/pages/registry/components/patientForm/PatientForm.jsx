import React, { useState } from "react";
import PatientInfo from "./components/PatientInfo";
import PatientStatus from "./components/PatientStatus";
import PatientContact from "./components/PatientContact";
import PatientAddress from "./components/PatientAddress";
import PatientFinance from "./components/PatientFinance";
import { usePatientsStore } from "../../../../store/patientsStore";
import { useAmbulRecordsStore } from "../../../../store/ambulRecords";

const PatientForm = () => {
  const patientsStore = usePatientsStore();
  const ambulStore = useAmbulRecordsStore();
  const [formData, setFormData] = useState({
    // Add more sections as needed
  });

  const handleChange = (info) => {
    setFormData((prevData) => ({
      ...prevData,
      ...info,
    }));
  };

  const handleSubmit = async () => {
    // if patient not exists add patient and ambulvizit
    if (!patientsStore.patientInfo?.name) {
      console.log("0");
      const res = await patientsStore.addPatient(formData);
      if (res.id) {
        await ambulStore.addVisit({
          doctorId: formData.doctorId,
          patientId: res.id,
          createdAt: res.createdAt,
        });
      }
      //if patient exists add only ambul visit
    } else {
      console.log("1");
      await ambulStore.addVisit({
        doctorId: formData.doctorId,
        patientId: patientsStore.patientInfo?.id,
        createdAt: patientsStore.patientInfo?.createdAt,
      });
    }
    await ambulStore.fetchAmb();
    setFormData({});
    patientsStore.clearPatientInfo();
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await handleSubmit();
      }}
      className="flex flex-col"
    >
      {/* ... other form elements */}
      <div className="flex gap-2 w-full">
        <div className="flex flex-col gap-2 w-1/2">
          <PatientInfo onInfoChange={handleChange} />
          <PatientContact onContactChange={handleChange} />
          <PatientAddress onAddressChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <PatientStatus onVisitChange={handleChange} />
          <PatientFinance onFinanceChange={handleChange} />
        </div>
      </div>
      {/* ... other form elements */}
    </form>
  );
};

export default PatientForm;
