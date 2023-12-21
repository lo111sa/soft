import React, { useEffect, useState } from "react";
import HouseIcon from "@mui/icons-material/House";
import Input from "../../../../../components/UI/Input";
import { usePatientsStore } from "../../../../../store/patientsStore";

const PatientAddress = ({ register, error }) => {
  const patientsStore = usePatientsStore();
  const patientExists = patientsStore.patientInfo?.name;
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
            name="address"
            register={register}
            readOnly={patientExists}
          />
        </div>
        {/* CITY */}
        <div className="flex flex-col w-1/3">
          <Input
            label="ქალაქი"
            placeholder="-"
            readOnly={patientExists}
            name="city"
            register={register}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientAddress;
