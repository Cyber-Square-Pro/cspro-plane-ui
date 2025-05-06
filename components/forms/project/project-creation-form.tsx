import React from "react";
import {
  X,
  Users,
  Earth,
  Lock,
  Info,
  Check,
  ImagePlus,
  Upload,
  Globe,
} from "lucide-react";
import {
  TCreateProjectValidator,
  CreateProjectValidator,
} from "@/lib/validators/project/create-project.validator";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import { ICreateProject } from "@/types/project";


 
  

const ProjectCreationForm = () => {
 
  const [visibility, setVisibility] = useState("Public");
  const [projectName, setProjectName] = useState("");

  const [description, setDescription] = useState("");
  const [selectedLead, setSelectedLead] = useState<string | null>(null);
  const [leadSearchQuery, setLeadSearchQuery] = useState("");


  
 
  const handleFormSubmit = async (data: ICreateProject) => {

   
  }

  return (
    <>
      
    </>
  );
};

export default ProjectCreationForm;
