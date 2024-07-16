import React from 'react';

/* 
  Author: Fidha Naushad on May 23, 2024
  Purpose: Component to display issue status card with count and description
  Props: 
    - count: number (The count of issues)
    - description: string (Description of the issue status)
*/

interface Props {
  count: number;
  description: string;
}

export const IssueStatusCard: React.FC<Props> = ({ count, description }) => {
  return (
    <div className="w-full flex flex-col gap-2 hover:bg-slate-50 rounded-tl-xl lg:rounded-l-xl">
      <a href="#" className="py-4 duration-300 rounded-[10px] w-full ">
        <div className="relative flex pl-10 sm:pl-20 md:pl-20 lg:pl-20 items-center">
          <div>
            <h5 className="font-semibold text-xl">{count}</h5>
            <p className="custom-text-color text-sm xl:text-base">
              {description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};


