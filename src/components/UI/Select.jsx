// Select.js
import React from "react";

const Select = ({ label, options, onChange, value, defaultText }) => {
  return (
    <div className="mb-1">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className="block appearance-none w-full bg-white border text-gray-700 border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
          onChange={onChange}
          value={value}
        >
          <option value="none" hidden>
            {defaultText || ""}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none cursor-pointer absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <img src="/img/down-arrow.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Select;
