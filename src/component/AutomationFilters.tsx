import React from "react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  triggerFilter: string;
  setTriggerFilter: (value: string) => void;
  triggerStateFilter: string;
  setTriggerStateFilter: (value: string) => void;
}

const AutomationFilters: React.FC<Props> = ({
  search,
  setSearch,
  triggerFilter,
  setTriggerFilter,
  triggerStateFilter,
  setTriggerStateFilter,
}) => {
  return (
    <div className="flex space-x-3 mb-6 max-w-5xl">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search all Automations"
        className="flex-grow py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <select
        value={triggerFilter}
        onChange={(e) => setTriggerFilter(e.target.value)}
        className="py-2 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        <option>Any Trigger</option>
        <option>Trigger 1</option>
        <option>Trigger 2</option>
      </select>
      <select
        value={triggerStateFilter}
        onChange={(e) => setTriggerStateFilter(e.target.value)}
        className="py-2 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        <option>Any Trigger states</option>
        <option>On</option>
        <option>Off</option>
      </select>
    </div>
  );
};

export default AutomationFilters;
