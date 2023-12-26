import React from "react";
import AmbulTable from "./tables/AmbulTable";
import PatientForm from "./patientForm/PatientForm";
import { useModalStore } from "../../../store/modalStore";
import AmbulSearchPanel from "./AmbulSearchPanel";

const AmbulSection = () => {
  const modal = useModalStore();
  return (
    <div className="flex items-center  mx-2 h-1/2  gap-5">
      <div className=" min-w-[240px] h-full rounded-lg text-white bg-gradient-to-b from-[#007BB3] via-[#2d9acc] to-[#007BB3]">
        <AmbulSearchPanel />
      </div>
      <div className="flex flex-col gap-3 items-center  h-full  w-full overflow-hidden ">
        <div className="flex items-center justify-between  w-full text-white rounded-md px-3 py-2 bg-gradient-to-b from-[#007BB3] via-[#2fafeb] to-[#007BB3]">
          <div className="flex items-center justify-center gap-2">
            <img src="/img/history.png" alt="" />
            <p>ამბულატორიული ანკეტები </p>
          </div>
          <button onClick={() => modal.open(<PatientForm />, "რეგისტრაცია")}>
            <img src="/img/add-file.png" alt="" />
          </button>
        </div>
        <div className=" relative w-full h-full overflow-x-hidden overflow-y-auto">
          <div className="  shadow-md sm:rounded-lg">
            <AmbulTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbulSection;
