import React, { useEffect, useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { DatePicker } from "antd";
import Input from "../../../../../components/UI/Input";
import SearchInput from "../../../../../components/UI/SearchInput";
import Select from "../../../../../components/UI/Select";
import { usePatientsStore } from "../../../../../store/patientsStore";
import CustomDatePicker from "../../../../../components/UI/CustomDatePicker";
import { formatDate } from "../../../../../utils/functions";

const PatientInfo = ({ register, errors, watch }) => {
  const patientsStore = usePatientsStore();
  const patientExists = patientsStore.patientInfo?.name;
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
              label="პირადი ნომერი *"
              placeHolder="შეიყვანეთ პირადი ნომერი"
              action={() => patientsStore.searchPatients(watch("pn"))}
              data={patientsStore.patients}
              onSelect={(patient) => {
                patientsStore.setPatientInfo(patient);
              }}
              name="pn"
              register={register}
              validation={{
                required: "აუცილებელი ველი!",
                minLength: {
                  value: 11,
                  message: "პირადი ნომერი არ უნდა იყოს 11 ციფრზე ნაკლები",
                },
                maxLength: {
                  value: 11,
                  message: "პირადი ნომერი არ უნდა აღემატებოდეს 11 ციფრს",
                },
              }}
              watch={watch}
              errors={errors}
            />
          </div>
          <Input
            label="პაციენტის სახელი, გვარი *"
            placeholder="შეიყვანეთ სახელი და გვარი"
            readOnly={patientExists}
            name="name"
            register={register}
            validation={{
              required: "აუცილებელი ველი!",
            }}
            errors={errors}
          />
        </div>
        {/* Gender, Birth Date */}
        <div className="flex gap-2  w-full px-2">
          <div className="flex flex-col w-1/2">
            <span>სქესი</span>
            {patientExists ? (
              <Input
                readOnly={patientExists}
                name="gender"
                register={register}
              />
            ) : (
              <Select
                defaultText="აირჩიეთ სქესი"
                options={[
                  { value: 1, label: "მამრობითი" },
                  { value: 2, label: "მდედრობითი" },
                ]}
                name="gender"
                register={register}
              />
            )}
          </div>
          <div className="flex flex-col w-1/2 ">
            <span>დაბადების თარიღი</span>
            {patientExists ? (
              <Input
                readOnly={patientExists}
                name="birthDate"
                register={register}
              />
            ) : (
              <DatePicker
                size="large"
                placeholder="აირჩიეთ თარიღი"
                onChange={(date, datestring) => {
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
