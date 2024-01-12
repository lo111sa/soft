import React, { useState } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

const CustomSelect = ({
  label,
  name,
  placeholder,
  options,
  validation,
  onChange,
  control,
  errors,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const styles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#f7fafc",
      width: "100%",
    }),
    option: (base) => ({
      ...base,
      color: "#2d3748",
      borderBottom: "1px solid lightGray",
      backgroundColor: "white",
    }),
  };

  return (
    <div className="mb-1">
      {label && <label className="block  mb-1">{label}</label>}

      {control ? (
        <Controller
          name={name}
          control={control}
          rules={validation}
          render={({ field }) => (
            <Select
              {...field}
              styles={styles}
              options={options}
              isSearchable
              placeholder={placeholder}
            />
          )}
        />
      ) : (
        <Select
          styles={styles}
          options={options}
          isSearchable
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
      {errors && errors[name] && (
        <p className="text-red-400 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};
export default CustomSelect;
