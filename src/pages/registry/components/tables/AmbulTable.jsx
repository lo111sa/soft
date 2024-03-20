import React, { useEffect } from "react";
import { formatDate } from "../../../../utils/functions";
import Loader from "../../../../components/loader/Loader";
import { useModalStore } from "../../../../store/modalStore";
import PatientVisitInfo from "../PatientVisitInfo";
import { useAmbulRecordsStore } from "../../../../store/ambulRecords";

const AmbulTable = () => {
  const visits = useAmbulRecordsStore();
  const modal = useModalStore();

  const tableHeader = (
    <tr className="text-[15px] text-white sticky top-[-0.5px]  z-10  bg-gradient-to-b from-[#57add8] to-[#2288C4] rounded-lg">
      <th scope="col" className="px-6 py-3 rounded-tl-lg">
        N
      </th>
      <th scope="col" className="px-6 py-5 ">
        პირადი ნომერი
      </th>
      <th scope="col" className="px-6 py-5 ">
        პაციენტი
      </th>
      <th scope="col" className="px-6 py-5 ">
        ექიმი
      </th>
      <th scope="col" className="px-6 py-5 ">
        ისტორიის ნომერი
      </th>
      <th scope="col" className="px-6 py-5 ">
        მოსვლის თარიღი
      </th>
      <th scope="col" className="px-2 py-5  w-3 rounded-tr-lg">
        სტატუსი
      </th>
    </tr>
  );

  //if (visits.isLoading) return <Loader />;

  return (
    <table className="w-full text-sm text-left rtl:text-right text-black  cursor-pointer border-separate border-spacing-y-2">
      <thead className="text-xs text-gray-800 bg-gray-50">{tableHeader}</thead>
      <tbody className="">
        {visits.amb?.length
          ? visits.amb.map((item, index) => {
              return (
                <tr
                  key={item.id}
                  className={`hover:bg-gray-200 bg-white shadow rounded-lg`}
                  onClick={() =>
                    modal.open(
                      <PatientVisitInfo info={item} />,
                      "პაციენტის ვიზიტების ისტორია"
                    )
                  }
                >
                  <td className="px-6 py-4 rounded-s-lg ">{index + 1}</td>
                  <td className="px-6 py-4 ">{item.patientPn}</td>
                  <td className="px-6 py-4  ">{item.patientName}</td>
                  <td className="px-6 py-4  ">{item.doctorName}</td>
                  <td className="px-6 py-4  ">{"47586"}</td>
                  <td className="px-6 py-4  ">{formatDate(item.visitTime)}</td>
                  <td className="rounded-e-lg ">
                    <div className="flex justify-center items-center">
                      <div
                        className={`w-4 h-4 p-0 m-0 rounded-full ${
                          item.status ? `bg-[#30c279]` : `bg-[#f1533e]`
                        } self-center`}
                      ></div>
                    </div>
                  </td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
};

export default AmbulTable;
