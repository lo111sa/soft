import React, { useEffect, useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { DatePicker } from "antd";
import Input from "../../../../../components/UI/Input";
import SearchInput from "../../../../../components/UI/SearchInput";
import Select from "../../../../../components/UI/Select";
import { usePatientsStore } from "../../../../../store/patientsStore";
import CustomDatePicker from "../../../../../components/UI/CustomDatePicker";
import { formatDate } from "../../../../../utils/functions";
import { cities } from "../../../../../cities.json";
import Select1 from "../../../../../components/UI/Select1";

const PatientInfo = ({ register, errors, watch }) => {
  const patientsStore = usePatientsStore();
  const patientExists = patientsStore.patientInfo?.name;
  const [citieList, setCitieList] = useState([]);

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (value) => {
    // Handle the selected value here
    console.log(value);
    setSelectedValue(value);
  };

  useEffect(() => {
    setCitieList([]);
    cities.forEach((item) => {
      setCitieList((prev) => [
        ...prev,
        { value: item.name_ka, label: item.name_ka },
      ]);
    });
  }, []);
  return (
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
            errors={!patientExists && errors}
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
          errors={!patientExists && errors}
        />
      </div>
      {/* Gender, Birth Date */}
      <div className="flex gap-2  w-full px-2">
        <div className="flex flex-col w-1/2">
          <span>სქესი</span>
          {patientExists ? (
            <Input readOnly={patientExists} name="gender" register={register} />
          ) : (
            <Select
              defaultText="აირჩიეთ სქესი"
              options={[
                { value: "1", label: "მამრობითი" },
                { value: "2", label: "მდედრობითი" },
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
        <div className="flex  gap-2 w-full ">
          {/*ADDRESS */}
          <div className="flex flex-col w-3/6">
            <Input
              label="მისამართი"
              placeholder="შეიყვანეთ მისამართი"
              name="address"
              register={register}
              readOnly={patientExists}
            />
          </div>
          {/* CITY */}
          <div className="flex flex-col w-3/6">
            {patientExists ? (
              <Input
                label="ქალაქი"
                readOnly={patientExists}
                name="city"
                register={register}
              />
            ) : (
              <Select1
                label="ქალაქი"
                defaultText="აირჩიეთ ქალაქი"
                options={citieList}
                name="city"
                register={register}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
