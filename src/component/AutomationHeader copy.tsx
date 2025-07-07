import React from "react";
import { useNavigate } from "react-router-dom";

const AutomationHeader = () => {
 const navigate = useNavigate();
 // Initialize useNavigate hook
  const handleNewAutomation = () => {
    navigate("/create-new-automation"); // ✅ navigate to the route
  };

  return (
    <header className="flex justify-between items-center pb-4 mb-6 border-b border-gray-200">
      <h1 className="text-xl font-semibold">My Automations</h1>
      <button
        className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 px-4 rounded"
        onClick={handleNewAutomation}
      >
        + New Automation
      </button>
    </header>
  );
};

export default AutomationHeader;
