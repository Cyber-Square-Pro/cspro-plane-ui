"use client"
import React from "react";
import { ChevronLeft, LogOut, MoveLeft } from "lucide-react";
import Link from "next/link";
import Sidebar from "@/components/sidebar/profile-settings-sidebar/sidebar";
import { PROFILE_ACTION_LINKS, WORKSPACE_ACTION_LINKS } from "@/constants/profile";

/*
  Author: Muhammed Adnan on June 2nd, 2024
  Purpose: Provides a layout for the profile settings page, including a sidebar with navigation links and content.
  Props: 
    - children: ReactNode - The content to be rendered within the layout.
*/

const ProfileSettingsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col fixed h-full w-[280px] border-r">
        <div className="p-3 h-full">
          <Link href="/workspaces/test" className="flex items-center gap-2">
            <ChevronLeft size={20} strokeWidth={1} />
            <h6 className="font-semibold">Profile settings</h6>
          </Link>
        <h6 className="text-[13px] font-semibold text-gray-500 mt-3 ml-1 mb-1">Your account</h6>
          <Sidebar RouteList={PROFILE_ACTION_LINKS} />
        <h6 className="text-[13px] font-semibold text-gray-500 mt-3 ml-1 mb-2 rounded-sm hover:bg">Workspaces</h6>
        <Link href="/workspaces/dashboard" className="flex items-center justify-center text-[13px] cursor-pointer">
          <button className="flex w-full items-center gap-x-2 px-3 py-1 rounded-sm hover:bg-gray-200 font-[500]">
              <span className="flex items-center justify-center h-6 w-6 rounded bg-blue-900 text-white ">S</span>
              <h6>Workspace Name</h6>
          </button>
        </Link>
        <Sidebar RouteList={WORKSPACE_ACTION_LINKS} />
        </div>
        
        <div className="bottom-0 left-0 right-0 flex justify-between items-center">
          <div className="ml-3 items-center">
            <button className="w-full flex items-center justify-start text-red-500 gap-2 p-2">
              <LogOut size={14}/>
              <span className="text-[13px] font-[500]">Sign out</span>
            </button>
          </div>
          <div className="items-center text-slate-600 mr-6">
            <MoveLeft className="h-4 w-4" />
          </div>
        </div>
      </div>
      <main className="flex-1 flex justify-center ml-[280px]">{children}</main>
    </div>
  );
};
export default ProfileSettingsLayout;
