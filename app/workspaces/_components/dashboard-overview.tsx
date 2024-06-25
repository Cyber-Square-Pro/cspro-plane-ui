"use client";
import React from "react";
import { DashboardIssueCard } from "./cards/dashboard-issue-card";
import { IssueStatusCard } from "./cards/issue-status-card";
import { UserGreeting } from "./user-greeting";
import {
  BarChart2,
  HomeIcon,
} from "lucide-react";
import DashboardHeader from "./headers/dashboard-header";
import { useMobxStore } from "@/store/store.provider";
 
/*
  Author: Fidha Noushad on May 20th, 2024
  Purpose: Renders Dashboard
  Props: None
  updated by: - Mohammed Rifad on May 23nd, 2024 - added reusable dashboard header
              - Muhammed Adnan on May 25th, 2024 - Sticky header, removed multi-scrollbar's

*/

export const DashboardOverView: React.FC = () => {
   
  const {
    user: { currentUser },
    } = useMobxStore();

   const userName = currentUser? currentUser?.first_name.toLowerCase() + " " + currentUser?.last_name.toLowerCase(): "" 
    console.log(currentUser)
  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <header className="border-b-2 p-4 sticky top-0 bg-white z-10">
        <h1>
          <DashboardHeader icon={HomeIcon} title="Home" />
        </h1>
      </header>

        <div className="flex-1 overflow-y-auto bg-zinc-100">
        <div className="space-y-7 p-7 h-full w-full flex flex-col">
          <UserGreeting displayName = {userName} />
 
          <div className="grid lg:grid-cols-2 gap-7">
            <div className="lg:col-span-2">
              <div className="bg-[#ffffff] rounded-xl border-[0.5px] w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 p-0.5 hover:shadow-md duration-300 [&>div>a>div]:border-r [&>div:last-child>a>div]:border-0 [&>div>a>div]:border-2[&>div:nth-child(2)>a>div]:border-0 [&>div:nth-child(2)>a>div]:lg:border-r">
                <IssueStatusCard count={0} description="Issues Assigned" />
                <IssueStatusCard count={0} description="Issues Created" />
                <IssueStatusCard count={0} description="Issues Overdue" />
                <IssueStatusCard count={0} description="Issues Completed" />
              </div>
            </div>

            <DashboardIssueCard
              title="Assigned to you"
              description="Issues assigned to you that are pending will show up here."
              icon={<BarChart2 />}
            />
            <DashboardIssueCard
              title="Created by you"
              description="Issues created by you that are pending will show up here."
            />
            <DashboardIssueCard
              title="Assigned by state"
              description="Issue assigned to you, broken down by state, will show up here."
            />
            <DashboardIssueCard
              title="Assigned by priority"
              description="Issues assigned to you, broken down by priority will show up here."
            />
            <DashboardIssueCard
              title="Your issue activities"
              description="All your issue activities across projects will show up here."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
