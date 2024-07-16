import CustomDropdown from "@/components/custom-dropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
import { OrgSizeDropDownItems } from "@/constants/dropdown-items";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { FormLabel } from "@/components/form-elements/form-label";
import {
  TWorkspaceValidator,
  WorkspaceValidator,
} from "@/lib/validators/account/workspace.validator";
import { IWorkspace } from "@/types/workspace";

interface Props {
  onSubmit: (formData: Partial<IWorkspace>) => Promise<void>;
  isSubmitting: boolean;
}

export const WorkspaceForm: React.FC<Props> = (props) => {
  const { onSubmit, isSubmitting } = props;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  const [organizationSize, setorganizationSize] = useState<string | null>(null);
   
  
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { isValid },
  } = useForm<TWorkspaceValidator>({
    resolver: zodResolver(WorkspaceValidator),
    mode: "onChange"
  });
  const [workspaceSlug, setWorkspaceSlug] = useState(
    `${BASE_URL}workspace/`
  );

  const handleWorkspaceNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the workspace slug with the concatenated value
    const updatedSlug = e.target.value.replace(/\s+/g, "-");
    setValue("slug", updatedSlug.trim());
    setWorkspaceSlug(`${BASE_URL}/workspace/${updatedSlug}`);
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-6">
        <FormLabel labelText="Name it." />
      </div>
      <div className="mt-4">
        <Input
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="enter workspace name..."
          {...register("name")}
          onChange={handleWorkspaceNameChange}
        />
      </div>
      <div className="mt-6">
        <FormLabel labelText="you can edit the slug." />
      </div>
      <div className="mt-4">
        <Input
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="http://cspro.com/"
          {...register("slug")}
          value={workspaceSlug}
          readOnly
        />
      </div>

      <div className="mt-6">
        <FormLabel labelText="What size is your organization" />
      </div>

      <div className="py-2 text-sm text-gray-700 text-muted-foreground">
        <CustomDropdown
          onSelect={(selectedItem) => {
            setValue("organization_size", selectedItem), setorganizationSize(selectedItem);
            trigger("organization_size")
          }}
          dropDownTitle={
            organizationSize ? organizationSize : "Select organisation size"
          }
          dropDownItems={OrgSizeDropDownItems}
        />
      </div>

      <div className="py-2">
        <Button
         className="w-full border rounded-md" 
         type="submit"
         disabled= {!isValid || isSubmitting}
        >
         {isSubmitting ? "Creating.." : "Create Workspace"}  
        </Button>
      </div>
    </form>
  );
};
