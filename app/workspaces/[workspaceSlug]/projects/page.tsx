"use client";
import React, { useState } from "react";
import DashboardHeader from "../../_components/headers/dashboard-header";
import { BaggageClaim, Link, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobxStore } from "@/store/store.provider";
import { CreateProjectModal } from "../../_components/modals/create-project-modal";
import { observer } from "mobx-react-lite";
import { ICreateProject } from "@/types/project";

const ProjectCard: React.FC<Project> = ({
  title,
  status,
  description,
  updated,
  backgroundUrl,
}) => {
  return (
    <div className="relative border rounded-lg bg-white shadow-md hover:shadow-xl transition-all overflow-hidden">
      <div
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        <div className="absolute top-2 left-2 bg-white rounded-full p-1 shadow">
          <Star size={16} className="text-yellow-400 cursor-pointer" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-black-900">{title}</h3>
        <p className="text-sm text-black-600 mb-3">{description}</p>
        <span className="text-sm text-black-500">{updated}</span>
      </div>
      <div className="flex space-x-2 absolute top-2 right-2">
        <Link size={16} className="cursor-pointer text-white" />
      </div>
    </div>
  );
};

const ProjectListPage = observer(() => {
  const { commandPalette: commandPaletteStore } = useMobxStore();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projectData.length / projectsPerPage);

  const paginatedProjects = projectData.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      {commandPaletteStore.isCreateProjectModalOpen && (
        <CreateProjectModal
    
        />
      )}
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

          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {paginatedProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <i className="fas fa-arrow-left"></i>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <div className="flex items-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  <i className="fas fa-arrow-left"></i> Previous
                </button>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Next <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

interface Project {
  title: string;
  status: string;
  description: string;
  updated: string;
  backgroundUrl: string;
}

const projectData: Project[] = [
  {
    title: "Project 1",
    status: "Active",
    description: "Description...",
    updated: "Updated 2 days ago",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2019/10/11/09/23/lake-4541454_1280.jpg",
  },
  {
    title: "Project 2",
    status: "In Progress",
    description: "Description...",
    updated: "Updated 5 days ago",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2019/10/11/09/23/lake-4541454_1280.jpg",
  },
  {
    title: "Project 3",
    status: "Planning",
    description: "Description...",
    updated: "Updated 1 week ago",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2019/10/11/09/23/lake-4541454_1280.jpg",
  },
  {
    title: "Project 4",
    status: "Completed",
    description: "Description...",
    updated: "Updated 3 weeks ago",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2019/10/11/09/23/lake-4541454_1280.jpg",
  },
  {
    title: "Project 5",
    status: "Ongoing",
    description: "Description...",
    updated: "Updated 2 days ago",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2019/10/11/09/23/lake-4541454_1280.jpg",
  },
  {
    title: "Project 6",
    status: "Research Phase",
    description: "Description...",
    updated: "Updated 4 days ago",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2019/10/11/09/23/lake-4541454_1280.jpg",
  },
  {
    title: "Project 7",
    status: "Active",
    description: "Description...",
    updated: "Updated 2 days ago",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2019/10/11/09/23/lake-4541454_1280.jpg",
  },
  {
    title: "Project 8",
    status: "In Progress",
    description: "Description...",
    updated: "Updated 5 days ago",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2019/10/11/09/23/lake-4541454_1280.jpg",
  },
  {
    title: "Project 9",
    status: "Planning",
    description: "Description...",
    updated: "Updated 1 week ago",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2019/10/11/09/23/lake-4541454_1280.jpg",
  },
  {
    title: "Project 10",
    status: "Completed",
    description: "Description...",
    updated: "Updated 3 weeks ago",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2019/10/11/09/23/lake-4541454_1280.jpg",
  },
  {
    title: "Project 11",
    status: "Ongoing",
    description: "Description...",
    updated: "Updated 2 days ago",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2019/10/11/09/23/lake-4541454_1280.jpg",
  },
  {
    title: "Project 12",
    status: "Research Phase",
    description: "Description...",
    updated: "Updated 4 days ago",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2019/10/11/09/23/lake-4541454_1280.jpg",
  },
];

export default ProjectListPage;
