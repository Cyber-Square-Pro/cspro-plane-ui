"use client";

import React from "react";
import { Search } from "lucide-react";
import Link from "next/link";

/*
  Author: Fahadiya Binsy on 6th June, 2024
  Purpose: This component displays a section for active members, providing an interface to view and search for collaborators.
  Props:
    - title: string - The title of the active members section. 
  
*/

interface Props {
  title: string;
}
export const ActiveMembers: React.FC<Props> = ((props) => {
    const { title } = props;
  return (
    <div className="bg-[#ffffff] rounded-xl border-[0.5px] w-full hover:shadow-md duration-300 mb-6 ">
      <div className="flex items-start justify-between px-7 pt-6 ">
        <div>
          <h4 className="text-lg font-semibold ">{title}</h4>
          <p className="mt-2 text-xs font-medium ">
            View and find all members you collaborate with across projects
          </p>
        </div>
        <div className="flex min-w-72 items-center justify-start gap-2 rounded-md border px-2.5 py-1.5 placeholder:text-custom-text-400">
          <Search className="h-3.5 w-3.5 text-slate-400" />
          <input
            className="w-full border-none bg-transparent text-sm focus:outline-none"
            placeholder="Search for collaborators"
          />
        </div>
      </div>

      <div className="h-full flex place-items-left">
        <div className="mt-7 mb-6 flex justify-center gap-2 gap-y-8">
          <Link className="group text-center" href="/profile">
            <div className="flex justify-center">
              <div className="flex h-[100px] place-items-center overflow-hidden p-10 mb-[-15px]">
                <div className="relative flex place-items-center overflow-hidden justify-center rounded-[50%] bg-blue-900 h-10 w-10 text-white p-[40px] text-[30px] font-semibold">
                  Y
                </div>
              </div>
            </div>
            <h6 className="mt-6 text-xs font-semibold group-hover:underline truncate">
              You
            </h6>
            <p className="text-sm mt-2">0 active issue</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
)