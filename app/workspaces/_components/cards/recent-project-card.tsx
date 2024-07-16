"use client"
import React from 'react';
import { Pin } from 'lucide-react';
import Link from 'next/link';

/*
  Author: Fahadiya Binsy on 6th June, 2024
  Purpose: This component displays a list of recent projects with options to create new ones.
  Props: None
*/


 export const RecentProjects = () => {
  return (
    <div className="h-full bg-[#ffffff] rounded-xl border-[0.5px]  w-full hover:shadow-md duration-300 flex flex-col min-h-96">  
    <div className="h-full flex flex-col" id="headlessui-tabs-panel-:ru:" >
      <div className="h-full flex items-center justify-between gap-2 p-6 pl-7">
      <div className="h-full flex flex-col gap-8">
                
         <div className="flex flex-col text-sm font-medium text-custom-text-300 whitespace-pre-line">
         <Link  href = "/workspaces/projects">
            <h5 className="font-semibold text-xl pr-2 hover:underline">
              Recent Projects
            </h5>
        </Link>
       
      <br />
      <div className="flex items-center text-sm font-medium text-custom-text-300 whitespace-pre-line">
      <button className="flex items-center justify-center bg-sky-300 border-dotted border-2 border-blue-500 w-8 h-8 mr-2">
            <span className="text-xl text-blue-500">+</span>
            </button>
          {/* Horizontal Text next to the "+" button */}
          <span className="justify-center text-sm font-medium text-custom-text-300">
            Create New Project
          
          </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Container for the Pin icon */}
          <div className="flex items-center justify-center rounded w-10 h-10 bg-yellow-300 border-2">
            {/* Rotated Pin icon */}
            <Pin color='red' fill='red' style={{ transform: 'rotate(45deg)' }} />
          </div>
          <button className="flex items-center bg-white p-3 rounded-md">
            <span className="text-sm font-medium">4project</span>
          </button>
        </div>
     </div>
    </div>
    </div>
    </div>

  )
}

