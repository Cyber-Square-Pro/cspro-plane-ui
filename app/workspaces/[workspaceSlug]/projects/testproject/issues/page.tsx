"use client";
import React from "react";
import { ProjectSubHeader } from "@/app/workspaces/_components/headers/project-items-header";
import { CircleDashed, LucideLayers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BacklogsList } from "@/app/workspaces/_components/backlog-list";

/*
    Author: Muhammed Adnan on May 31st, 2024
    Purpose: Renders the ProjectIssues page.
*/

const ProjectIssuesPage = () => {
  return (
    <div className="h-screen w-full">
      <ProjectSubHeader
        icon={LucideLayers}
        title="Backlogs"
        btnText="Add Backlog"
      >
        <Button className="p-3 bg-white hover:bg-white border text-slate-600 h-[29px] text-[12px] rounded-sm">
          Filter
        </Button>
        <Button className="p-3 bg-white hover:bg-white border text-slate-600 h-[29px] text-[12px] rounded-sm">
          Display
        </Button>
        <Button className="p-3 bg-white hover:bg-white border text-slate-600 h-[29px] text-[12px] rounded-sm">
          Analytics
        </Button>
      </ProjectSubHeader>
      <div className="h-full w-full bg-zinc-50 flex flex-col">
      <div className="flex h-[2.5rem] w-full items-center p-6 justify-between">
        <div className="flex items-center gap-2 text-md">
          <CircleDashed size={16} className="text-gray-700" strokeWidth={1} />
          <span className="font-[500]">All Issues</span>
        </div>
      </div> 
      <BacklogsList />
      </div>
    </div>
  );
};

export default ProjectIssuesPage;
