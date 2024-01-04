// Select.js
import React from "react";

const Select = ({
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
  return (
    <div className="mb-1">
      {label && <label className="block  mb-1">{label}</label>}
      <div className="relative">
        <div className="relative">
          <select
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight ${
              errors &&
              errors[name] &&
              "border-2 border-red-400 border-spacing-7"
            }  focus:outline-none  focus:shadow-outline`}
            onChange={onChange}
            value={value}
            name={name}
            {...(register ? register(name, validation) : {})}
          >
            <option value="" hidden>
              {defaultText || ""}
            </option>

            {options?.map((option) => (
              <option
                className="px-2 text-gray-500"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          {errors && errors[name] && (
            <p className="text-red-400 text-sm">{errors[name].message}</p>
          )}
        </div>

        <div className="pointer-events-none cursor-pointer absolute top-4 right-0 flex items-center  px-2 text-gray-700">
          <img src="/img/down-arrow.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Select;
