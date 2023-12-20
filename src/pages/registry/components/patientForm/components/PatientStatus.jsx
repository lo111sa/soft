import React, { useEffect, useState } from "react";
import { useDoctorsStore } from "../../../../../store/doctorsStore";
import Select from "../../../../../components/UI/Select";
import Switch from "../../../../../components/UI/Switch";

const PatientStatus = ({ onVisitChange }) => {
  const doctorsStore = useDoctorsStore();

  const [toggle, setToggle] = useState(true);
  const [groups, setGroups] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [visitInfo, setvisitInfo] = useState({
    doctorId: null,
    createdBy: 1,
  });

  const handleInputChange = (field, value) => {
    setvisitInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  useEffect(() => {
    onVisitChange(visitInfo); // Notify the parent component about the change
  }, [visitInfo]);

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
                onChange={(e) => handleInputChange("doctorId", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientStatus;
