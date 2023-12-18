import React, { useEffect, useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { DatePicker } from "antd";
import Input from "../../../../../components/UI/Input";
import SearchInput from "../../../../../components/UI/SearchInput";
import Select from "../../../../../components/UI/Select";
import { usePatientsStore } from "../../../../../store/patientsStore";
import CustomDatePicker from "../../../../../components/UI/CustomDatePicker";
import { formatDate } from "../../../../../utils/functions";

const PatientInfo = ({ onInfoChange }) => {
  const patientsStore = usePatientsStore();

  const [patientInfo, setPatientInfo] = useState({
    name: "",
    gender: "",
    birthDate: null,
    pn: "",
    createdBy: 1,
  });

  const handleInputChange = (field, value) => {
    setPatientInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  useEffect(() => {
    onInfoChange(patientInfo); // Notify the parent component about the change
  }, [patientInfo]);

  useEffect(() => {
    if (patientsStore.patientInfo?.name) {
      setPatientInfo({
        name: patientsStore.patientInfo?.name || "",
        gender: patientsStore.patientInfo?.gender || "",
        birthDate: patientsStore.patientInfo?.birthDate || null,
        pn: patientsStore.patientInfo?.pn || "",
      });
    } else {
      setPatientInfo((prevPatientInfo) => ({
        ...prevPatientInfo,
        name: "",
        gender: "",
        birthDate: null,
        pn: "",
      }));
    }
  }, [patientsStore.patientInfo]);

  return (
    <div className="">
      <div className="flex flex-col gap-2 w-full ">
        <div className="flex flex-col gap-2 w-full px-2">
          <p className="flex items-center gap-2 text-2xl ">
            <InfoOutlinedIcon /> პირადი ინფორმაცია
          </p>
          {/* PN */}
          <div className="flex flex-col w-full ">
            <SearchInput
              label="პირადი ნომერი"
              placeHolder="შეიყვანეთ პირადი ნომერი"
              value={patientInfo.pn}
              onChange={(e) => handleInputChange("pn", e.target.value)}
              action={() => patientsStore.searchPatients(patientInfo.pn)}
              data={patientsStore.patients}
              onSelect={(patient) => {
                patientsStore.setPatientInfo(patient);
              }}
            />
          </div>
          <Input
            label="პაციენტის სახელი, გვარი"
            placeholder="შეიყვანეთ სახელი და გვარი"
            value={patientInfo.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            readOnly={patientsStore.patientInfo?.name}
          />
        </div>
        {/* Gender, Birth Date */}
        <div className="flex gap-2  w-full px-2">
          <div className="flex flex-col w-1/2">
            <span>სქესი</span>
            {patientsStore.patientInfo?.name ? (
              <Input
                value={patientInfo.gender == 1 ? `მამრობითი` : `მდედრობითი`}
                readOnly={patientsStore.patientInfo?.name}
              />
            ) : (
              <Select
                defaultText="აირჩიეთ სქესი"
                options={[
                  { value: 1, label: "მამრობითი" },
                  { value: 2, label: "მდედრობითი" },
                ]}
                onChange={(e) => handleInputChange("gender", e.target.value)}
              />
            )}
          </div>
          <div className="flex flex-col w-1/2 ">
            <span>დაბადების თარიღი</span>
            {patientsStore.patientInfo?.name ? (
              <Input
                value={formatDate(patientInfo.birthDate)}
                readOnly={patientsStore.patientInfo?.name}
              />
            ) : (
              <DatePicker
                size="large"
                placeholder="აირჩიეთ თარიღი"
                onChange={(date, datestring) => {
                  handleInputChange("birthDate", datestring);
                  console.log(date, datestring);
                }}
              />
            )}
            {/*  <CustomDatePicker /> */}
          </div>
        </div>
        {/* ... other input fields for personal information */}
      </div>
    </div>
  );
};

export default PatientInfo;
