import React from "react";
import "./style.css";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-40 z-50">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-white h-12 w-12 mb-4"></div>
    </div>
  );
};

export default Loader;
