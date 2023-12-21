import React, { useEffect, useState } from "react";
import PatientInfo from "./components/PatientInfo";
import PatientStatus from "./components/PatientStatus";
import PatientContact from "./components/PatientContact";
import PatientAddress from "./components/PatientAddress";
import PatientFinance from "./components/PatientFinance";
import { usePatientsStore } from "../../../../store/patientsStore";
import { useAmbulRecordsStore } from "../../../../store/ambulRecords";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { formatDate } from "../../../../utils/functions";

const PatientForm = () => {
  const patientsStore = usePatientsStore();
  const ambulStore = useAmbulRecordsStore();
  const patientExists = patientsStore.patientInfo?.name;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({});

  /*  const handleSubmit = async () => {
    // if patient not exists add patient and ambulvizit
    if (!patientsStore.patientInfo?.name) {
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
      await ambulStore.addVisit({
        doctorId: formData.doctorId,
        patientId: patientsStore.patientInfo?.id,
        createdAt: patientsStore.patientInfo?.createdAt,
      });
    }

    setFormData({});
    patientsStore.clearPatientInfo();
  }; */

  useEffect(() => {
    patientsStore.clearPatientInfo();
  }, []);
  // Use useEffect to watch for changes in patientsStore.patientInfo
  useEffect(() => {
    setValue("pn", patientsStore.patientInfo.pn);
    setValue("name", patientsStore.patientInfo.name);
    setValue(
      "gender",
      patientsStore.patientInfo.gender === 1 ? "მამრობითი" : "მდედრობითი"
    );
    setValue(
      "birthDate",
      patientsStore.patientInfo.birthDate &&
        formatDate(patientsStore.patientInfo.birthDate)
    );
    setValue("tel", patientsStore.patientInfo.tel);
    setValue("tel1", patientsStore.patientInfo.tel1);
    setValue("email", patientsStore.patientInfo.email);
    setValue("address", patientsStore.patientInfo.address);
    setValue("city", patientsStore.patientInfo.city);
    setValue("doctorId", patientsStore.patientInfo.doctorId);
    setValue("insuranceCompany", patientsStore.patientInfo.insuranceCompany);
    setValue("expenses", patientsStore.patientInfo.expenses);
    setValue(
      "discountPercentage",
      patientsStore.patientInfo.discountPercentage
    );
    setValue("referringDoctor", patientsStore.patientInfo.referringDoctor);
  }, [patientsStore.patientInfo?.name]);

  const onSubmit = (data) => {
    // Handle form submission here with the form data
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      {/* ... other form elements */}
      <div className="flex gap-2 w-full">
        <div className="flex flex-col gap-2 w-1/2">
          <PatientInfo register={register} errors={errors} watch={watch} />
          <PatientContact register={register} errors={errors} />
          <PatientAddress register={register} errors={errors} />
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <PatientStatus register={register} errors={errors} />
          <PatientFinance register={register} errors={errors} />
        </div>
      </div>
      {/* ... other form elements */}
    </form>
  );
};

export default PatientForm;
