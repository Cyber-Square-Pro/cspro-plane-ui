"use client";
import React, { useState } from "react";
import DashboardHeader from "../../_components/headers/dashboard-header";
import { BaggageClaim, Link, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobxStore } from "@/store/store.provider";
import { CreateProjectModal } from "../../_components/modals/create-project-modal";
import { observer } from "mobx-react-lite";
import { ICreateProject } from "@/types/project";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import ProjectCard from "../../_components/cards/project-card";
import NoProject from "../../_components/no-project";

const ProjectListPage = observer(() => {
  
  const {
    project: { workspaceProjects },
  } = useMobxStore();
 

  const { commandPalette: commandPaletteStore } = useMobxStore();
 
  return (
    <>
      {commandPaletteStore.isCreateProjectModalOpen && <CreateProjectModal />}
      <DashboardHeader
        icon={BaggageClaim}
        title="Projects"
        optionList={[
          <Button
            key="addProjectBtn"
            className="h-[30px] text-[12px]"
            onClick={() => commandPaletteStore.toggleCreateProjectModal(true)}
          >
            Add Project
          </Button>,
        ]}
      />

      <div className="bg-gray-50 min-h-screen font-['Inter'] max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="🔍Search projects..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-custom focus:border-custom"
            />
            <select className="border border-gray-300 rounded-md py-2 px-4 bg-white focus:ring-2 focus:ring-custom focus:border-custom">
              <option>Sort by: Name</option>
              <option>Sort by: Date</option>
              <option>Sort by: Status</option>
            </select>
          </div>

          <div className="p-4">
            {workspaceProjects.length === 0 ? (
              <div className="text-gray-500 text-center text-sm">
             
             <NoProject />
              </div>
            ) : (
              <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {workspaceProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id || index}
                    projectName={project.project_name}
                    url={project.cover_image || ""}
                    id={project.id}
                    description={project.description}
                  />
                ))}
              </div>
            )}
          </div>

 
        </div>
      </div>
    </>
  );
});

 
 

export default ProjectListPage;
