import { ProjectTypeDropdown } from "@/app/workspaces/_components/dropdowns/project-type";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreateProjectValidator, TCreateProjectValidator } from "@/lib/validators/account/create-project.validator";
import { ICreateProjectForm } from "@/types/project";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { UsersRound } from "lucide-react";
import { ProjectLeadDropdown } from "@/app/workspaces/_components/dropdowns/project-lead";
import { NETWORK_CHOICES } from "@/constants/workspace";
import {
  Check,
  Earth, 
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
/* 
  Updated by: Archana K on July 16th, 2024 - Created Lead, Cancel, Create project buttons.
             
*/


interface ProjectCreateFormProps {
  onSubmit: (data: ICreateProjectForm) => void;
}


const ProjectCreateForm: React.FC<ProjectCreateFormProps> = (props) => {
  const projectLeads = [
    "John",
    "Alice",
    "Bob"
]

const {
  register,
  handleSubmit,
  setValue,
  formState: { errors }
} = useForm<TCreateProjectValidator>({
  resolver: zodResolver(CreateProjectValidator),  // Using Zod validation
  defaultValues: {
    project_name: "",
    identifier: "",
    description: "",
    network: 0,
   
  }
});
const { onSubmit } = props;
 

  const [projectType, setProjectType] = useState("Private");
  // const [projectLead, setProjectLead] = useState("Private");

  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [item, setItem] = useState("Private");

  
  const handleSelectItem = (selectedItem: string) => {
    const selectedChoice = NETWORK_CHOICES.find(choice => choice.label === selectedItem);
    if (selectedChoice) {
      console.log(selectedChoice.key,'QQQQQ')
     setValue("network", selectedChoice.key);
     setItem(selectedItem);

    }
    
  }
 
  // const handleProjectTypeChange = (selectedType: string) => {
  //   console.log(selectedType,'/*//')
  //   const selectedChoice = NETWORK_CHOICES.find(choice => choice.label === selectedType);
  //       if (selectedChoice) {
  //         console.log(selectedChoice.key,'QQQQQ')
         

  //       }
       
    
  //   console.log('selecetd', selectedType)
  // };

  const handleProjectNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setProjectName(name);
    const id = name.toUpperCase().replace(/[^A-Z]/g, "").substring(0, 5);
    console.log(id,'//////////')
    setProjectId(id);
    setValue("identifier", id);
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="flex rounded-md">
        <div className="flex flex-row w-full">
          <div className="px-1 py-2 w-[80%] pt-8" >
            <Input
              className="border rounded-md"
              placeholder="Project name"
              type="text"
              {...register("project_name")}
              onChange={handleProjectNameChange}
            />
             {errors?.project_name && (
          <p className="text-sm text-red-500 mt-3">{errors.project_name?.message}</p>
        )}
          </div>
          <div className="py-2 px-0 w-[22%] pt-8">
            <Input
              className="border rounded-md"
              placeholder="Project ID"
              type="text"
              value={projectId}
              {...register("identifier")}
              
              
            />
             {errors?.identifier && (
          <p className="text-sm text-red-500 mt-3">{errors.identifier?.message}</p>
        )}
          </div>
        </div>
      </div>
      <div className="flex pt-4">
        <Textarea placeholder="Description..." {...register("description")}/>
        {errors?.description && (
          <p className="text-sm text-red-500 mt-3">{errors.description?.message}</p>
        )}
      </div>

      <div className="flex items-center gap-2 mt-4">

      <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      {item === "Private" ? (
                        <Lock className="pe-1" size={18} />
                      ) : (
                        <Earth className="pe-1" size={18} />
                      )}
                      {item}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="bottom" align="start" className="w-62 p-0">
            {NETWORK_CHOICES.map((choice) => (
              <DropdownMenuRadioItem
                key={choice.key}
                className="flex items-center p-2 pl-4 hover:bg-gray-100"
                onSelect={() => handleSelectItem(choice.label)}
                value={choice.key.toString()}
              >
                <div className="flex gap-3 items-center w-full">
                  {choice.key === 0 ? <Lock size={14} /> : <Earth size={14} />}
                  <div className="flex-col flex">
                    <span className="ps-1 text-[13px] text-gray-900">{choice.label}</span>
                    <span className="text-[12px] text-gray-400">{choice.key === 0 ? "Accessible only by invite" : "Anyone in the workspace can join"}</span>
                  </div>
                  {item === choice.label && (
                    <div className="ml-auto">
                      <span className="text-gray-500">
                        <Check size={18} />
                      </span>
                    </div>
                  )}
                </div>
              </DropdownMenuRadioItem>
            ))}
            <DropdownMenuSeparator />
          </DropdownMenuContent>
                </DropdownMenu>


        {/* <ProjectTypeDropdown
          selectedType={projectType}
          onSelect={handleProjectTypeChange}
          register = {register("projectType")}
        /> */}
        {/* <button
          type="button"
          className="flex items-center gap-2 bg-white-200 text-gray-1000 border rounded-md px-4 py-2 hover:bg-gray-100 text-sm"
        >
           <ProjectLeadDropdown
          selectedType={projectLeads}
          onChange={setProjectLead}
          {...register("projectLead")}
        />
        </button> */}
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
    </>
  );
};

export default ProjectCreateForm;
