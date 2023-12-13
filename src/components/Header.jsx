import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
const Header = () => {
  return (
    <header className="flex justify-between items-center bg-[#F4F4F4] shadow-md px-2 py-2">
      {/* Left side */}
      <div>მართვის პანელი</div>
      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="bg-[#E99344] text-white px-2 py-3 rounded-md">
          რეგისტრატორი: ასმათ ნამჩევაძე
        </button>

        <button className="flex items-center gap-2 bg-[#2C4C9C] text-white px-5 py-3 rounded-md">
          <ExitToAppIcon />
          გასვლა
        </button>
      </div>
    </header>
  );
};

export default Header;
