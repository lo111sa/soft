import React, { useEffect, useState } from "react";
import Input from "../../../components/UI/Input";
import { useAmbulRecordsStore } from "../../../store/ambulRecords";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import CustomDatePicker from "../../../components/UI/CustomDatePicker";
import CustomSelect from "../../../components/CustomSelect";

const AmbulSearchPanel = () => {
  const visits = useAmbulRecordsStore();
  const [pn, setPn] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [typingTimeout, setTypingTimeout] = useState(null);

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        visits.fetchAmb(
          `patientId=&pn=${pn}&startDate=${
            startDate.toISOString().split("T")[0]
          }&endDate=${endDate.toISOString().split("T")[0]}`
        );
      }, 500) // Adjust the delay as needed
    );

    // Cleanup the timeout when the component unmounts
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [pn, startDate, endDate]);

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Search input */}
      <div className="relative">
        <div className="flex items-center gap-4">
          <p className="pt-3 pb-2">მოძებნეთ პაციენტი</p>
        </div>
        <Input
          placeholder="პირადი ნომერი"
          value={pn}
          onChange={(e) => {
            setPn(e.target.value);
          }}
        />
        <div className="absolute top-[52px] right-1 z-10 text-gray-600 cursor-pointer">
          {" "}
          {pn ? <ClearIcon onClick={() => setPn("")} /> : <SearchIcon />}
        </div>
      </div>

      {/* Date inputs */}
      <div>
        <div className="flex items-center gap-4">
          <p className="pt-3 pb-2 ">აირჩიეთ პერიოდი</p>
        </div>

        <div className="flex items-center gap-1 max-w-[300px]">
          <CustomDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          -
          <CustomDatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
      </div>
    </div>
  );
};

export default AmbulSearchPanel;
