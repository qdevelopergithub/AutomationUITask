import { BsGrid } from "react-icons/bs"; 
import { useState } from "react";
import SidebarIcons from "./component/sidebarIcons";
import SidebarMenu from "./component/SidebarMenu";
import AutomationHeader from "./component/AutomationHeader";
import AutomationFilters from "./component/AutomationFilters";
import FolderSection from "./component/FolderSection";
import AutomationList from "./component/AutomationList";
import { automations } from "./data/automations";

const Automatic = () => {
    const [search, setSearch] = useState("");
    const [triggerFilter, setTriggerFilter] = useState("Any Trigger");
    const [triggerStateFilter, setTriggerStateFilter] = useState("Any Trigger states");
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");
    const [sortBy, setSortBy] = useState<"name" | "modified">("modified");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");


    const filteredAutomations = automations
        .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        )
        .filter((item) => {
            if (triggerStateFilter === "On") return item.active;
            if (triggerStateFilter === "Off") return !item.active;
            return true;
        })
        .sort((a, b) => {
            const valueA = a[sortBy].toString().toLowerCase();
            const valueB = b[sortBy].toString().toLowerCase();
            if (sortOrder === "asc") return valueA.localeCompare(valueB);
            else return valueB.localeCompare(valueA);
        });


    return (
        <div className="flex flex-col h-screen font-inter text-gray-800 bg-gray-50">
            <div className="flex justify-start border-b border-gray-200 px-3">
                <div className="pt-[18px] px-[21.5px] border-r border-gray-200">
                    <img src="./download.svg" alt="logo" className="w-6 h-6" />
                </div>
                <div className="text-lg font-medium px-3 py-3 cursor-pointer select-none">
                    Automations
                </div>
            </div>

            <div className="flex flex-1">
                <SidebarIcons />
                <SidebarMenu />

                <main className="flex-1 p-8 overflow-auto">
                    <AutomationHeader />
                    <AutomationFilters
                        search={search}
                        setSearch={setSearch}
                        triggerFilter={triggerFilter}
                        setTriggerFilter={setTriggerFilter}
                        triggerStateFilter={triggerStateFilter}
                        setTriggerStateFilter={setTriggerStateFilter}
                    />
                    <FolderSection />
                    <div className="max-w-5xl flex justify-end text-gray-500 cursor-pointer mb-4 items-center gap-1"
                        onClick={() => setViewMode(viewMode === "list" ? "grid" : "list")}>
                        <BsGrid/>
                        View as {viewMode === "list" ? "grid" : "list"}
                    </div>

                    <AutomationList
                        automations={filteredAutomations}
                        searchTerm={search}
                        viewMode={viewMode}
                        sortBy={sortBy}
                        sortOrder={sortOrder}
                        setSortBy={setSortBy}
                        setSortOrder={setSortOrder}
                    />
                </main>
            </div >
        </div>
    );
}

export default Automatic