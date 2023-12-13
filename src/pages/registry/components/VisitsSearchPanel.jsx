import React, { useEffect, useState } from "react";
import { useDoctorsStore } from "../../../store/doctorsStore";
import Select from "react-tailwindcss-select";
import { useAmbulRecordsStore } from "../../../store/ambulRecords";

const VisitsSearchPanel = () => {
  const doctorsStore = useDoctorsStore();
  const visits = useAmbulRecordsStore();
  const [groups, setGroups] = useState([]);
  const [value, setValue] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [value1, setValue1] = useState("");

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
    setValue1("");
    setDoctors([]);
    doctorsStore.doctors.forEach((item) => {
      setDoctors((prev) => [...prev, { value: item.id, label: item.name }]);
    });
  }, [doctorsStore.doctors]);
  return (
    <>
      <div className="flex flex-col gap-1">
        <p className="text-left">აირჩიეთ ჯგუფი</p>
        <Select
          value={value}
          onChange={async (e) => {
            setValue(e);
            await visits.fetchVisits(`group=${e.value}`);
            await doctorsStore.fetchDoctors(e.value);
          }}
          options={groups}
          isSearchable
          placeholder="აირჩიეთ ჯგუფი"
          searchInputPlaceholder="ძიება..."
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-left">აირჩიეთ ექიმი</p>
        <Select
          value={value1}
          onChange={async (e) => {
            setValue1(e);
            await visits.fetchVisits(`doctor=${e.value}`);
          }}
          options={doctors}
          isSearchable
          placeholder="აირჩიეთ ექიმი"
          searchInputPlaceholder="ძიება..."
        />
      </div>
    </>
  );
};

export default VisitsSearchPanel;
