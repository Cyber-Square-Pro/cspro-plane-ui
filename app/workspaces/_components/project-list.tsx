"use client";
import React, { useState } from 'react';
import { useMobxStore } from "@/store/store.provider";
import { observer } from "mobx-react-lite";
import { ChevronDown, ChevronRight, Plus, MoreHorizontal, Folder } from 'lucide-react';
import { projectItems } from '@/constants/workspace';
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

  // Directly access workspaceProjects from MobX store
  const { project: { workspaceProjects } } = useMobxStore();

  const params = useParams();

  // Access the workspaceSlug
  const workspaceSlug = params.workspaceSlug as string;

// useEffect(() => {
//   if (workspaceSlug) {
//     fetchProjects(workspaceSlug);
//   }
// }, [workspaceSlug]);

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

  // console.log('projectslist', projects)

  return (

    // <div>
    //   {workspaceProjects && workspaceProjects.length > 0 ? (
    //     workspaceProjects.map((project) => (
    //       <div key="" className="flex items-center space-x-3">
    //         {/* Folder icon */}
    //         <Folder size={24} className="text-gray-500" />
    //         <h3 className="text-lg font-semibold">{project.project_name}</h3>
    //       </div>
    //     ))
    //   ) : (
    //     <p>No projects found</p>
    //   )}
    // </div>


  <div className="relative">
      {/* Dropdown button */}
      <button 
        className="group flex items-center w-full px-3 py-1 text-sm font-medium text-left text-gray-900 hover:bg-gray-100 hover:rounded-md"
        onClick={toggleDropdown}
      >
        {/* 'Your Projects' Text */}
        <span className='font-bold text-slate-500 text-[13px]'>Your Projects</span>

        {/* Chevron icons */}
        {isOpen ? (
          <ChevronDown size={15} className='text-slate-400' />
        ) : (
          <ChevronRight size={15} className='text-slate-400' />
        )}

        {/* Plus icon (visible when hovering over the button) */}
        <div className="relative ml-auto">
          <Plus size={12} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute z-10 overflow-y-auto max-h-[400px] w-full mt-1 origin-top-right scrollbar-md">
          {/* If workspaceProjects is available and an array */}
          {workspaceProjects && workspaceProjects.length > 0 ? (
            workspaceProjects.map((project, index) => (
              <div key={project.id}>
                <button 
                  className="group flex items-center w-full px-6 py-2 mb-1 text-[13px] rounded-md hover:bg-gray-100 relative"
                >
                  {/* Folder icon */}
                  <Folder className="w-4 h-4 mr-2 text-slate-500" />
                  {/* Project name */}
                  <span>{project.project_name}</span>
                </button>
              </div>
            ))
          ) : (
            <div className="px-6 py-2 text-sm text-gray-500">
              {workspaceProjects.length === 0 ? "No projects found." : "Loading..."}
            </div>
          )}
        </div>
      )}
    </div>
 
  )
});

export default ProjectList;
