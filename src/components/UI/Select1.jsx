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
  const [valueToShow, setValueToShow] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setPopup(false);
    }
  };

  useEffect(() => {
    setFilteredOptions(options);
    setValueToShow("");
  }, [options]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);

    // Filter options based on the input text
    const filtered = options.filter((item) =>
      item.label.toLowerCase().includes(inputText.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <div className="relative" ref={selectRef}>
      {label && <label className="block  mb-1">{label}</label>}

      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight cursor-pointer ${
          errors && errors[name] && "border-2 border-red-400 border-spacing-7"
        }  focus:outline-none  focus:shadow-outline`}
        onClick={() => setPopup(!popup)}
        placeholder={defaultText}
        value={valueToShow}
        name={name}
        {...(register ? register(name, validation) : {})}
        readOnly
      />
      <div className="pointer-events-none cursor-pointer absolute top-[40px] right-0 flex items-center  px-2 text-gray-700">
        <img src="/img/down-arrow.png" alt="" />
      </div>
      {errors && errors[name] && (
        <p className="text-red-600 text-sm">{errors[name].message}</p>
      )}

      {/* POPUP */}
      {popup ? (
        <ul
          className={`absolute min-w-full z-50 max-h-80 overflow-y-auto overflow-x-hidden my-1 rounded  bg-white text-gray-700   top-full
          `}
        >
          {/* Search input */}
          <div className="px-1 py-2 sticky top-0 bg-white">
            {filteredOptions.length || searchText !== "" ? (
              <input
                value={searchText}
                placeholder="ძიება..."
                className="shadow p-1 w-full rounded-md focus:outline-none border-2 border-sky-600"
                onChange={handleInputChange}
              />
            ) : (
              <p className="text-center text-gray-400">ცარიელია</p>
            )}
          </div>
          {filteredOptions.map((item) => (
            <li
              onClick={() => {
                onChange ? onChange(item.value) : null;
                setSelectedValue(item.value);
                setValueToShow(item.label);
                setPopup(false);
              }}
              key={item.label}
              className="border-b py-1 cursor-pointer hover:bg-slate-100 px-2"
            >
              {item.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Select1;
