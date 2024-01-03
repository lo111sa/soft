import React, { useEffect, useState } from "react";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import { useDoctorsStore } from "../../../../../store/doctorsStore";
import Select from "../../../../../components/UI/Select";
import Input from "../../../../../components/UI/Input";
import Switch from "../../../../../components/UI/Switch";
import Select1 from "../../../../../components/UI/Select1";

const PatientStatus = ({ register, errors, setValue }) => {
  const doctorsStore = useDoctorsStore();

  const [groups, setGroups] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    doctorsStore.fetchGroups();
  }, []);

  useEffect(() => {
    setGroups([]);
    doctorsStore.groups.forEach((item) => {
      setGroups((prev) => [...prev, { value: item.id, label: item.title }]);
    });
  }, [doctorsStore.groups]);

  useEffect(() => {
    setDoctors([]);
    doctorsStore.doctors.forEach((item) => {
      setDoctors((prev) => [...prev, { value: item.id, label: item.name }]);
    });
  }, [doctorsStore.doctors]);

  return (
    <div className="flex flex-col gap-2 w-full px-2">
      <div className="flex justify-end items-center gap-3">
        <Switch onToggle={(value) => setValue("status", value)} />
        <button
          type="submit"
          className="border hover:border-yellow-600 px-3 py-1 rounded"
        >
          შენახვა
        </button>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-2 pt-1 w-full ">
          <div className="flex flex-col w-1/2">
            <Select1
              label="ჯგუფი"
              /* defaultText="აირჩიეთ ჯგუფი" */
              options={groups}
              onChange={async (value) => {
                await doctorsStore.fetchDoctors(value);
              }}
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <span>ექიმი *</span>
            <Select
              defaultText="აირჩიეთ ექიმი"
              options={doctors}
              name="doctorId"
              register={register}
              validation={{ required: "აუცილებელი ველი!" }}
              errors={errors}
            />
          </div>
        </div>
      </div>
      {/* FINANCE */}
      <div className="flex flex-col gap-2 w-full">
        <p className="flex items-center gap-2 text-2xl">
          <PaymentOutlinedIcon /> ანაზღაურება
        </p>
        <div className="flex flex-col ">
          <span>სადაზღვევო კომპანია</span>
          <Select
            defaultText="აირჩიეთ კომპანია"
            options={[
              { value: "1", label: "მამრობითი" },
              { value: "2", label: "მდედრობითი" },
            ]}
            name="insuranceCompany"
            register={register}
          />
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col">
            <Input
              label="ღირებულება"
              placeholder={"შეიყვანეთ ღირებულება"}
              name="expenses"
              register={register}
            />
          </div>

          <div className="flex flex-col">
            <Input
              label="დაზღვევის პროცენტი"
              className="flex flex-col"
              placeholder={"%"}
              name="discountPercentage"
              register={register}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Input
            label="გამომგზავნი ექიმი"
            placeholder={"შეიყვანეთ ექიმის სახელი და გვარი"}
            name="referringDoctor"
            register={register}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientStatus;
