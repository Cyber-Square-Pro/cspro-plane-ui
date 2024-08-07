'use client'
import React from 'react';
import { BaggageClaim } from 'lucide-react'; // Adjust Lucide icons as needed
import { observer } from 'mobx-react-lite';
import { useMobxStore } from '@/store/store.provider';
import DashboardHeader from '../../_components/headers/dashboard-header';
import { ProjectListCard } from '../../_components/cards/project-list-card';
import { Button } from '@/components/ui/button'; // Adjust path as necessary
import { CreateProjectModal } from '../../_components/modals/create-project-modal';

const ProjectListPage = observer(() => {
  const { commandPalette: commandPaletteStore } = useMobxStore();


  // Function to handle opening and closing of the modal
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
            Add Project
          </Button>,
        ]}
      />

      <div className="flex flex-row">
        <ProjectListCard
          isStarred={true}
          projectDesc="Test project"
          projectName="Rifad Test"
          identifier="TEST"
        />

        <ProjectListCard
          backgroundImg="https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg"
          isStarred={false}
          projectDesc="Test project 2"
          projectName="Rifad Test"
          identifier="TESwT"
        />
      </div>
    </>
  );
});

export default ProjectListPage;
