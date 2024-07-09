"use client";
import React from "react";
import DashboardHeader from "../../_components/headers/dashboard-header";
import { BaggageClaim, Link, Pencil, Search, Star } from "lucide-react";
import { ProjectListCard } from "../../_components/cards/project-list-card";
import { Button } from "@/components/ui/button";
import { useMobxStore } from "@/store/store.provider";
import { CreateProjectModal } from "../../_components/modals/create-project-modal";
import { observer } from "mobx-react-lite";

const ProjectListPage = observer(() => {
  const { commandPalette: commandPaletteStore } = useMobxStore();
  const projectHeaderOptions = [
    <Button key="addProjectBtn" className="h-[30px] text-[12px]" onClick={() => commandPaletteStore.toggleCreateProjectModal(true)}>
      Add Project
    </Button>,
  ];

  
  return (
    <>
    { commandPaletteStore.isCreateProjectModalOpen && (
        <CreateProjectModal/>
    )}
      <DashboardHeader
        icon={BaggageClaim}
        title="projects"
        optionList={projectHeaderOptions}
      />

      <div className="flex flex-row">
        <ProjectListCard
          isStarred={true}
          projectDesc="test project"
          projectName="Rifad Test"
          identifier="TEST"
        />

        <ProjectListCard
          backgroundImg="https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg"
          isStarred={false}
          projectDesc="test project 2"
          projectName="Rifad Test"
          identifier="TESwT"
        />
      </div>
    </>
  );
});

export default ProjectListPage;
