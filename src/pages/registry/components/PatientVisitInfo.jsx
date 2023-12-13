import React, { useEffect } from "react";
import Input from "../../../components/UI/Input";
import { formatDate } from "../../../utils/functions";
import { useAmbulRecordsStore } from "../../../store/ambulRecords";

const tableHeader = (
  <tr className="text-[15px]">
    <th scope="col" className="px-6 py-3 border bg-gray-50 ">
      N
    </th>
    <th scope="col" className="px-6 py-3 border bg-gray-50 ">
      თარიღი
    </th>
    <th scope="col" className="px-6 py-3 border bg-gray-50 ">
      ექიმი
    </th>
    <th scope="col" className="px-6 py-3 border bg-gray-50 ">
      ვიზიტის ტიპი
    </th>
    <th scope="col" className="px-6 py-3 border bg-gray-50 ">
      მკურნალობა
    </th>
    <th scope="col" className="px-6 py-3 border bg-gray-50 ">
      ღირებულება
    </th>
    <th scope="col" className="px-6 py-3 border bg-gray-50 ">
      სტატუსი
    </th>
  </tr>
);

const PatientVisitInfo = ({ info }) => {
  const visits = useAmbulRecordsStore();

  useEffect(() => {
    visits.fetchSinglePatientInfo(`patientId=${info.patientId}`);
  }, []);

  return (
    <div className="w-full bg-white text-gray-500 rounded-md py-3">
      {/* Patient info */}
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center justify-center">
          <span className="text-xl">პაციენტის ისტორია: </span>
          <p className="text-xl text-black mr-10">{`  ${info.patientName} (${info.patientPn})`}</p>
        </div>
        <Input placeholder="ძებნა..." />
      </div>
      {/* TABLE */}
      <div>
        {" "}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 h-full cursor-pointer ">
          <thead className="text-xs text-gray-700 bg-gray-50">
            {tableHeader}
          </thead>
          <tbody>
            {visits.singlePatientInfo?.length
              ? visits.singlePatientInfo.map((item, index) => {
                  return (
                    <tr key={item.id} className="hover:bg-gray-100">
                      <td className="px-6 py-2  border break-all whitespace-nowrap sticky left-0 font-bold">
                        {index + 1}
                      </td>
                      <td className="px-6 py-2  border break-all whitespace-nowrap sticky left-0 font-bold">
                        {formatDate(item.visitTime)}
                      </td>
                      <td className="px-6 py-2  border break-all whitespace-nowrap sticky left-0 font-bold">
                        {item.doctorName}
                      </td>
                      <td className="px-6 py-2  border break-all whitespace-nowrap sticky left-0 font-bold">
                        {""}
                      </td>
                      <td className="px-6 py-2  border break-all whitespace-nowrap sticky left-0 font-bold"></td>
                      <td className="px-6 py-2  border break-all whitespace-nowrap sticky left-0 font-bold"></td>
                      <td className="px-6 py-2  border break-all whitespace-nowrap sticky left-0 font-bold"></td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientVisitInfo;
