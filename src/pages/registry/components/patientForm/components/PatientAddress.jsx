import React, { useEffect, useState } from "react";
import HouseIcon from "@mui/icons-material/House";
import Input from "../../../../../components/UI/Input";
import { usePatientsStore } from "../../../../../store/patientsStore";

const PatientAddress = ({ onAddressChange }) => {
  const patientsStore = usePatientsStore();
  const [patientAddress, setPatientAddress] = useState({
    address: "",
    city: "",
  });

  const handleInputChange = (field, value) => {
    setPatientAddress((prevAddress) => ({
      ...prevAddress,
      [field]: value,
    }));
  };

  useEffect(() => {
    onAddressChange(patientAddress); // Notify the parent component about the change
  }, [patientAddress]);

  useEffect(() => {
    if (patientsStore.patientInfo?.name) {
      setPatientAddress({
        address: patientsStore.patientInfo?.address || "",
        city: patientsStore.patientInfo?.city || "",
      });
    } else {
      setPatientAddress((prevPatientInfo) => ({
        ...prevPatientInfo,
        address: "",
        city: "",
      }));
    }
  }, [patientsStore.patientInfo]);

  return (
    <div className="">
      {/* <p className="flex items-center gap-2 text-2xl">
        <HouseIcon /> საცხოვრებელი ადგილი
      </p> */}
      <div className="flex  gap-2 w-full px-2">
        {/*ADDRESS */}
        <div className="flex flex-col w-2/3">
          <Input
            label="მისამართი"
            placeholder="შეიყვანეთ მისამართი"
            onChange={(e) => handleInputChange("address", e.target.value)}
            value={patientAddress.address}
            readOnly={patientsStore.patientInfo?.name}
          />
        </div>
        {/* CITY */}
        <div className="flex flex-col w-1/3">
          <Input
            label="ქალაქი"
            placeholder="-"
            onChange={(e) => handleInputChange("city", e.target.value)}
            value={patientAddress.city}
            readOnly={patientsStore.patientInfo?.name}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientAddress;
