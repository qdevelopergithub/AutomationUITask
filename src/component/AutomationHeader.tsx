import React from "react";

const AutomationHeader = () => {
  return (
    <header className="flex justify-between items-center pb-4 mb-6 border-b border-gray-200">
      <h1 className="text-xl font-semibold">My Automations</h1>
      <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 px-4 rounded">
        + New Automation
      </button>
    </header>
  );
};

export default AutomationHeader;
