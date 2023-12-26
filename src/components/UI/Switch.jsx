// Switch.jsx
import React, { useState, useEffect } from "react";

const Switch = ({ onToggle }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    onToggle(toggle);
  }, [toggle, onToggle]);

  const toggleClass = "transform translate-x-40";

  return (
    <div
      className={`relative h-8 w-[193px] ${
        toggle ? "bg-[#f8483e]" : "bg-[#1a8377]"
      } rounded-full p-1 cursor-pointer`}
      onClick={handleToggle}
    >
      <p className="absolute mx-8 text-center">
        {toggle ? "შეუსრულებელი" : "შესრულებული"}
      </p>
      {/* Switch */}
      <div
        className={
          "bg-white h-6 w-6 rounded-full shadow-md transform duration-300 ease-in-out" +
          (toggle ? null : toggleClass)
        }
      ></div>
    </div>
  );
};

export default Switch;
