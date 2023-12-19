// Input.js
import React from "react";

const Input = ({ label, placeholder, onChange, value, readOnly, type }) => {
  return (
    <div className="mb-1">
      {label && <label className="block text-white mb-1">{label}</label>}
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none  focus:shadow-outline"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        readOnly={readOnly}
      />
    </div>
  );
};

export default Input;
