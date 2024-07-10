"use client";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { UsersRound, Layers3, Calendar } from "lucide-react";

/*
  Author: Ridhwan on July 9th, 2024
  Purpose: Displays a list of issues
  Props: 
    - title: string - The title of the issue card.
*/

interface Props {
  title: string;
}

interface IssueType {
  Icon: LucideIcon;
  description: string;
  date: string;
}

export const DashboardEntryIssueCard: React.FC<Props> = (props) => {
  const { title } = props;
  const [showAll, setShowAll] = useState(false);

  const issues: IssueType[] = [
    {
      Icon: UsersRound,
      description: "You deleted an Issue",
      date: "3 days ago",
    },
    {
      Icon: Layers3,
      description: "You removed an assignee Fidha from an Issue",
      date: "3 days ago",
    },
    {
      Icon: Calendar,
      description: "You removed an assignee AjayGP from an Issue",
      date: "3 days ago",
    },
    {
      Icon: UsersRound,
      description: "You removed the start date from an Issue",
      date: "3 days ago",
    },
    {
      Icon: Layers3,
      description: "You added a new assignee Fidha to an Issue",
      date: "3 days ago",
    },
    {
      Icon: Calendar,
      description: "You added 3TEST-1 task to the cycle cycle 2",
      date: "3 days ago",
    },
    {
      Icon: UsersRound,
      description: "You added a new assignee fidha to 3TEST-1 task1",
      date: "3 days ago",
    },
    {
      Icon: Layers3,
      description: "You added a new assignee AjayGP to an Issue",
      date: "3 days ago",
    },
    {
      Icon: Calendar,
      description: "Reminder issue",
      date: "3 days ago",
    },
    {
      Icon: UsersRound,
      description: "User login problem",
      date: "3 days ago",
    },
  ];

  const itemsToShow = showAll ? issues : issues.slice(0, 6);

  return (
    <div className="bg-[#ffffff] rounded-xl border-[0.5px] w-full hover:shadow-md duration-300 flex flex-col min-h-96">
      <div className="flex items-center justify-between gap-2 p-6 pl-7">
        <div className="flex items-center gap-2">
          <Link href="#" className="text-lg font-semibold">
            {title}
          </Link>
        </div>
      </div>
      <div className="px-7">
        {itemsToShow.map((item, index) => (
          <div key={index} className="flex mb-4 items-start text-sm font-normal text-slate-800">
            <div className="mt-2">
              <item.Icon size={14} className="text-slate-600" />
            </div>
            <div className="flex flex-col ml-4">
              <h1 className="font-normal text-md">{item.description}</h1>
              <h2 className="text-slate-600">{item.date}</h2>
            </div>
          </div>
        ))}
        {issues.length > 6 && (
          <div className="w-full flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-500 hover:text-blue-700 mt-4 items-center text-sm mb-2"
            >
            {showAll ? "Show less" : "View all"}
          </button>
            </div>
        )}
      </div>
    </div>
  );
};
