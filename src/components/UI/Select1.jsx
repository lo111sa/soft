import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";

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
  const [popup, setPopup] = useState(true);
  const selectRef = useRef(null);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      {label && <label className="block  mb-1">{label}</label>}
      <input
        onClick={() => setPopup(!popup)}
        value={selectedValue}
        className={` shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight cursor-pointer ${
          errors && errors[name] && "border-2 border-red-400 border-spacing-7"
        }  focus:outline-none  focus:shadow-outline`}
        readOnly
      />
      <div className="pointer-events-none cursor-pointer absolute top-[40px] right-0 flex items-center  px-2 text-gray-700">
        <img src="/img/down-arrow.png" alt="" />
      </div>

      {/* POPUP */}
      {popup ? (
        <ul
          className={`absolute min-w-full z-50 max-h-60 overflow-y-auto overflow-x-hidden my-1 rounded  bg-white text-gray-700  py-1 top-full
          `}
        >
          {options
            ? options.map((item) => (
                <li
                  onClick={() => {
                    onChange(item.value);
                    setSelectedValue(item.label);
                    setPopup(false);
                  }}
                  key={item.label}
                  className="border-b py-1 cursor-pointer hover:bg-slate-100 px-2"
                >
                  {item.label}
                </li>
              ))
            : null}
        </ul>
      ) : null}
    </div>
  );
};

export default Select1;
