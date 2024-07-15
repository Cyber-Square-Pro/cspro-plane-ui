"use client"
import "react-toastify/dist/ReactToastify.css";
import { SquarePen } from "lucide-react";
import { SearchIcon } from "lucide-react";
import SideBar from "@/components/sidebar/sidebar";
import ProjectList from "../_components/project-list";
import WorkspacePopover from "../_components/workspace-popover";
import ProfilePopover from "../_components/profile-popover";
import { UserWrapper } from "./wrapper/user-wrapper";
import { useState } from "react";
import { CreateIssueModal } from "../_components/modals/create-issue-modal";
import { useMobxStore } from "@/store/store.provider";
import { observer } from "mobx-react-lite";

/*
  Author: Reshma on April 21st, 2024
  Purpose: Renders layout for Workspace pages 
  Updated by: - Muhammed Adnan on May 21st, 2024 - Add Dashboard Sidebar and 'Your Projects' dropdown
              - Sreethu EA on May 22nd, 2024 - Removed extra div, replaced svg
                                               icon with lucide icon for search
              - Mohammed Rifad on May 23rd, 2024 - Removed header component to  
                                                   corresponding pages.
              - Sreethu EA on May 23rd, 2024 - Added popover component for workspace and profile 
              - Muhammed Adnan on May 25th, 2024 - Fixed behavior Sidebar, 
                                                   Adjusted padding, margin, icon-size as needed.
              - Mohammed Rifad on June 2nd, 2024 - Moved workspace popover and profile popover UI
                to components folder. Also wrapped layout with UserWrapper.
              - Nisha J on June 28th, 2024 - Added CreateNewIssue modal component for 'New Issue' button,
                  added Mobx store feature.
*/

const WorkspaceLayout = observer(({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { workspaceSlug: string };
}) => {
  const { workspaceSlug } = params;
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (label: string) => {
    setSelectedItem(label);
  };

  const { commandPalette: commandPaletteStore } = useMobxStore();

  console.log(commandPaletteStore.isCreateIssueModalOpen, "layout")
  return (
    <UserWrapper>
    <div className="min-h-screen flex">
      <aside className="w-[280px] overflow-hidden border-2 p-2">
        <nav>
          <div className="flex justify-between mt-1 mr-2">
            <WorkspacePopover slug={params.workspaceSlug}/>
              <ProfilePopover />
          </div>
          <div className="flex justify-between mt-3 p-1">
            <button className="border-2 px-2 py-2 rounded w-64 h-8 flex items-center" 
              onClick={() => commandPaletteStore.toggleCreateIssueModal(true)}>
              <SquarePen size={16} className="text-slate-700"/>
              <span className="text-[13px] font-medium ml-2">New Issue</span>              
            </button>
            {commandPaletteStore.isCreateIssueModalOpen && 
              (<CreateIssueModal/>)}
            
            <button className="ml-2 border-2 py-1 px-1 rounded w-9 h-8 flex items-center justify-center">
              <SearchIcon size={16} className="text-slate-700"/>
            </button>
          </div>
          <div className="w-full cursor-pointer mt-3">
            <SideBar isOnboarded={true} workspaceSlug={workspaceSlug} />
             
          </div>

          <div className="mt-4 h-full">
            <ProjectList />
          </div>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <main>{children}</main>
      </div>
    </div>
    </UserWrapper>
  );
})

export default WorkspaceLayout;
