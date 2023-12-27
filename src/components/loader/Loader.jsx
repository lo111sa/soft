import React from "react";
import "./style.css";
import PulseLoader from "react-spinners/PulseLoader";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 z-40">
      {/*  <div className="loader ease-linear rounded-full border-4 border-t-4 border-white h-12 w-12 mb-4"></div> */}

      <PulseLoader
        color={"white"}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
