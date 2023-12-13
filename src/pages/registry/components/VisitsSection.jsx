import React, { useEffect, useRef, useState } from "react";
import VisitsTable from "./tables/VisitsTable";
import VisitsSearchPanel from "./VisitsSearchPanel";
import { useModalStore } from "../../../store/modalStore";

const VisitsSection = () => {
  const tableRef = useRef(null);
  const modal = useModalStore();

  const scrollTable = (direction) => {
    const scrollableTable = tableRef.current;

    if (scrollableTable) {
      const scrollAmount = 155; // Adjust this value based on your preference
      if (direction === "left") {
        scrollableTable.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        scrollableTable.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="flex items-center  mx-2 h-1/3  gap-4">
      <div className="flex flex-col gap-5 bg-[#2C4C9C] min-w-[240px] h-full rounded-lg text-white p-2">
        {/* Left side */}
        <VisitsSearchPanel />
      </div>
      <div className="flex flex-col gap-3 items-center  h-full  w-full overflow-hidden">
        <div className="flex items-center justify-between bg-[#38549b] w-full text-white rounded-md px-3 py-2">
          <div className="flex items-center justify-center gap-2">
            <img src="/img/history.png" alt="" />
            <p className=""> ამბულატორიული პაციენტების ჩანაწერები</p>
          </div>
          <p>თარიღი</p>
        </div>
        <div className=" relative w-full h-full">
          <div
            ref={tableRef}
            className="overflow-x-hidden  shadow-md sm:rounded-lg"
          >
            <button
              className="flex items-center justify-center absolute w-8 h-8 top-1 left-48 z-30"
              onClick={() => scrollTable("left")}
            >
              {" "}
              <img src="/img/arrow-left.png" alt="" />{" "}
            </button>
            <button
              className="flex items-center justify-center absolute w-8 h-8 top-1 right-5 z-30"
              onClick={() => scrollTable("right")}
            >
              <img src="/img/arrow-right.png" alt="" />
            </button>
            <VisitsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitsSection;
