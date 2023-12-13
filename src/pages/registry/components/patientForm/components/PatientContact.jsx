import React, { useEffect, useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Input from "../../../../../components/UI/Input";
import { usePatientsStore } from "../../../../../store/patientsStore";

const PatientContact = ({ onContactChange }) => {
  const patientsStore = usePatientsStore();
  const [patientContact, setPatientContact] = useState({
    tel: "",
    tel1: "",
    email: "",
  });

  const handleInputChange = (field, value) => {
    setPatientContact((prevContact) => ({
      ...prevContact,
      [field]: value,
    }));
  };

  useEffect(() => {
    onContactChange(patientContact); // Notify the parent component about the change
  }, [patientContact]);

  useEffect(() => {
    if (patientsStore.patientInfo?.name) {
      setPatientContact({
        tel: patientsStore.patientInfo?.tel || "",
        tel1: patientsStore.patientInfo?.tel1 || "",
        email: patientsStore.patientInfo?.email || "",
      });
    } else {
      setPatientContact((prevPatientInfo) => ({
        ...prevPatientInfo,
        tel: "",
        tel1: "",
        email: "",
      }));
    }
  }, [patientsStore.patientInfo]);

  return (
    <div className="">
      <div className="flex flex-col gap-2 w-full px-2">
        {/* <p className="flex items-center gap-2 text-2xl">
          <LocalPhoneIcon /> საკონტაქტო მონაცემები
        </p> */}

        {/* Tel,Tel1, Email */}
        <div className="flex gap-2  w-full ">
          <div className="flex flex-col w-1/2">
            <Input
              label="ტელეფონი"
              placeholder="შეიყვანეთ მობილური"
              value={patientContact.tel}
              onChange={(e) => handleInputChange("tel", e.target.value)}
              readOnly={patientsStore.patientInfo?.name}
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <Input
              label="დამ. ტელეფონი"
              placeholder="შეიყვანეთ დამატებითი ტელეფონი"
              value={patientContact.tel1}
              onChange={(e) => handleInputChange("tel1", e.target.value)}
              readOnly={patientsStore.patientInfo?.name}
            />
          </div>
        </div>
        {/* Email */}
        <div className="flex flex-col w-full">
          <Input
            label="მეილი"
            placeholder="შეიყვანეთ მეილი"
            value={patientContact.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            readOnly={patientsStore.patientInfo?.name}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientContact;
