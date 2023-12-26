import React, { useState } from "react";

import StacTable from "./tables/StacTable";
import { usePatientsStore } from "../../../store/patientsStore";
import AmbulSearchPanel from "./AmbulSearchPanel";

const StacSection = () => {
  return (
    <div className="flex items-center  mx-2 h-1/2  gap-5">
      <div className="min-w-[240px] h-full rounded-lg text-white bg-gradient-to-b from-[#007BB3] via-[#2d9acc] to-[#007BB3]">
        <AmbulSearchPanel />
      </div>
      <div className="flex flex-col gap-3 items-center  h-full  w-full overflow-hidden">
        <div className="flex items-center justify-between  w-full text-white rounded-md px-3 py-2 bg-gradient-to-b from-[#007BB3] via-[#2d9acc] to-[#007BB3]">
          <div className="flex items-center justify-center gap-2">
            <img src="/img/amb.png" alt="" />
            <p>დღის სტაციონარი ისტორიები</p>
          </div>
        </div>
        <div className=" relative w-full h-full">
          <div className="overflow-x-hidden  shadow-md sm:rounded-lg">
            <StacTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StacSection;
