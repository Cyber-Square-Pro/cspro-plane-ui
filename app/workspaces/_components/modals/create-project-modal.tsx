import { useMobxStore } from "@/store/store.provider";
import { X, Users, Earth, Lock, Info, Check, ImagePlus, Upload, Globe } from "lucide-react";
import ProjectCreationForm from "@/components/forms/project/project-creation-form";
import { ICreateProject } from "@/types/project";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import { CreateProjectValidator, TCreateProjectValidator } from "@/lib/validators/project/create-project.validator";
import { ProjectService } from "@/services/project.service";
 
export const CreateProjectModal = () => {
  const {
    project: { createProject },
  } = useMobxStore();


  const {
    register,
    handleSubmit,

    formState: { isValid, errors },
  } = useForm<TCreateProjectValidator>({
    resolver: zodResolver(CreateProjectValidator),
  });


  const dialogRef = useRef<HTMLDialogElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [projectIdentifier, setProjectIdentifier] = useState("");
  const [projectId, setProjectId] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [visibility, setVisibility] = useState("Public");
  const [description, setDescription] = useState("");
  // const [errors, setErrors] = useState<{ projectName?: string; projectId?: string }>({});
  const [isLeadDropdownOpen, setIsLeadDropdownOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<string | null>(null);
  const [leadSearchQuery, setLeadSearchQuery] = useState("");
  const [workspaceMembers, setWorkspaceMembers] = useState<any[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // New state for background image and cover dropdown
  const [backgroundImage, setBackgroundImage] = useState(
    "url('https://images.unsplash.com/photo-1606768666853-403c90a981ad?auto=format&fit=crop&q=80&w=870')"
  );
  const [isCoverDropdownOpen, setIsCoverDropdownOpen] = useState(false);

  // Function to handle image selection from device
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      setImageFile(file);
      reader.onloadend = () => {
        setBackgroundImage(`url('${reader.result as string}')`);
        setIsCoverDropdownOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle online image selection
  const handleOnlineImageSelect = () => {
    // TODO: Implement online image selection logic
    alert("Online image selection not implemented yet");
    
    setIsCoverDropdownOpen(false);
  };

  // Trigger file input or toggle dropdown
  const triggerImageUpload = () => {
    setIsCoverDropdownOpen(!isCoverDropdownOpen);
  };

  const toggleLeadDropdown = () => {
    setIsLeadDropdownOpen(!isLeadDropdownOpen);
  };

  const handleLeadSelection = (memberId: string) => {
    setSelectedLead(memberId);
    setIsLeadDropdownOpen(false);
    setLeadSearchQuery("");
  };

  const filteredMembers = workspaceMembers.filter(member => 
    member.name.toLowerCase().includes(leadSearchQuery.toLowerCase())
  );

  const {
    project: { workspaceProjects,createProject: addNewProject},
    
  } = useMobxStore();

  const projectService = new ProjectService();
   

    const handleFormSubmit = async (data: ICreateProject) => {
      const formData = new FormData();
      if(imageFile){
        formData.append("cover_image", imageFile);
      }
    
    formData.append("name", data.name);
    formData.append("identifier", data.identifier);
    formData.append("first_name", data.name);
    formData.append("description", data.description);

    visibility === "Public"?formData.append("network","1"):formData.append("network", "2");
    
    console.log("Form submitted with data:", formData);

    // await addNewProject(formData).then((res) => {
      
    // });
      
    }
   
    

  return (
    <dialog
      ref={dialogRef}
      className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center"
    >
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xl h-[70vh] overflow-y-auto flex flex-col">
        {/* Header with Background Image */}
        <div
          className="relative w-full h-36 bg-cover bg-center rounded-t-xl"
          style={{
            backgroundImage: backgroundImage,
          }}
        >
          <div className="absolute top-1 right-5 flex flex-col items-center space-y-1">
            <button
              className="p-2 bg-white bg-opacity-55 rounded-full hover:bg-opacity-70 transition z-10"
              // onClick={handleClose}
            >
              <X size={16} className="text-gray-800" />
            </button>
          </div>
          <div className="absolute top-1 left-2 relative">
            <button
              className="px-3 py-1 bg-white bg-opacity-50 rounded-full hover:bg-opacity-70 transition z-10 text-xs text-gray-800"
              onClick={triggerImageUpload}
            >
              Change Cover
            </button>
            {isCoverDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-md z-20">
                <button
                  className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm hover:bg-gray-100"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="w-4 h-4" /> Choose from Device
                </button>
                <button
                  className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm hover:bg-gray-100"
                  onClick={handleOnlineImageSelect}
                >
                  <Globe className="w-4 h-4" /> Choose Online
                </button>
              </div>
            )}
          </div>
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        
        
       
       

        <form className="mt-4 space-y-2 flex-grow flex flex-col" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 flex-grow">
          <div className="md:col-span-3">
            <Input
              className="w-full border rounded-md"
              placeholder="Enter your password"
              type="text"
              {...register("name")}
              onChange={(e) => {
                const name = e.target.value;
                const identifier = name.replace(/\s+/g, '-').slice(0, 5).toUpperCase();
                setProjectIdentifier(identifier);
              }}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs mt-0.5">
              {errors.name?.message}
            </p>
          )}

          <div className="relative">
            <Input
              className="w-full border rounded-md"
              placeholder="Project ID"
              {...register("identifier")}
              value={projectIdentifier}
              readOnly
            />
            <Info className="absolute right-1.5 top-2 w-3 h-3 text-gray-400" />
             
          </div>
          <div className="md:col-span-4">
            <Textarea
              className="w-full px-2 py-1.5 border rounded-md text-xs focus:border-blue-400 h-32"
              placeholder="Description"
              {...register("description")}
            />
          </div>
        </div>
        <div className="relative flex items-center gap-2 mt-3">
          <div className="relative flex items-center gap-2 mt-3">
            <button
              type="button"
              className="flex items-center gap-1 px-3 py-2 border rounded-md text-xs"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Earth className="w-4 h-4" /> {visibility}
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-md z-10">
                <button
                  className="flex flex-col items-start px-4 py-2 w-full text-left text-sm hover:bg-gray-100"
                  onClick={() => {
                    setVisibility("Private");
                    setIsDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4" /> Private
                  </div>
                  <p className="text-gray-500 text-xs">
                    Accessible only by invite
                  </p>
                </button>
                <button
                  className="flex flex-col items-start px-4 py-2 w-full text-left text-sm hover:bg-gray-100"
                  onClick={() => {
                    setVisibility("Public");
                    setIsDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Earth className="w-4 h-4" /> Public{" "}
                    {visibility === "Public" && (
                      <Check className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                  <p className="text-gray-500 text-xs">
                    Anyone in the workspace except Guests can join
                  </p>
                </button>
              </div>
            )}
            <div className="relative">
              {/* <button 
                className="flex items-center gap-1.5 px-3 py-2 border rounded-md text-xs"
                onClick={toggleLeadDropdown}
              >
                <Users className="w-4 h-4" /> 
                {selectedLead 
                  ? workspaceMembers.find(m => m.id === selectedLead)?.name 
                  : "Lead"}
              </button> */}

              {/* {isLeadDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-md z-10">
                  <div className="p-2">
                    <input 
                      type="text"
                      placeholder="Search members"
                      value={leadSearchQuery}
                      onChange={(e) => setLeadSearchQuery(e.target.value)}
                      className="w-full px-2 py-1 border rounded text-xs"
                    />
                  </div>
                  <ul className="max-h-60 overflow-y-auto">
                    {filteredMembers.map((member) => (
                      <li 
                        key={member.id}
                        onClick={() => handleLeadSelection(member.id)}
                        className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                      >
                        {member.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-3 border-t mt-auto">
          <Button
            type="button"
            className="px-3 py-2 border bg-white text-black rounded text-xs"
            //   onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="px-3 py-2 bg-blue-600 text-white rounded text-xs"
          >
            Create project
          </Button>
        </div>
        {/* 
            <div className="md:col-span-3">
              <input
                type="text"
                value={}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Project name"
                className={`w-full px-2 py-1.5 border rounded-md text-xs focus:border-blue-400 ${errors.projectName ? 'border-red-500' : ''}`}
              />
              {errors.projectName && <p className="text-red-500 text-xs mt-0.5">{errors.projectName}</p>}
            </div>
            <div className="relative">
              <input
                type="text"
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                placeholder="Project ID"
                className={`w-full px-2 py-1.5 border rounded-md text-xs focus:border-blue-400 pr-6 ${errors.projectId ? 'border-red-500' : ''}`}
              />
              <Info className="absolute right-1.5 top-2 w-3 h-3 text-gray-400" />
              {errors.projectId && <p className="text-red-500 text-xs mt-0.5">{errors.projectId}</p>}
            </div>
            <div className="md:col-span-4">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full px-2 py-1.5 border rounded-md text-xs focus:border-blue-400 h-32"
              />
            </div>
          </div>

          <div className="relative flex items-center gap-2 mt-3">
            <button
              type="button"
              className="flex items-center gap-1 px-3 py-2 border rounded-md text-xs"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Earth className="w-4 h-4" /> {visibility}
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-md z-10">
                <button
                  className="flex flex-col items-start px-4 py-2 w-full text-left text-sm hover:bg-gray-100"
                  onClick={() => { setVisibility("Private"); setIsDropdownOpen(false); }}
                >
                  <div className="flex items-center gap-2"><Lock className="w-4 h-4" /> Private</div>
                  <p className="text-gray-500 text-xs">Accessible only by invite</p>
                </button>
                <button
                  className="flex flex-col items-start px-4 py-2 w-full text-left text-sm hover:bg-gray-100"
                  onClick={() => { setVisibility("Public"); setIsDropdownOpen(false); }}
                >
                  <div className="flex items-center gap-2"><Earth className="w-4 h-4" /> Public {visibility === "Public" && <Check className="w-4 h-4 text-blue-500" />}</div>
                  <p className="text-gray-500 text-xs">Anyone in the workspace except Guests can join</p>
                </button>
              </div>
            )}
            <div className="relative">
              <button 
                className="flex items-center gap-1.5 px-3 py-2 border rounded-md text-xs"
                onClick={toggleLeadDropdown}
              >
                <Users className="w-4 h-4" /> 
                {selectedLead 
                  ? workspaceMembers.find(m => m.id === selectedLead)?.name 
                  : "Lead"}
              </button>

              {isLeadDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-md z-10">
                  <div className="p-2">
                    <input 
                      type="text"
                      placeholder="Search members"
                      value={leadSearchQuery}
                      onChange={(e) => setLeadSearchQuery(e.target.value)}
                      className="w-full px-2 py-1 border rounded text-xs"
                    />
                  </div>
                  <ul className="max-h-60 overflow-y-auto">
                    {filteredMembers.map((member) => (
                      <li 
                        key={member.id}
                        onClick={() => handleLeadSelection(member.id)}
                        className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                      >
                        {member.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div> */}

        {/* <div className="flex justify-end gap-2 pt-3 border-t mt-auto">
            <button
              type="button"
              className="px-3 py-2 border rounded text-xs"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded text-xs">
              Create project
            </button>
          </div> */}
      </form>

        
      </div>
    </dialog>
  );
};
