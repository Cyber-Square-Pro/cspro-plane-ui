import { ProjectTypeDropdown } from "@/app/workspaces/_components/dropdowns/project-type";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreateProjectValidator, TCreateProjectValidator } from "@/lib/validators/account/create-project.validator";
import { ICreateProjectForm } from "@/types/project";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { UsersRound } from "lucide-react";

/* 
  Updated by: Archana K on July 16th, 2024 - Created Lead, Cancel, Create project buttons.
             
*/


interface Props {
  onFormSubmit?: (formData: ICreateProjectForm) => void;
}

const ProjectCreateForm: React.FC<Props> = (props) => {
  const [projectType, setProjectType] = useState("Private");
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");

  const { onFormSubmit } = props;

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<TCreateProjectValidator>({
    resolver: zodResolver(CreateProjectValidator),
  });

  const handleProjectTypeChange = (selectedType: string) => {
    setProjectType(selectedType);
  };

  const handleProjectNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setProjectName(name);
    const id = name.toUpperCase().replace(/[^A-Z]/g, "").substring(0, 5);
    setProjectId(id);
  };

  return (
    <form className="flex flex-col h-full">
      <div className="flex rounded-md">
        <div className="flex flex-row w-full">
          <div className="px-1 py-2 w-[80%] pt-8" >
            <Input
              className="border rounded-md"
              placeholder="Project name"
              type="text"
              value={projectName}
              onChange={handleProjectNameChange}
            />
          </div>
          <div className="py-2 px-0 w-[22%] pt-8">
            <Input
              className="border rounded-md"
              placeholder="Project ID"
              type="text"
              value={projectId}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="flex pt-4">
        <Textarea placeholder="Description..." />
      </div>

      <div className="flex items-center gap-2 mt-4">
        <ProjectTypeDropdown
          selectedType={projectType}
          onChange={handleProjectTypeChange}
        />
        <button
          type="button"
          className="flex items-center gap-2 bg-white-200 text-gray-1000 border rounded-md px-4 py-2 hover:bg-gray-100 text-sm"
        >
          <UsersRound size={16} /> {/* Adjust the size of the icon */}
          Lead
        </button>
      </div>
      <div className="flex items-center justify-end mt-auto gap-6 pt-4">
        <button
          type="button"
          className="bg-white-200 text-gray-700 border rounded-md px-4 py-2 hover:bg-gray-100 text-sm"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 text-sm"
        >
          Create project
        </button>
      </div>
    </form>
  );
};

export default ProjectCreateForm;
