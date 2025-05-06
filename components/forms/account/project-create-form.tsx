import { ProjectTypeDropdown } from "@/app/workspaces/_components/dropdowns/project-type";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreateProjectValidator, TCreateProjectValidator } from "@/lib/validators/project/create-project.validator";
import { ICreateProject } from "@/types/project";
// import { ICreateProjectForm } from "@/types/project";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";


interface Props {
    onFormSubmit?: (formData: ICreateProject) => void;
}

const ProjectCreateForm: React.FC<Props> = (props) => {
  const [projectType, setProjectType] = useState("Private");

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

  return (
    <form >
      <div className="flex">
        <div className="flex flex-row  w-full">
          <div className="px-1 py-2  w-[78%]">
            <Input
              className="border rounded-md"
              placeholder="Project name"
              type="password"
            />
          </div>
          <div className="py-2 px-1 w-[22%]">
            <Input
              className="border rounded-md"
              placeholder="Project ID"
              type="password"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <Textarea placeholder="Description..." />
      </div>

      <div>
        <ProjectTypeDropdown
          selectedType={projectType}
          onChange={handleProjectTypeChange}
        />
      </div>
    </form>
  );
};

export default ProjectCreateForm;
