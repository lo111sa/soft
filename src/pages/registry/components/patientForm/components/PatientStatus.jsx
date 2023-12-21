import React, { useEffect, useState } from "react";
import { useDoctorsStore } from "../../../../../store/doctorsStore";
import Select from "../../../../../components/UI/Select";
import Switch from "../../../../../components/UI/Switch";

const PatientStatus = ({ register, errors }) => {
  const doctorsStore = useDoctorsStore();

  const [toggle, setToggle] = useState(true);
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
    <>
      <div className="flex flex-col gap-2 w-full px-2">
        <div className="flex justify-end items-center gap-3">
          <Switch toggle={toggle} onToggle={() => setToggle(!toggle)} />
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
              <span>ჯგუფი</span>
              <Select
                defaultText="აირჩიეთ ჯგუფი"
                options={groups}
                onChange={async (e) => {
                  await doctorsStore.fetchDoctors(e.target.value);
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
      </div>
    </>
  );
};

export default PatientStatus;
