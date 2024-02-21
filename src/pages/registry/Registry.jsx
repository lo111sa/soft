import React from "react";
import VisitsSection from "./components/VisitsSection";
import AmbulSection from "./components/AmbulSection";
import PatientItem from "./components/PatientItem";
import { useAmbulRecordsStore } from "../../store/ambulRecords";
import AmbulSearchPanel from "./components/AmbulSearchPanel";
import { Link } from "react-router-dom";

const Registry = () => {
  const visits = useAmbulRecordsStore();

  return (
    <div className="flex p-3 h-[calc(100vh-65px)] bg-gray-50">
      {/* Sidebar */}
      <div className="min-w-[320px] pe-3">
        <div className="border h-full bg-white rounded-lg ">
          <AmbulSearchPanel />
        </div>
      </div>
      {/* Rightbar */}
      <div className="w-full flex flex-col gap-4 pe-2 overflow-y-auto">
        <div className="flex items-center justify-between w-full p-3 sticky top-0 rounded-lg bg-white border border-gray-300 shadow-md">
          ანკეტები
          <Link to={"/register-patient"}>
            <img src="/img/add-file.png" alt="" />
          </Link>
        </div>

        {visits.amb?.length ? (
          visits.amb.map((item) => <PatientItem key={item.id} props={item} />)
        ) : (
          <p className="text-center">ჩანაწერები არ არის</p>
        )}
      </div>
    </div>
  );
};

export default Registry;
