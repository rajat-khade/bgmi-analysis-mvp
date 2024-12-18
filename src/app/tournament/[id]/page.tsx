"use client";
import NavbarMain from "@/app/components/NavbarMain";
import PlayerTrackingPage from "@/app/components/PlayerTrackingPage";
import { Sidebar, SidebarItem } from "@/app/components/Sidebar";
import DropLocationTable from "@/app/drop-location/DropLocationTable";
import DropMap from "@/app/drop-location/DropMap";
import { Map, MapPinned, Settings, Waypoints } from "lucide-react";
import { use, useState } from "react";

// type MatchKey = 'Match 1' | 'Match 2' | 'Match 3' | 'Match 4' | 'Match 5' | 'Match 6';

export default function TournamentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params); // Unwrap the asynchronous params
  const [activeTab, setActiveTab] = useState<string>("Drop Map");
  const [selectedDay, setSelectedDay] = useState<string>("Day 1");

  const renderContent = () => {
    switch (activeTab) {
      case "Drop Map":
        return <DropMap selectedDay={selectedDay as "Day 1"|"Day 2"|"Day 3"} />;
      case "Drop Stats":
        return (selectedDay === "Day 1" && <DropLocationTable/>);
      case "Rotations":
        return (
          <div className="w-[800px] h-auto">
            <PlayerTrackingPage/>
          </div>
        );
      case "Settings":
        return <div>Configure your Settings here.</div>;
      default:
        return <div>Select a tab from the sidebar.</div>;
    }
  };

  return (
    <div>
      <NavbarMain onDaySelect={setSelectedDay} />
      <div className="flex flex-row">
        <Sidebar>
          <SidebarItem onClick={() => setActiveTab("Drop Map")} icon={<Map size={20} />} text="Drop Map" active={activeTab==="Drop Map"} />
          <SidebarItem onClick={() => setActiveTab("Drop Stats")} icon={<MapPinned size={20} />} text="Drop Stats" active={activeTab==="Drop Stats"} />
          <SidebarItem onClick={() => setActiveTab("Rotations")} icon={<Waypoints size={20} />} text="Rotations" active={activeTab==="Rotations"} />
          <SidebarItem onClick={() => setActiveTab("Settings")} icon={<Settings size={20} />} text="Settings" active={activeTab==="Settings"} />
        </Sidebar>
        <div className="p-6 w-[100%]">
          <h1>Tournament {id} : BMPS 2024</h1>
          <div>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}
