import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

const Select1 = ({
  label,
  options,
  onChange,
  value,
  defaultText,
  name,
  register,
  validation,
  errors,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");

  const [open, setOpen] = useState(false);

  console.log(selected);
  return (
    <div>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight ${
          errors && errors[name] && "border-2 border-red-400 border-spacing-7"
        }  focus:outline-none  focus:shadow-outline`}
        onChange={onChange}
        value={selected}
        name={name}
      />

      <input type="text" onChange={(e) => setSelected(e.target.value)} />
    </div>
  );
};

export default Select1;
