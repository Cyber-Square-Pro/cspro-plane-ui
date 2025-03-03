import React from "react";
import { Link, LucideIcon, Settings, Star,Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

/*
  Author: Khadeeja Hiba on April 20th, 2024
  Purpose: Renders Project list for the user
  Props: 
    emoji - emoji to display
    projectName - name of the project
    backgroundImg - bg image to display 
    projectDesc - descrption of the project 
    identifier - unique identifier, 
    isStarred - boolean value to check if the project is starred or not
    Updated by: Mohammed Rifad on May 25th, 2024 - Added props
                fathima swabri on jan 27, 2025
*/

interface Props {
  emoji?: LucideIcon;
  projectName: string;
  backgroundImg?: string;
  projectDesc: string;
  identifier: string;
  isStarred: boolean;
  status: string;
  lastUpdated: string;
  dueDate: string;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-200 text-green-600";
    case "On Hold":
      return "bg-gray-200 text-gray-600";
    case "In Progress":
      return "bg-blue-200 text-blue-600";
    case "Completed":
      return "bg-yellow-200 text-yellow-600";
    case "Pending Review":
      return "bg-red-200 text-red-600";
    default:
      return "bg-gray-200 text-gray-600";
  }
};

export const ProjectListCard: React.FC<Props> = ({
  projectName,
  backgroundImg,
  projectDesc,
  identifier,
  isStarred,
  status,
  lastUpdated,
  dueDate,
}) => {
  return (
    <div className="w-full max-w-xs bg-white border rounded-lg shadow-md overflow-hidden">
      {/* Background Image */}
      <div
        className="h-36 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />

      {/* Project Info */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xl font-semibold">{projectName}</p>
            <p className="text-sm text-gray-500">{identifier}</p>
          </div>
          {/* Star Button */}
          <button className="text-yellow-400">
            <Star className={cn("w-5", { "fill-yellow-400": isStarred })} />
          </button>
        </div>

        {/* Project Description */}
        <p className="text-sm text-gray-700 mt-2">{projectDesc}</p>

        {/* Status & Last Updated */}
        <div className="flex justify-between items-center mt-3">
          <span className={`text-xs px-2 py-1 rounded-md ${getStatusColor(status)}`}>
            {status}
          </span>
          <span className="text-xs text-gray-500">{lastUpdated}</span>
        </div>

        {/* Due Date */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="w-4 h-4 mr-1" /> {dueDate}
          </div>
          <Settings className="w-5 text-gray-600" />
        </div>
      </div>
    </div>
  );
};


