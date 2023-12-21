import React, { useEffect, useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Input from "../../../../../components/UI/Input";
import { usePatientsStore } from "../../../../../store/patientsStore";

const PatientContact = ({ register }) => {
  const patientsStore = usePatientsStore();
  const patientExists = patientsStore.patientInfo?.name;

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
              readOnly={patientExists}
              name="tel"
              register={register}
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <Input
              label="დამ. ტელეფონი"
              placeholder="შეიყვანეთ დამატებითი ტელეფონი"
              readOnly={patientExists}
              name="tel1"
              register={register}
            />
          </div>
        </div>
        {/* Email */}
        <div className="flex flex-col w-full">
          <Input
            label="მეილი"
            placeholder="შეიყვანეთ მეილი"
            readOnly={patientExists}
            name="email"
            register={register}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientContact;
