import React, { FC, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, LucideIcon } from "lucide-react";

/*
    Author: Muhammed Adnan on May 31st, 2024
    Purpose: Renders a header for project items.
    Props:
     - icon: LucideIcon - The icon to display in the header.
     - title: string - The title text for the project item.
     - btntext: string - The name text for the button.
     - children: ReactNode (optional) - Additional elements to render alongside the button.
*/

interface Props {
  icon: LucideIcon;
  title: string;
  btnText: string;
  children?: ReactNode; 
};

export const ProjectSubHeader: FC<Props> = (props) => {
  const { icon: HeaderIcon, title, btnText, children } = props;
  return (
    <div className="relative z-[15] flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 border-b p-4 ">
      <div className="flex items-center gap-2 overflow-ellipsis whitespace-nowrap">
        <div className=" flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-2">
                <span className="text-[13px]">Project 1</span>
                <ChevronRight size={15} className="text-slate-400"/>
            </div>
          <div className="flex cursor-default items-center gap-2 text-sm font-medium ">
            <div className="items-center justify-center overflow-hidden">
              <HeaderIcon size={14} className="text-slate-700"/>
            </div>
            <div className="relative line-clamp-1 block max-w-[150px] overflow-hidden truncate text-slate-700">
              <span className="text-[13px]">{title}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {children} 
        <Button className="h-[28px] text-[12px] p-3 rounded-sm bg-blue-500 border">
          {btnText}
        </Button>
      </div>
    </div>
  );
};
