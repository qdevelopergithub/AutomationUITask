// FlowCanvas.tsx
import React from "react";

const TriggerCard = () => (
  <div className="bg-white rounded-xl shadow-md p-5 max-w-xs mb-3">
    <div className="flex items-center space-x-2 mb-2">
      <svg
        className="w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      <p className="font-semibold">When...</p>
    </div>
    <div className="p-2 border border-green-400 rounded-md max-w-xs text-sm text-green-600 font-semibold flex items-center gap-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="#ea4c89"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.75 8.29a1.5 1.5 0 011.5 1.5v3.41a1.5 1.5 0 01-3 0v-2.58l-1-.79a.5.5 0 01-.24-.43v-.72a.5.5 0 01.77-.42l.98.77z" />
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#ea4c89"
          strokeWidth="2"
        />
      </svg>
      User comments on your Post or Reel
    </div>
    <p className="text-xs mt-2 font-semibold text-gray-500">Post or Reel Comments #25</p>
    <button className="mt-2 text-blue-500 font-medium text-sm hover:underline focus:outline-none" type="button">
      + New Trigger
    </button>
  </div>
);

const FirstStepCard = () => (
  <div className="border border-gray-300 rounded-xl max-w-sm p-5 text-gray-600 relative">
    <p className="text-sm mb-3 text-gray-900 cursor-default">
      Choose first step <span className="text-yellow-400">👇</span>
    </p>
    <ul className="space-y-2">
      <li className="flex items-center gap-2 cursor-pointer">
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="#C13584"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37a4 4 0 11-5-3.412" />
          <path d="M15 21h.01" />
        </svg>
        Instagram
      </li>
      <li className="flex items-center gap-2 cursor-pointer">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M14 10l-4 4m0-4l4 4" />
        </svg>
        AI Step
      </li>
      <li className="flex items-center gap-2 cursor-pointer">
        <svg
          className="w-5 h-5 text-yellow-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
        Actions
      </li>
      <li className="flex items-center gap-2 cursor-pointer">
        <svg
          className="w-5 h-5 text-blue-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M12 20v-6m0-4v-4m-4 4h8m-6 8h4" />
        </svg>
        Condition
      </li>
      <li className="flex items-center gap-2 cursor-pointer">
        <svg
          className="w-5 h-5 text-purple-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9 12h6M12 9v6" />
        </svg>
        Randomizer
      </li>
      <li className="flex items-center gap-2 cursor-pointer">
        <svg
          className="w-5 h-5 text-red-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Smart Delay
      </li>
    </ul>
  </div>
);

const FlowCanvas: React.FC = () => (
  <div className="flex flex-col flex-grow min-h-[600px] p-10 overflow-auto bg-gray-50 rounded-lg max-w-3xl">
    <div className="flex items-center gap-8">
      <TriggerCard />
      <div className="h-0.5 flex-grow bg-gray-300 relative">
        <div className="absolute left-0 -top-2 w-3 h-3 bg-gray-500 rounded-full shadow-md" />
      </div>
      <FirstStepCard />
    </div>
    <div className="flex flex-col items-center justify-center gap-4 mt-10">
      <button
        className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full shadow-lg text-white text-3xl cursor-pointer hover:bg-blue-700 focus:outline-none"
        aria-label="Add step"
        type="button"
      >
        +
      </button>
      <div className="flex space-x-4">
        <button className="p-2 rounded border border-gray-400 hover:bg-gray-200 focus:outline-none" type="button">
          +
        </button>
        <button className="p-2 rounded border border-gray-400 hover:bg-gray-200 focus:outline-none" type="button">
          -
        </button>
      </div>
    </div>
  </div>
);

export default FlowCanvas;