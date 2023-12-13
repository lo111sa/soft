// DatePicker.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import ka from "date-fns/locale/ka"; // Georgian locale from date-fns

// Register Georgian locale
registerLocale("ka", ka);

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="w-full text-black">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd.MM.yyyy"
        locale="ka" // Set the locale to Georgian
        placeholderText="თარიღი"
        className=" shadow appearance-none border rounded w-full  py-2 text-center  text-gray-700 leading-tight focus:outline-none  focus:shadow-outline"
      />
    </div>
  );
};

export default CustomDatePicker;
