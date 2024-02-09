import React, { useState } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useAuthStore } from "../store/authStore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  const auth = useAuthStore();
  const [popup, setPopup] = useState(false);

  return (
    <header className="flex justify-between items-center bg-[#12223f] shadow-md px-2 py-2">
      {/* Left side */}
      <div className="text-white">LOGO</div>
      {/* Right side */}

      <div className="flex items-center gap-4">
        <div
          onClick={() => setPopup(!popup)}
          className="relative flex items-center justify-center text-white px-2 py-2 rounded-md cursor-pointer"
        >
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200">
              <img className="object-center" src="/img/avatar.png" alt="" />
            </div>
            {auth.user?.name}
          </div>

          <ExpandMoreIcon />

          {/* Popup div */}
          {popup && (
            <div className="absolute flex flex-col top-12 right-0 w-52 py-2 text-black bg-gray-50 border border-gray-300 shadow-lg rounded z-50">
              <button
                onClick={() => auth.logout()}
                className="flex items-center gap-2 px-5 py-2 rounded-md "
              >
                <ExitToAppIcon />
                გასვლა
              </button>
            </div>
          )}
        </div>

        {/* */}
      </div>
    </header>
  );
};

export default Header;
