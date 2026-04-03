import React from 'react';
import { LucideIcon } from "lucide-react";

interface Props {
  count: number;
  description: string;
  icon: LucideIcon; // dynamically add an appropriate icon
  color?: string; // dynamically set icon color (optional)
  hoverBg?: string; // card hover background color (optional)
}

export const IssueStatusCard: React.FC<Props> = ({ count, description, icon: Icon, color = "text-gray-500", hoverBg = "hover:bg-gray-50" }) => {
  return (
    /* Apply hover background color */
    <div className={`w-full flex flex-col gap-2 ${hoverBg} rounded-tl-xl lg:rounded-l-xl`}>
      <a href="#" className="py-4 duration-300 rounded-[10px] w-full ">
        <div className="relative flex pl-10 items-center gap-2">
          {/* Icon */}
          {Icon && (
            <div className={`p-2 rounded-lg bg-gray-100 ${color}`}>
              <Icon size={20} />
            </div>
          )}

          {/* Text Description */}
          <div>
            {/* Apply color to count */}
            <h5 className={`font-semibold text-xl ${color}`}>{count}</h5>
            <p className="custom-text-color text-sm xl:text-base">
              {description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};


