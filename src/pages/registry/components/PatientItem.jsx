import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { formatDate } from "../../../utils/functions";

const PatientItem = ({ props }) => {
  return (
    <div className=" flex flex-col shadow-md border hover:border-gray-400 rounded-lg p-2 bg-white cursor-pointer">
      {/* Top div */}
      <div className="flex items-center justify-between">
        <p className="font-bold">
          {`${props.patientName} - ${props.patientPn}`}{" "}
        </p>
        <div className="flex items-center gap-4 ">
          <span
            className={`flex items-center justify-center gap-1 ${
              props.status ? `text-[#30c279]` : `text-[#f1533e]`
            }`}
          >
            <div
              className={`h-2 w-2 rounded-full ${
                props.status ? `bg-[#30c279]` : `bg-[#f1533e]`
              }`}
            ></div>{" "}
            {props.status ? "გადახდილი" : "გადაუხდელი"}
          </span>
          <button className="border-2 rounded px-3 py-1 text-gray-400 hover:border-black">
            <KeyboardArrowRightIcon />
          </button>
        </div>
      </div>
      {/* Bottom div */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 border-r pe-6 py-2 text-sm">
          <p className="text-gray-500">
            მოსვლის თარიღი :{" "}
            <span className="text-black font-bold">
              {formatDate(props.visitTime)}
            </span>
          </p>
          <p className="text-gray-500">
            მოსვლის თარიღი :{" "}
            <span className="text-black font-bold">28.12.2023 12:19</span>
          </p>
          <p className="text-gray-500">
            თანხა : <span className="text-black font-bold">50.00 ლ</span>
          </p>
        </div>

        <div className="flex flex-col gap-2 border-r pe-6 py-2 text-sm">
          <p className="text-gray-500">
            მკურნალი ექიმი :{" "}
            <span className="text-black font-bold">{props.doctorName}</span>
          </p>
          <p className="text-gray-500">
            ოპერატორი :{" "}
            <span className="text-black font-bold">ასმათი ონიანი</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientItem;
