import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AmbulSearchPanel from "../pages/registry/components/AmbulSearchPanel";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const Menus = [
    { title: "ინფორმაცია", src: "chart_fill", link: "/info" },
    { title: "ჩვენს შესახებ", src: "chat", link: "/about" },
    { title: "სერვისები", src: "user", gap: false, link: "/services" },
    { title: "აქციები ", src: "calendar", link: "/offers" },
    { title: "ექიმები", src: "search", link: "/doctors" },
    { title: "ჯავშნები", src: "chart", link: "/reserve" },
    { title: "ბლოგი ", src: "folder", gap: false, link: "/blog" },
  ];
  return (
    <div
      className={` ${
        open ? "w-[300px]" : "w-20 "
      } bg-white border p-5 pt-8 mr-5 rounded relative duration-300 text-black-300`}
    >
      <img
        src="icons/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
       border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center justify-center">
        <h1
          className={`font-medium text-xl duration-200 ${!open && "scale-0"}`}
        >
          მენიუ
        </h1>
      </div>

      <AmbulSearchPanel />
    </div>
  );
};

export default Sidebar;
