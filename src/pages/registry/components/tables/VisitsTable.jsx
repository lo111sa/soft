import React, { useEffect, useState } from "react";
import { useModalStore } from "../../../../store/modalStore";
import { useAmbulRecordsStore } from "../../../../store/ambulRecords";

// Times
const times = [
  "09:00",
  "09:10",
  "09:20",
  "09:30",
  "09:40",
  "09:50",
  "10:00",
  "10:10",
  "10:20",
  "10:30",
  "10:40",
  "10:50",
  "11:00",
  "11:10",
  "11:20",
  "11:30",
  "11:40",
  "11:50",
  "12:00",
  "12:10",
  "12:20",
  "12:30",
];

const VisitsTable = () => {
  const modal = useModalStore();
  const visits = useAmbulRecordsStore();

  // Create table header with times
  const tableHeader = (
    <tr>
      <th
        scope="col"
        className="px-2 py-1 border bg-gray-50 text-[15px] sticky left-0"
      >
        <div className="flex items-center justify-center gap-2 min-w-[155px] ">
          <img src="/img/medical-team.png" alt="" />
          <p>თანამშრომელი</p>
        </div>
      </th>

      {times.map((time) => (
        <th
          scope="col"
          className="px-6 py-3 min-w-[155px]   border text-[15px] text-center "
          key={time}
        >
          {time}
        </th>
      ))}
    </tr>
  );

  const tableRows = visits.visits?.map((doctorData) => (
    <tr key={doctorData.doctor.id}>
      <td className="px-6 py-2  border bg-gray-50 whitespace-nowrap text-center sticky left-0">
        {doctorData.doctor.name}
      </td>
      {times.map((time, i) => {
        const visit = doctorData.visits.find((v) => v.time === time);
        return (
          <td
            className="px-6 py-2  border whitespace-nowrap text-center"
            key={`${doctorData.doctor.id}-${time}`}
            onClick={() =>
              handleRowClick({ ...doctorData.doctor, time: time }, visit)
            }
          >
            {visit ? visit.patientName : ""}
          </td>
        );
      })}
    </tr>
  ));

  const handleRowClick = (doctor, visit) => {
    if (visit) {
      console.log(visit);
    } else {
      console.log(doctor);
    }
  };

  useEffect(() => {
    visits.fetchVisits("group=10");
  }, []);

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 h-full cursor-pointer">
      <thead className="text-xs text-gray-700 bg-gray-50">{tableHeader}</thead>

      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default VisitsTable;
