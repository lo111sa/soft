import React from "react";
import VisitsSection from "./components/VisitsSection";
import AmbulSection from "./components/AmbulSection";
import StacSection from "./components/StacSection";

const Registry = () => {
  return (
    <div className="flex flex-col my-2 gap-2 h-[calc(100vh-85px)]">
      {/*  <VisitsSection /> */}
      <AmbulSection />
      {/*   <StacSection /> */}
    </div>
  );
};

export default Registry;
