import React, { useEffect } from "react";
import { formatDate } from "../../../../utils/functions";
import Loader from "../../../../components/loader/Loader";
import { useModalStore } from "../../../../store/modalStore";
import PatientVisitInfo from "../PatientVisitInfo";
import { useAmbulRecordsStore } from "../../../../store/ambulRecords";

const AmbulTable = () => {
  const visits = useAmbulRecordsStore();
  const modal = useModalStore();

  // useEffect(() => {
  //   visits.fetchAmb(``);
  // }, []);

  const tableHeader = (
    <tr className="text-[15px] sticky top-0 bg-gray-100 z-10">
      <th scope="col" className="px-6 py-3 border">
        N
      </th>
      <th scope="col" className="px-6 py-3 border">
        პირადი ნომერი
      </th>
      <th scope="col" className="px-6 py-3 border">
        პაციენტი
      </th>
      <th scope="col" className="px-6 py-3 border">
        ისტორიის ნომერი
      </th>
      <th scope="col" className="px-6 py-3 border">
        მოსვლის თარიღი
      </th>
    </tr>
  );

  if (visits.isLoading) return <Loader />;

  return (
    <table className="w-full text-sm text-left rtl:text-right text-black h-[50px] cursor-pointer">
      <thead className="text-xs text-gray-800 bg-gray-50">{tableHeader}</thead>
      <tbody>
        {visits.amb?.length
          ? visits.amb.map((item, index) => {
              return (
                <tr
                  key={item.id}
                  className={` ${
                    item.status
                      ? `bg-[#BDE4AA] text-gray-700`
                      : `hover:bg-gray-100`
                  }`}
                  onClick={() =>
                    modal.open(<PatientVisitInfo info={item} />, "რეგისტრაცია")
                  }
                >
                  <td className="px-6 py-2  border border-gray-300 break-all whitespace-nowrap sticky left-0">
                    {index + 1}
                  </td>
                  <td className="px-6 py-2  border border-gray-300 break-all whitespace-nowrap sticky left-0">
                    {item.patientPn}
                  </td>
                  <td className="px-6 py-2  border border-gray-300 break-all whitespace-nowrap sticky left-0">
                    {item.patientName}
                  </td>
                  <td className="px-6 py-2  border border-gray-300 break-all whitespace-nowrap sticky left-0">
                    {"47586"}
                  </td>
                  <td className="px-6 py-2  border border-gray-300 break-all whitespace-nowrap sticky left-0">
                    {formatDate(item.visitTime)}
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
