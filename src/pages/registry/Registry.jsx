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
      <div className="w-1/6 pe-3">
        <div className="border h-full bg-white rounded-lg ">
          <AmbulSearchPanel />
        </div>
      </div>
      {/* Rightbar */}
      <div className="w-5/6 flex flex-col gap-4 pe-2 overflow-y-auto">
        <div className="w-full p-3 sticky top-0 rounded-lg shadow bg-white">
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
