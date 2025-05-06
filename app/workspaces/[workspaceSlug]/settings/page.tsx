"use client";
import { useMobxStore } from "@/store/store.provider";
import { OrgSizeDropDownItems } from "@/constants/dropdown-items";
import { Controller, useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import { IUpdateWorkspace, IWorkspace } from "@/types/workspace";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { WorkspaceService } from "@/services/workspace";
import Select from "react-select";
import { ORG_SIZE, RESTRICTED_URLS } from "@/constants/workspace";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
import { Toast } from "@/lib/toast/toast";
import { ToastContainer } from "react-toastify";

const GeneralSettingsPage = observer(() => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const BASE_ASSET_URL = process.env.NEXT_PUBLIC_BASE_ASSET_URL;

  // Debug environment variables
  console.log(
    "Environment variables:",

    process.env.NEXT_PUBLIC_BASE_ASSET_URL
  );
  const router = useRouter();
  console.log(BASE_ASSET_URL, "BASE_URLLLLLLLLLLLLLLLLLLLLLLLL");
  const {
    workspace: { workspaces },
    user: { currentUser },
  } = useMobxStore();

  const workspaceDisplayTxt = workspaces ? workspaces[0].name[0] : "";
  const email = currentUser?.email;
  const { workspace: workspaceStore } = useMobxStore();

  const currentWorkspace = workspaces?.[0]?.name.replace(/\s+/g, "-") || "";
  const workspaceURL = BASE_URL + "workspaces/" + currentWorkspace;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedLogo, setSelectedLogo] = useState<File | null>(null);
  const [logoPreviewUrl, setLogoPreviewUrl] = useState<string | null>(
    "/default.webp"
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedLogo(file);
      setLogoPreviewUrl(URL.createObjectURL(file));
    }
    else{
      console.log("No file selected///////////////////////////////////////////");
    }
  };

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUpdateWorkspace>({
    defaultValues: {
      name: workspaces?.[0]?.name || "",
      organization_size: workspaces?.[0]?.organization_size || "1 - 10",
      id: workspaces?.[0]?.id || "",
      slug: workspaces?.[0]?.slug || "", 
    },
  });

  console.log("workspaces", workspaces);
  const slugValue = workspaces?.[0]?.slug || "";
  const [workspaceSlug, setWorkspaceSlug] = useState(`${BASE_URL}workspace/${slugValue}`);

  useEffect(() => {
    if (!selectedLogo && workspaces?.[0]?.logo) {
      const logoPath = BASE_ASSET_URL + workspaces[0].logo;
      setLogoPreviewUrl(logoPath);
    }
  }, [workspaces, selectedLogo]);

  const workspaceService = new WorkspaceService();

  const handleWorkspaceNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Update the workspace slug with the concatenated value
    const updatedSlug = e.target.value.replace(/\s+/g, "-");
    setValue("slug", updatedSlug.trim());
    setWorkspaceSlug(`${BASE_URL}workspace/${updatedSlug}`);
  };

  const handleFormSubmit = async (data: IUpdateWorkspace) => {
    const formData = new FormData();
    const toast = new Toast();

    formData.append("name", data.name || "");
    formData.append("id", data.id || "");
    formData.append("organization_size", data.organization_size || "");
    formData.append("slug", data.slug || "");

    console.log(data.slug, "data slugggggggggggggggg");

    if (selectedLogo) {
      console.log(selectedLogo, "selectedLogo");
      formData.append("logo", selectedLogo);
    }

    if (RESTRICTED_URLS.includes(data.slug)) {
      toast.showToast("error", "Invalid Workspace name");
      return;
    }

    await workspaceService
      .workspaceSlugCheck(data.slug)
      .then(async (response) => {
        if (response.status === true) {
          
           workspaceService.updateWorkspace(formData).then((res) => {
            if(res?.statusCode == 200) {
              setTimeout(() => {
                toast.showToast("success", "Workspace updated successfully");
              }, 2000);
            }
            console.log(res, "Profile updated successfully");
            router.push(`/workspaces/${data.slug}`);
          });



        } else {
          toast.showToast("error", "Workspace Exists");
        }
      });

   
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div>
        <ToastContainer />
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="max-w-3xl mx-auto p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-300 rounded-md flex items-center justify-center text-xl font-semibold uppercase">
                {workspaceDisplayTxt}
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  {currentUser?.first_name} {currentUser?.last_name}
                </h2>
                <p className="text-sm text-gray-500">{workspaceURL}</p>
              </div>
            </div>
            <div>
              <div className="flex space-x-2 space-y-3 mb-2">
                {logoPreviewUrl && (
                  <img
                    src={logoPreviewUrl}
                    alt="Logo preview"
                    className="w-12 h-12 rounded-md border object-cover"
                  />
                )}

                <button
                  type="button"
                  className="text-blue-500 text-sm mt-1"
                  onClick={handleUploadClick}
                >
                  Upload logo
                </button>
                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={inputRef}
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">
                    Workspace name
                  </label>

                  <Controller
                    control={control}
                    name="name"
                    rules={{ required: "First name is required." }}
                    render={({ field: { value, onChange, ref } }) => (
                      <Input
                        id="name"
                        onChange={(e) => {
                          onChange(e); // update form state
                          handleWorkspaceNameChange(e); // update slug
                        }}
                        name="name"
                        type="text"
                        value={value}
                        defaultValue={workspaces?.[0]?.name ?? ""}
                        placeholder="Enter your first name"
                        className="w-full h-9 text-[13px]"
                        maxLength={24}
                      />
                    )}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Company size</label>
                  <Controller
                    control={control}
                    name="organization_size"
                    render={({ field }) => (
                      <Select
                        options={ORG_SIZE}
                        classNamePrefix="select"
                        placeholder="Select organization size"
                        menuPlacement="top"
                        menuShouldBlockScroll={true}
                        name="organization_size"
                        value={ORG_SIZE.find(
                          (option) => option.value === field.value
                        )}
                        onChange={(selectedOption) =>
                          field.onChange(
                            (selectedOption as { value: string }).value
                          )
                        }
                      />
                    )}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600">Workspace URL</label>
                <input
                  type="text"
                  readOnly
                  value={workspaceSlug}
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 bg-gray-100"
                />

                {/* <Controller
                  control={control}
                  name="url"
                  render={({ field: { value, onChange, ref } }) => (
                    <Input
                      id="name"
                      onChange={onChange}
                      name="url"
                      type="text"
                      value={value}
                      defaultValue={workspaceURL}
                      readOnly
                      className="w-full h-9 text-[13px]"
                      maxLength={24}
                    />
                  )}
                /> */}
              </div>

              {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Update workspace
              </button> */}
              <Button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Save Changes
              </Button>

              <hr className="my-6" />

              <div>
                <button className="text-sm text-red-500">
                  Delete workspace
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
});

export default GeneralSettingsPage;
