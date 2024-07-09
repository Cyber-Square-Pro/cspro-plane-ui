import CustomDropdown from "@/components/custom-dropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
import { ProfileDropDownItems } from "@/constants/dropdown-items";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { FormLabel } from "@/components/form-elements/form-label";
import { IProfile, IVerificationCode } from "@/types/user";
import {
  ProfileValidator,
  TProfileValidator,
} from "@/lib/validators/account/profile.validator";

interface Props {
  onSubmit: (formData: IProfile) => Promise<void>;
  isSubmitting: boolean;
}

export const ProfileForm: React.FC<Props> = (props) => {
  
  const { onSubmit, isSubmitting } = props;

  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm<TProfileValidator>({
    resolver: zodResolver(ProfileValidator),
    mode: "onChange",
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mt-6">
        <FormLabel labelText="First Name:" />
      </div>
      <div className="mt-4">
        <Input
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="eg: john"
          {...register("first_name")}
        />
        {errors?.first_name && (
          <p className="text-sm text-red-500 mt-3">
            {errors.first_name?.message}
          </p>
        )}
      </div>
      <div className="mt-6">
        <FormLabel labelText="Last Name:" />
      </div>
      <div className="mt-4">
        <Input
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="eg: doe"
          {...register("last_name")}
        />
        {errors?.last_name && (
          <p className="text-sm text-red-500 mt-3">
            {errors.last_name?.message}
          </p>
        )}
      </div>

      <div className="mt-6">
        <FormLabel labelText=" What's your role:" />
      </div>

      <div className="py-2 text-sm text-gray-700 text-muted-foreground">
        <CustomDropdown
          onSelect={(selectedItem) => {
            setValue("role", selectedItem), setSelectedRole(selectedItem);
            trigger("role");
          }}
          dropDownTitle={selectedRole ? selectedRole : "Select role"}
          dropDownItems={ProfileDropDownItems}
          {...register("role")}
        />
        {errors?.role && (
          <p className="text-sm text-red-500 mt-3">{errors.role?.message}</p>
        )}
      </div>

      <div className="py-2">
        <Button
          className="w-full border rounded-md"
          type="submit"
          disabled= {!isValid || isSubmitting}
        >
         {isSubmitting ? "Creating..." : "Create Profile"}  
        </Button>
      </div>
    </form>
  );
};
