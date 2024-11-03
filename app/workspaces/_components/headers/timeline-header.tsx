"use client";
import React from "react";
import { SearchIcon, ChevronDown, Share, ExternalLink, MoreHorizontal, Megaphone, User, UserPlus,Settings2 } from "lucide-react";
import { useRouter } from "next/navigation";

/*
  Author: Fathima swabri on october 27, 2024
  Purpose: Displays the header for the timeline
  Props: None
 */ 


const TimelineHeader = () => {
  const router = useRouter();

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Timeline</h1>
        <div className="flex space-x-4 items-center">
        
           <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded-md">
            <Megaphone size={16} />
            <span className="font-bold">Give Feedback</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded-md">
            <Share size={16} />
            <span className="font-bold">Share</span>
          </button>
  
          <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded-md">
            <ExternalLink size={16} />
            <span className="font-bold">Export</span> 
          </button>

          <button className="p-2 rounded-md hover:bg-gray-200">
            <MoreHorizontal size={16} className="text-gray-700" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-10 mb-6">
        <div className="relative w-60">
          <input
            type="text"
            placeholder="Search timeline"
            className="w-full px-4 py-2 text-gray-900 bg-white-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <SearchIcon size={16} className="absolute right-3 top-3 text-gray-500" />
        </div>
        <div className="flex items-center">
          <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User size={16} className="text-gray-900" />
          </button>
        </div>
        <div className="w-24"></div> 
        <div className="flex items-center">
          <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <UserPlus size={16} className="text-gray-900" />
          </button>
        </div>
        <div className="relative ml-20">
          <button className="flex items-center justify-between w-48 px-4 py-2 font-bold">
            <span>Status Category</span>
            <ChevronDown size={16} />
          </button>
          <div className="absolute w-48 bg-white border rounded-md mt-1 hidden">
          </div>
        </div>
        <div className="relative">
          <button className="flex items-center justify-between w-39 px-4 py-2 font-bold">
            <span>Epic</span>
            <ChevronDown size={16} />
          </button>
          <div className="absolute w-48 bg-white border rounded-md mt-1 hidden">
          </div>
        </div>
        <div className="w-60"></div> 
        <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded-md font-bold">
          <Settings2 size={16} />
          <span>View Settings</span>
        </button>
      </div>
    </div>
  );
};

export default TimelineHeader;

































