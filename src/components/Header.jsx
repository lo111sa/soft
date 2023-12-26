import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useAuthStore } from "../store/authStore";
const Header = () => {
  const auth = useAuthStore();
  return (
    <header className="flex justify-between items-center bg-[#F4F4F4] shadow-md px-2 py-2">
      {/* Left side */}
      <div>მართვის პანელი</div>
      {/* Right side */}

      <div className="flex items-center gap-4">
        <button className="bg-[#E99344] text-white px-2 py-3 rounded-md">
          {auth.user?.position + ": " + auth.user?.name}
        </button>

        <button
          onClick={() => auth.logout()}
          className="flex items-center gap-2 text-white px-5 py-3 rounded-md bg-gradient-to-b from-[#007BB3] via-[#2d9acc] to-[#007BB3]"
        >
          <ExitToAppIcon />
          გასვლა
        </button>
      </div>
    </header>
  );
};

export default Header;
