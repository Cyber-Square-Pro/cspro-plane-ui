"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { QuickBacklogCreateForm } from "@/components/forms/project/quick-backlog-create-form";

/*
  Author: Muhammed Adnan on June 10th, 2024
  Purpose: Renders the CreateSprint component, which allows users to start a sprint and plan issues for it.
  Props: None
*/

export const CreateSprint = () => {
  return (
    <div className="h-52 bg-zinc-100 flex flex-col items-center justify-center mb-5 px-2">
      <div className="flex items-center justify-between w-full text-[13px] text-zinc-600 font-bold py-2 px-2">
        <span>Sprint</span>
        <Button className="p-3 bg-white hover:bg-white border text-slate-600 h-[29px] text-[12px] rounded-sm">
          Start sprint
        </Button>
      </div>
      <div className="border-dashed border-2 border-gray-300 rounded-md h-36 w-full mx-5 flex flex-col items-center justify-center">
        <div className="w-96">
          <h2 className="text-[12px] font-semibold text-gray-700 mb-1">
            Plan your sprint
          </h2>
          <p className="text-[12px] font-medium">
            Drag issues from the <span className="font-bold">Backlog</span>{" "}
            section, or create new issues, to plan the work for this sprint.
            Select <span className="font-bold">Start sprint</span> when you&apos;re
            ready.
          </p>
        </div>
      </div>
      <QuickBacklogCreateForm />
    </div>
  );
};
