import React from "react";
import { CiFolderOn } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

const folders = [
  { name: "FAQ", icon: <CiFolderOn /> },
];

const FolderSection = () => {
  return (
    <section className="flex items-center gap-3 mb-8 max-w-5xl">
      {folders.map(({ icon, name }) => (
        <button
          key={name}
          className="flex items-center gap-2 rounded bg-white py-1.5 px-6 shadow-md text-sm font-semibold text-blue hover:bg-gray-50"
        >
          <span>{icon}</span>
          {name}
        </button>
      ))}
      <button className="py-1.5 px-4 rounded border-2 border-dashed border-blue-400 text-blue-600 font-semibold text-sm hover:bg-blue-50">
        + New Folder
      </button>
      <div className="ml-auto text-blue-600 cursor-pointer text-sm flex items-center gap-1" title="Trash">
        <span><FaTrash /></span> Trash
      </div>
    </section>
  );
};

export default FolderSection;
