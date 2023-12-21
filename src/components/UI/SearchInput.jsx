import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({
  value,
  data,
  onChange,
  action,
  placeHolder,
  type,
  readOnly,
  onSelect,
  label,
  name,
  register,
  validation,
  watch,
  errors,
}) => {
  const [open, setOpen] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  // Function to handle selecting a result
  const handleResultClick = (result) => {
    // Do something with the selected result
    onSelect(result);
    setOpen(false);
  };

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        action();
      }, 500) // Adjust the delay as needed
    );
    !open && setOpen(true);
    // Cleanup the timeout when the component unmounts
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [watch(name), value]);

  return (
    <div className="relative w-full">
      {label && <label className="block text-white mb-1">{label}</label>}
      <div className="relative flex items-center w-full">
        {register ? (
          <div className="relative w-full">
            <div className="absolute text-gray-700 right-1 top-2">
              <SearchIcon />
            </div>
            <input
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeHolder}
              readOnly={readOnly}
              name={name}
              {...register(name, validation)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight ${
                errors &&
                errors[name] &&
                "border-2 border-red-400 border-spacing-7"
              }  focus:outline-none  focus:shadow-outline`}
            />
            {errors && errors[name] && (
              <p className="text-red-400 text-sm">{errors[name].message}</p>
            )}
          </div>
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeHolder}
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline"
          />
        )}
      </div>

      {open && data ? (
        <div className="absolute overflow-y-auto mt-1 z-10 w-full max-h-[250px] text-gray-700 bg-white  rounded-md shadow-lg">
          {data?.map((result) => (
            <div
              key={result.id}
              onClick={() => handleResultClick(result)}
              className="p-2 cursor-pointer hover:bg-gray-100 border-b"
            >
              {result.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SearchInput;
