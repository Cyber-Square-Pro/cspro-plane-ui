"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreateSprint } from "./modals/quick-create-sprint";
import { QuickBacklogCreateForm } from "@/components/forms/project/quick-backlog-create-form";

/*
  Author: Muhammed Adnan on June 10th, 2024
  Purpose: Renders the BacklogsList component, which displays the list of backlogs and allows the 
           quick creation of new sprints.
  Props: None
*/

export const BacklogsList = () => {
  const [sprints, setSprints] = useState<number[]>([]);
  const issues = ["issue 1", "issue 2", "issue 3", "issue 4", "issue 5"];

  const handleCreateSprint = () => {
    setSprints([...sprints, sprints.length + 1]);
  };

  return (
    <div className="h-full w-full bg-zinc-50 flex flex-col">
      <div className="flex-1 overflow-x-scroll max-h-screen pb-20 w-full">
        {sprints.map((_, index) => (
          <CreateSprint key={index} />
        ))}
        <div className="flex items-center text-[13px] text-zinc-600 font-bold justify-between pl-10 pr-3 pb-2">
          <span>Backlogs</span>
          <Button
            className="p-3 bg-white hover:bg-white border text-slate-600 h-[29px] text-[12px] rounded-sm"
            onClick={handleCreateSprint}
          >
            Create sprint
          </Button>
        </div>
        {issues.map((issue, index) => (
          <div
            key={index}
            className="flex h-10 w-full items-center bg-white p-4 border-b"
          >
            <div className="flex items-center gap-2 text-[13px] text-black pl-8">
              <span>{issue}</span>
            </div>
          </div>
        ))}
        <QuickBacklogCreateForm />
      </div>
    </div>
  );
};
