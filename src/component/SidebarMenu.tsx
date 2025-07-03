import React from "react";
import { TbBrandStackshare } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import { HiOutlineFastForward } from "react-icons/hi";

const menuItems = [
  { label: "My Automations", icon: <TbBrandStackshare />, active: true },
  { label: "Basic", icon: <BiCategoryAlt /> },
  { label: "Sequences", icon: <HiOutlineFastForward /> },
];

const SidebarMenu = () => {
  return (
    <nav className="w-60 bg-gray-50 flex flex-col py-4 px-5">
      {menuItems.map(({ label, icon, active }) => (
        <div
          key={label}
          className={`flex items-center gap-2 px-5 py-2 rounded-md cursor-pointer text-sm select-none ${
            active
              ? "bg-gray-200 text-gray-900 font-semibold"
              : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          }`}
        >
          <span>{icon}</span>
          {label}
        </div>
      ))}
      <div className="flex-grow" />
    </nav>
  );
};

export default SidebarMenu;