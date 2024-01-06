import React from "react";
import { useForm, useController } from "react-hook-form";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

const Select1 = ({ label, options, name, validation, errors }) => {
  return (
    <div>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight ${
          errors && "border-2 border-red-400 border-spacing-7"
        }  focus:outline-none  focus:shadow-outline`}
        name={name}
      />

      {/* Other input fields or components can be added here */}
    </div>
  );
};

export default Select1;
