import React from "react";
import { FiUser } from "react-icons/fi";
import { RxHome } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoChatbubblesSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

const icons = [
  { name: "Profile", icon: <FiUser />, pro: true },
  { name: "Home", icon: <RxHome /> },
  { name: "Users", icon: <FaUsers /> },
  { name: "Campaigns", icon: <SiRedux /> },
  { name: "Chat", icon: <IoChatbubblesSharp />, unreadCount: 1 },
  { name: "Settings", icon: <IoIosSettings /> },
];

const SidebarIcons = () => {
  return (
    <aside className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-5">
      <div className="relative cursor-pointer select-none" title="Profile">
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-2xl">👤</div>
        <span className="absolute -bottom-1.5 -right-1.5 bg-blue-600 text-white text-[10px] font-extrabold rounded px-1">PRO</span>
      </div>
      {icons.slice(1).map(({ name, icon, unreadCount }) => (
        <div
          key={name}
          className="relative text-2xl text-gray-400 hover:text-blue-600 cursor-pointer"
          title={name}
        >
          {icon}
          {unreadCount && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-white text-[10px] font-semibold">
              {unreadCount}
            </span>
          )}
        </div>
      ))}
    </aside>
  );
};

export default SidebarIcons;