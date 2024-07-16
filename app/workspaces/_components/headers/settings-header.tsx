
import React, { FC } from "react";
import { Settings, ChevronRight } from "lucide-react";
import { useMobxStore } from "@/store/store.provider";


const SettingsHeader = () => {

  const {
    workspace: { workspaces },
  } = useMobxStore();
  const workspaceName = workspaces && workspaces.length > 0 ? workspaces[0].name : "No Workspace";

  return (
    <div className="relative z-15 flex h-12 w-full flex-shrink-0 flex-row items-center justify-between border-b p-4">
      {/* Display of current title and settings icon starts on left-side */}
      <div className="flex items-center gap-2 overflow-ellipsis whitespace-nowrap">
        {/* Settings icon and title */}
        <div className="flex cursor-default items-center gap-1 text-sm font-medium ">
          <div className="flex h-6 w-6 items-center justify-center overflow-hidden">
            <Settings />
          </div>
          <div className="line-clamp-1 max-w-[150px] overflow-hidden truncate text-sm">
           <a href="#">{workspaceName}</a> 
          </div>
          <div className="flex h-6 w-6 items-center justify-center">
            <ChevronRight />
          </div>
        </div>
        <div className="line-clamp-1 max-w-[150px] overflow-hidden truncate text-sm">
          Settings
        </div>
      </div>
      {/* Display of current title and settings icon ends */}
    </div>
  );
};

export default SettingsHeader;
