"use client";
import React, { FC, useState } from "react";
import { ChevronDown, ChevronRight, Plus, MoreHorizontal } from "lucide-react";
import { projectItems } from "@/constants/workspace";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { ProjectStore } from "../../../store/project.store";
import { useMobxStore } from "@/store/store.provider";
import { IProject } from "@/types/project";
/*
  Author: Muhammed Adnan on May 21st, 2024
  Purpose: Renders a list of user projects with dropdown options for each project.
  Props: workspaceSlug (string)
  Updated by: - Muhammed Adnan on May 24th, 2024 - Adjusted Padding and radius as needed
              - Navya Johnson on Jan 20th, 2025 - Fixed JSX mismatch error..
*/

interface Props {
  workspaceSlug: string;
}

const ProjectList: FC<Props> = (props) => {
  const { workspaceSlug } = props;
  const {
    project: { projects },
  } = useMobxStore();
  const workspaceProjects = projects[workspaceSlug];
  // const isArrayOfProjects = Array.isArray(workspaceProjects);
  // const validProjects = isArrayOfProjects ? workspaceProjects : [];

  console.log("valid projects", workspaceProjects);
  console.log(workspaceProjects, "********************");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  console.log("projects in list");
  const toggleDropdown = () => {
    console.log("is open  ");
    setIsOpen(!isOpen);
  };

  // ySlug, fetchProjects]);

  // console.log(workspa)

  const selectProject = (project: string) => {
    setSelectedProject(selectedProject === project ? null : project);
  };

  const projects1 = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
    "Project 6",
    "Project 7",
  ];

  return (
    <div className="relative">
      <button
        className="group flex items-center w-full px-3 py-1 text-sm font-medium text-left text-gray-900 hover:bg-gray-200 rounded-md"
        onClick={toggleDropdown}
      >
        <span className="font-bold text-slate-500 text-[13px]">
          Your Projects
        </span>
        {isOpen ? (
          <ChevronDown size={15} className="text-slate-400" />
        ) : (
          <ChevronRight size={15} className="text-slate-400" />
        )}
        <div className="relative ml-auto">
          <Plus
            size={12}
            className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 overflow-y-auto max-h-[45vh] w-full mt-1">
          {workspaceProjects.map((project: IProject, index: number) => (
            <div key={index}>
              <button
                onClick={() => selectProject(project.project_name)}
                className="group flex items-center w-full px-6 py-2 mb-1 text-[13px] rounded-md hover:bg-gray-100 relative"
              >
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-custom bg-opacity-10 text-custom"
                >
                  {" "}
                  <i className="fas fa-folder-open mr-3 text-custom"></i>
                 {project.project_name}
                   
                </a>
                <div className="ml-auto flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {selectedProject === project.project_name ? (
                    <ChevronDown
                      size={15}
                      className="text-slate-400 transition-transform duration-200 transform rotate-180"
                    />
                  ) : (
                    <ChevronDown
                      size={15}
                      className="text-slate-400 transition-transform duration-200"
                    />
                  )}
                  <MoreHorizontal size={15} className="ml-2 text-slate-400" />
                </div>
              </button>

               
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Project Sidebar</title>
//     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
//     <link href="https://ai-public.creatie.ai/gen_page/tailwind-custom.css" rel="stylesheet">    <script src="https://cdn.tailwindcss.com/3.4.5?plugins=forms@0.5.7,typography@0.5.13,aspect-ratio@0.4.2,container-queries@0.1.1"></script>
//     <script src="https://ai-public.creatie.ai/gen_page/tailwind-config.min.js" data-color="#000000" data-border-radius="small"></script>
// </head>
// <body class="bg-gray-50 font-sans">
//     <div class="flex min-h-screen">
//         <aside class="w-64 bg-white border-r border-gray-200 flex flex-col">            <div class="p-4 border-b border-gray-200">
//                 <div class="flex items-center justify-between">
//                     <div class="flex items-center space-x-3">                        <div class="w-8 h-8 rounded-lg bg-custom flex items-center justify-center">
//                             <span class="text-white font-medium">W</span>
//                         </div>
//                         <h1 class="font-semibold text-gray-900">Workspace Name</h1>
//                     </div>                    <button class="text-gray-400 hover:text-gray-600 !rounded-button">
//                         <i class="fas fa-chevron-left"></i>
//                     </button>
//                 </div>
//             </div>

//             <div class="flex-1 overflow-y-auto py-4">                <nav class="space-y-1 px-3">
//                     <a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-custom bg-opacity-10 text-custom">                        <i class="fas fa-folder-open mr-3 text-custom"></i>
//                         Marketing Website
//                     </a>                    <a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">                        <i class="fas fa-folder mr-3 text-gray-400"></i>
//                         Mobile App Design
//                     </a>                    <a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">                        <i class="fas fa-folder mr-3 text-gray-400"></i>
//                         Dashboard UI
//                     </a>                    <a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">                        <i class="fas fa-folder mr-3 text-gray-400"></i>
//                         E-commerce Platform
//                     </a>                    <a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">                        <i class="fas fa-folder mr-3 text-gray-400"></i>
//                         Brand Guidelines
//                     </a>                    <a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">                        <i class="fas fa-folder mr-3 text-gray-400"></i>
//                         Social Media Assets
//                     </a>                </nav>
//             </div>

//             <div class="p-4 border-t border-gray-200">
//                 <div class="flex items-center justify-between">                    <div>
//                         <p class="text-sm font-medium text-gray-900">Workspace Info</p>
//                         <p class="text-xs text-gray-500">6 Projects</p>
//                     </div>
//                     <button class="p-2 text-gray-400 hover:text-gray-600 !rounded-button">                        <i class="fas fa-cog"></i>
//                     </button>
//                 </div>
//             </div>
//         </aside>        <main class="flex-1 p-8">
//             <div class="max-w-7xl mx-auto">
//                 <h2 class="text-2xl font-semibold text-gray-900">Welcome to your workspace</h2>
//                 <p class="mt-2 text-gray-600">Select a project from the sidebar to get started</p>            </div>
//         </main>
//     </div>
// </body>
// </html>
