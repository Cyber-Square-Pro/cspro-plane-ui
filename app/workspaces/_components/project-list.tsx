"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Plus, MoreHorizontal } from 'lucide-react';
import { projectItems } from '@/constants/workspace';

/*
  Author: Muhammed Adnan on May 21st, 2024
  Purpose: Renders a list of user projects with dropdown options for each project.
  Props: None
  Updated by: - Muhammed Adnan on May 24th, 2024 - Adjusted Padding and radius as needed
 */ 

const ProjectList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectProject = (project: string) => {
    setSelectedProject(selectedProject === project ? null : project);
  };

  const projects = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
    "Project 6",
    "Project 7"
  ];

  return (
    <div className="relative">
      <button 
        className="group flex items-center w-full px-3 py-1 text-sm font-medium text-left text-gray-900 hover:bg-gray-200 rounded-md"
        onClick={toggleDropdown}
      >
        <span className='font-bold text-slate-500 text-[13px]'>Your Projects</span>
        {isOpen ? (
          <ChevronDown size={15} className='text-slate-400'/>
        ) : (
          <ChevronRight size={15} className='text-slate-400'/>
        )}
        <div className="relative ml-auto">
          <Plus size={12} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-10 overflow-y-auto max-h-[45vh] w-full mt-1">
          {projects.map((project, index) => (
            <div key={index}>
              <button 
                onClick={() => selectProject(project)} 
                className="group flex items-center w-full px-6 py-2 mb-1 text-[13px] rounded-md hover:bg-gray-100 relative"
              >
                <span>{project}</span>
                <div className="ml-auto flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {selectedProject === project ? (
                    <ChevronDown size={15} className='text-slate-400 transition-transform duration-200 transform rotate-180'/>
                  ) : (
                    <ChevronDown size={15} className='text-slate-400 transition-transform duration-200'/>
                  )}
                  <MoreHorizontal size={15} className="ml-2 text-slate-400" />
                </div>
              </button>
              {selectedProject === project && (
                <div className="pl-8">
                  {projectItems.map((item, index) => (
                    <button key={index} className="flex items-center w-full px-4 py-1 mb-1 text-[13px] text-gray-700 hover:bg-gray-100">
                      <item.icon size={14}/>
                      <span className="ml-2">{item.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;
