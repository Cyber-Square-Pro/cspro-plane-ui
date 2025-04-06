'use client'
import React, { useEffect } from 'react';
import { BaggageClaim } from 'lucide-react'; // Adjust Lucide icons as needed
import { observer } from 'mobx-react-lite';
import { API_BASE_URL } from "@/config/server.api.config";
import { useMobxStore } from '@/store/store.provider';
import DashboardHeader from '../../_components/headers/dashboard-header';
import { ProjectListCard } from '../../_components/cards/project-list-card';
import { Button } from '@/components/ui/button'; // Adjust path as necessary
import { CreateProjectModal } from '../../_components/modals/create-project-modal';
import { IProject } from '@/types/project';

const ProjectListPage = observer(() => {
  const { commandPalette: commandPaletteStore } = useMobxStore();

const  workspaceSlug  = localStorage.getItem('currentWorksSpaceSlug')?.trim() || "";
console.log("workspaceSluggggggggggggg", workspaceSlug);  
  const {
    project: { projects },
  } = useMobxStore();
  console.log("projectssssssssssssssss", projects);
const workspaceProjects = projects[workspaceSlug];
console.log("workspaceProjectsssssssssssssssssss", workspaceProjects);
  
  const handleAddProjectClick = () => {
    if (!commandPaletteStore.isCreateProjectModalOpen) {
      commandPaletteStore.toggleCreateProjectModal(); // Open modal if not already open
    } else {
      commandPaletteStore.toggleCreateProjectModal(); // Close modal if already open
    }
  };

  

  return (
    <>
      {/* Render CreateProjectModal if isCreateProjectModalOpen is true */}
      {commandPaletteStore.isCreateProjectModalOpen && (
        <CreateProjectModal openModal={commandPaletteStore.toggleCreateProjectModal} />
      )}

      <DashboardHeader
        icon={BaggageClaim}
        title="Projects"
        // Option list including the Add Project button
        optionList={[
          <Button key="addProjectBtn" className="h-[30px] text-[12px]" onClick={handleAddProjectClick}>
            Add Projects
          </Button>,
        ]}
      />

      <div className="flex flex-row gap-4">

      {workspaceProjects && workspaceProjects.length > 0 ? (
  workspaceProjects.map((project: IProject, index: number) => (
    <>
    <p>{`http://127.0.0.1:8000 ${project.cover_image.toString()}`}</p>
    <ProjectListCard
      key={project.created_date}
      backgroundImg={`http://127.0.0.1:8000${project.cover_image.toString()}`} // Adjust as per your data
      isStarred={false} // You can add logic to determine starred projects
      projectDesc={project.description}
      projectName={project.project_name}
      identifier={`PROJ-${project.created_date}`}
      status={project.status ? "Active" : "Inactive"}
      lastUpdated="Recently" // You can format created_date for last updated
      dueDate="TBD" // Adjust as per your data
    />
    </>
  ))
) : (
  <p className="w-full h-full text-red-600 text-center font-bold text-[20px]">No projects found.</p>
)}

 
      </div>
    </>
  );
});

export default ProjectListPage;
