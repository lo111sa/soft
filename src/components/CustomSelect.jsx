import React, { useState } from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";

const CustomSelect = ({
  label,
  placeholder,
  name,
  control,
  options,
  onChange,
  handleChange,
  errors,
  rules,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const styles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "white",
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
    <div className="">
      {label && <label className="block  mb-1">{label}</label>}

      {control ? (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field, field: { onChange, value } }) => (
            <Select
              {...field}
              styles={styles}
              placeholder={placeholder}
              options={options}
              value={selectedOption}
              onChange={(val) => {
                setSelectedOption(val);
                onChange(val.value);
                handleChange && handleChange(val);
              }}
            />
          )}
        />
      ) : (
        <Select
          styles={styles}
          placeholder={placeholder}
          options={options}
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e);
            handleChange && handleChange(e);
          }}
        />
      )}

      {errors ? (
        <p className="text-red-400 text-sm">{errors[name]?.message}</p>
      ) : null}
    </div>
  );
};
export default CustomSelect;

{
  /* <Controller
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
/> */
}
