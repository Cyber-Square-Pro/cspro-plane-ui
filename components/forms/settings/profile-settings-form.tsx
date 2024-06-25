"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Select from 'react-select';
import { IUser } from "@/types/user";
import { TIME_ZONES } from "@/constants/timezones";
import { USER_ROLES } from "@/constants/profile";
import { customSelectStyle } from "@/components/select-style";

/*
  Author: Muhammed Adnan on June 2nd, 2024
  Purpose: Provides a form for users to update profile information.
  Props: None
*/

const ProfileSettingsForm = () => {
  const { control, reset, formState: { errors } } = useForm<IUser>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      display_name: "",
      user_timezone: "",
      role: ""
    }
  });

  const timeZones = TIME_ZONES.map(time => ({ value: time.value, label: time.label }));
  const userRoles = USER_ROLES.map(role => ({ value: role.value, label: role.label }));

  return (
    <form>
      <div className="grid grid-cols-1 gap-6 px-8 lg:grid-cols-2 2xl:grid-cols-3">
        <div className="flex flex-col gap-1 text-[13px]">
          <span>First name<span className="text-red-500">*</span></span>
          <Controller
            control={control}
            name="first_name"
            defaultValue="first name"
            rules={{ required: "First name is required." }}
            render={({ field: { value, onChange, ref } }) => (
              <Input
                id="first_name"
                name="first_name"
                type="text"
                value={value}
                onChange={onChange}
                ref={ref}
                placeholder="Enter your first name"
                className="w-full h-9 text-[13px]"
                maxLength={24}
              />
            )}
          />
        </div>

        <div className="flex flex-col gap-1 text-[13px]">
          <span>Last name</span>
          <Controller
            control={control}
            name="last_name"
            defaultValue="last name"
            render={({ field: { value, onChange, ref } }) => (
              <Input
                id="last_name"
                name="last_name"
                type="text"
                value={value}
                onChange={onChange}
                ref={ref}
                placeholder="Enter your last name"
                className="w-full h-9 text-[13px]"
                maxLength={24}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-1 text-[13px]">
          <span>Email<span className="text-red-500">*</span></span>
          <Controller
            control={control}
            name="email"
            defaultValue="user@email.com"
            rules={{ required: "Email is required." }}
            render={({ field: { value, ref } }) => (
              <Input
                id="email"
                name="email"
                type="email"
                value="user@email.com"
                ref={ref}
                className="w-full cursor-not-allowed bg-gray-300 text-black h-9 text-[13px]"
                disabled
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-1 text-[13px]">
          <span>Role<span className="text-red-500">*</span></span>
          <Controller
            control={control}
            name="role"
            render={({ field: { value, onChange } }) => (
              <Select
                options={userRoles}
                classNamePrefix="select"
                placeholder="Select Your Role"
                menuPlacement='top'
                menuShouldBlockScroll={true}
                name="role"
                styles={customSelectStyle}
                value={userRoles.find((option) => option.value === value)}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-1 text-[13px]">
          <span>Display name<span className="text-red-500">*</span></span>
          <Controller
            control={control}
            name="display_name"
            defaultValue="display name"
            rules={{
              required: "Display name is required.",
            }}
            render={({ field: { value, onChange, ref } }) => (
              <Input
                id="display_name"
                name="display_name"
                type="text"
                value={value}
                onChange={onChange}
                ref={ref}
                placeholder="Enter your display name"
                maxLength={24}
                className="w-full h-9 text-[13px]"
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-1 text-[13px]">
          <span>Timezone<span className="text-red-500">*</span></span>
          <Controller
            control={control}
            name="user_timezone"
            render={({ field: { value, onChange } }) => (
              <Select
                options={timeZones}
                className="basic-single"
                classNamePrefix="select"
                placeholder="Select Your TimeZone"
                menuPlacement='top'
                menuShouldBlockScroll={true}
                name="user_timezone"
                styles={customSelectStyle}
                value={timeZones.find((option) => option.value === value)}
              />
            )}
          />
        </div>
        <div className="flex items-center justify-between py-2">
          <Button className="h-[30px] rounded-sm">Save Changes</Button>
        </div>
      </div>
    </form>
  );
};

export default ProfileSettingsForm;
