"use client";
import React, { useState } from 'react';
import { useMobxStore } from "@/store/store.provider";
import { observer } from "mobx-react-lite";
import { ChevronDown, ChevronRight, Plus, MoreHorizontal, Folder } from 'lucide-react';
import { projectItems } from '@/constants/workspace';
import { useEffect } from "react";
import { useParams } from 'next/navigation';

/*
  Author: Muhammed Adnan on May 21st, 2024
  Purpose: Renders a list of user projects with dropdown options for each project.
  Props: None
  Updated by: - Muhammed Adnan on May 24th, 2024 - Adjusted Padding and radius as needed
 */ 

const ProjectList = observer(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const {  project:{projects,fetchProjects}, workspace:{} } =  useMobxStore();
console.log('projects', projects)

  const params = useParams();

  // Access the workspaceSlug
  const workspaceSlug = params.workspaceSlug as string;

useEffect(() => {
  if (workspaceSlug) {
    fetchProjects(workspaceSlug);
  }
}, [workspaceSlug]);

  const selectProject = (project: string) => {
    setSelectedProject(selectedProject === project ? null : project);
  };

  const projectslist = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
    "Project 6",
    "Project 7"
  ];

  console.log('projectslist', projects)

  return (
    <div className="relative">
      <button 
        className="group flex items-center w-full px-3 py-1 text-sm font-medium text-left text-gray-900 hover:bg-gray-100 hover:rounded-md"
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
        <div className="absolute z-10 overflow-y-auto max-h-[400px] w-full mt-1 origin-top-right scrollbar-md">
          {projects[workspaceSlug] && Array.isArray(projects[workspaceSlug]) ? (
  projects[workspaceSlug].map((project, index) => (
    <div key={index}>
      <button 
        className="group flex items-center w-full px-6 py-2 mb-1 text-[13px] rounded-md hover:bg-gray-100 relative"
      >
        <Folder className="w-4 h-4 mr-2 text-slate-500" />
        <span>{project.name}</span>
      </button>
    </div>
  ))
) : (
  <div className="px-6 py-2 text-sm text-gray-500">
    {projects[workspaceSlug] ? "No projects found." : "Loading..."}
  </div>
)}

        </div>
      )}
    </div>
  );
});

export default ProjectList;
