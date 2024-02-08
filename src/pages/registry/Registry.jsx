import React from "react";
import VisitsSection from "./components/VisitsSection";
import AmbulSection from "./components/AmbulSection";
import PatientItem from "./components/PatientItem";
import { useAmbulRecordsStore } from "../../store/ambulRecords";
import AmbulSearchPanel from "./components/AmbulSearchPanel";

const Registry = () => {
  const visits = useAmbulRecordsStore();

  return (
    <div className="flex   p-3 h-[calc(100vh-60px)] bg-gray-50">
      {/* Sidebar */}
      <div className="min-w-[320px] pe-3">
        <div className="border h-full bg-white rounded-lg ">
          <AmbulSearchPanel />
        </div>
      </div>
      {/* Rightbar */}
      <div className="w-full flex flex-col gap-4 pe-2 overflow-y-auto">
        <div className="w-full p-3 sticky top-0 rounded-lg bg-white border border-gray-300 shadow-md">
          ანკეტები
        </div>

        {visits.amb?.length
          ? visits.amb.map((item) => <PatientItem key={item.id} props={item} />)
          : null}
      </div>
    </div>
  );
};

export default Registry;
