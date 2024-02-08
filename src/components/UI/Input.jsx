// Input.js
import { useForm } from "antd/es/form/Form";
import React from "react";

const Input = ({
  label,
  placeholder,
  onChange,
  value,
  readOnly,
  type,
  autoFocus,
  name,
  register,
  validation,
  errors,
}) => {
  return (
    <div className="mb-1">
      {label && <label className="block  mb-1">{label}</label>}

      <div>
        <input
          className={`border border-gray-200 appearance-none  rounded-md w-full py-2 px-3 text-gray-700  leading-tight ${
            errors && errors[name] && "border-2 border-red-400 border-spacing-7"
          }  focus:outline-none  focus:shadow-outline`}
          type={type}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onChange={onChange}
          value={value}
          readOnly={readOnly}
          name={name}
          {...(register ? register(name, validation) : {})}
        />
        {errors && errors[name] && (
          <p className="text-red-400 text-sm">{errors[name].message}</p>
        )}
      </div>
    </div>
  );
};

export default Input;

/* (
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none  focus:shadow-outline"
          type={type}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onChange={onChange}
          value={value}
          readOnly={readOnly}
          name={name}
        />
      ) */
