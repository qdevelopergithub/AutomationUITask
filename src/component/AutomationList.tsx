import React from "react";

interface Automation {
  id: number;
  name: string;
  trigger: string;
  runs: string | number;
  ctr: string;
  modified: string;
  active: boolean;
  tag?: string;
}

interface Props {
  automations: Automation[];
  searchTerm?: string;
  viewMode: "list" | "grid";
  sortBy: "name" | "modified";
  sortOrder: "asc" | "desc";
  setSortBy: (key: "name" | "modified") => void;
  setSortOrder: (order: "asc" | "desc") => void;
}

export default function AutomationList({
  automations,
  searchTerm,
  viewMode,
  sortBy,
  sortOrder,
  setSortBy,
  setSortOrder
}: Props) {
  const highlightText = (text: string) => {
    if (!searchTerm) return text;
    return text
      .split(new RegExp(`(${searchTerm})`, "gi"))
      .map((part, index) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={index} className="bg-yellow-200">
            {part}
          </mark>
        ) : (
          part
        )
      );
  };

  if (viewMode === "grid") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {automations.map(({ id, name, trigger, runs, ctr, modified, active, tag }) => (
          <div key={id} className="bg-white p-4 rounded shadow-md flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="font-semibold text-gray-800 flex gap-2 items-center">
                {active && <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full" title="Active" />}
                <span>{highlightText(name)}</span>
              </div>
              <button
                disabled
                className={`text-xs font-semibold rounded-full px-3 py-1 ${
                  active ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
                }`}
              >
                {active ? "On" : "Off"}
              </button>
            </div>
            <p className="text-xs text-gray-500 truncate">🎯 {trigger}</p>
            {tag && (
              <span className="text-xs text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full w-fit">
                {tag}
              </span>
            )}
            <div className="flex justify-between text-xs text-gray-500">
              <span>Runs: {runs}</span>
              <span>CTR: {ctr}</span>
            </div>
            <div className="text-xs text-right text-gray-400">Modified: {modified}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="max-w-5xl">
      <div className="grid grid-cols-12 gap-4 text-sm text-gray-500 font-semibold mb-2">
        <div
          className="col-span-6 flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setSortBy("name");
            setSortOrder(sortBy === "name" && sortOrder === "asc" ? "desc" : "asc");
          }}
        >
          <input type="checkbox" className="cursor-pointer" />
          Name <span>{sortBy === "name" ? (sortOrder === "asc" ? "↑" : "↓") : "⬍"}</span>
        </div>
        <div className="col-span-2 text-center">Runs</div>
        <div className="col-span-2 text-center">CTR</div>
        <div
          className="col-span-2 text-right cursor-pointer"
          onClick={() => {
            setSortBy("modified");
            setSortOrder(sortBy === "modified" && sortOrder === "asc" ? "desc" : "asc");
          }}
        >
          Modified <span>{sortBy === "modified" ? (sortOrder === "asc" ? "↑" : "↓") : "⬍"}</span>
        </div>
      </div>

      {automations.map(({ id, name, trigger, runs, ctr, modified, active, tag }) => (
        <div
          key={id}
          className="col-span-12 bg-white rounded-lg shadow-sm p-4 grid grid-cols-12 items-center gap-4 text-gray-700"
        >
          <div className="col-span-6 flex items-start gap-2">
            <input type="checkbox" className="mt-1 cursor-pointer" />
            <div className="flex flex-col gap-1 w-full">
              <div className="flex items-center gap-2 font-semibold">
                {active && <span className="w-3 h-3 rounded-full bg-yellow-400" title="Active" />}
                <span className="truncate">{highlightText(name)}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 overflow-hidden truncate">
                <span className="text-pink-400">🎯</span>
                <span className="truncate">{trigger}</span>
                {tag && (
                  <span className="border border-blue-300 bg-blue-50 rounded-full px-2 py-0.5 text-blue-600 whitespace-nowrap">
                    {tag}
                  </span>
                )}
              </div>
            </div>
            <button
              disabled
              className={`ml-auto rounded-full px-3 py-1 text-xs font-semibold ${
                active ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
              }`}
              title={active ? "On" : "Off"}
            >
              {active ? "On" : "Off"}
            </button>
          </div>
          <div className="col-span-2 text-center font-semibold">{runs}</div>
          <div className="col-span-2 text-center font-semibold">{ctr}</div>
          <div className="col-span-2 text-right text-sm text-gray-500">{modified}</div>
        </div>
      ))}
    </section>
  );
}
