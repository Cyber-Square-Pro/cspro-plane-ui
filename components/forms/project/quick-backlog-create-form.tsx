import { PlusIcon } from "lucide-react";
import React, { useState } from "react";

/*
  Author: Muhammed Adnan on June 10th, 2024
  Purpose: Provides a form for create new backlog issue.
  Props: None
*/

export const QuickBacklogCreateForm = () => {
  const [issues, setIssues] = useState<string[]>([""]);
  const [isAdding, setIsAdding] = useState(false);
  const [newIssueTitle, setNewIssueTitle] = useState("");

  const handleAddIssueClick = () => {
    setIsAdding(true);
  };

  const handleNewIssueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewIssueTitle(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newIssueTitle.trim() !== "") {
      setIssues([newIssueTitle, ...issues]);
      setNewIssueTitle("");
      setIsAdding(false);
    }
  };

  return (
    <div
      className={`flex h-10 w-full items-center cursor-pointer text-gray-600 ${
        isAdding
          ? "border-b border-gray-300"
          : "hover:bg-gray-200 hover:text-black"
      } overflow-hidden`}
    >
      {isAdding ? (
        <div className="w-full h-full">
          <form
            className="flex h-full items-center text-[13px] w-full"
            onSubmit={handleFormSubmit}
          >
            <input
              className="h-full w-full border-none outline-none pl-12 text-black"
              value={newIssueTitle}
              onChange={handleNewIssueChange}
              placeholder="Issue Title"
              autoFocus
            />
          </form>
        </div>
      ) : (
        <button
          className="flex w-full items-center gap-2 pl-7"
          onClick={handleAddIssueClick}
        >
          <PlusIcon size={14} strokeWidth={1} />
          <span className="text-[13px] font-[500]">New Issue</span>
        </button>
      )}
    </div>
  );
};
