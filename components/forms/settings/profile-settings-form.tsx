"use client";
import React, { FC, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Select from "react-select";
import { IProfile, IUser } from "@/types/user";
import { TIME_ZONES } from "@/constants/timezones";
import { USER_ROLES } from "@/constants/profile";
import { customSelectStyle } from "@/components/select-style";
 

/*
  Author: Muhammed Adnan on June 2nd, 2024
  Purpose: Provides a form for users to update profile information.
  Props: None
  Updated By: Darshana on April 11, 2025
             - Removed display_name from the field
*/

interface Props {
  userProfile: IProfile | null;
  onSubmit: (data: IProfile) => void;
}

const ProfileSettingsForm: FC<Props> = (props) => {
  const { onSubmit } = props;
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfile>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      user_timezone: "",
      role: "",
      cover_image: "",
    },
  });

  const timeZones = TIME_ZONES.map((time) => ({
    value: time.value,
    label: time.label,
  }));
  // const userRoles = USER_ROLES.map((role) => ({
  //   value: role.value,
  //   label: role.label,
  // }));
  // // type UserRoleOption = (typeof USER_ROLES)[number];

  const { userProfile } = props;
  console.log(userProfile, "user profile from form");

  useEffect(() => {
    if (userProfile) {
      reset({
        first_name: userProfile.first_name || "",
        last_name: userProfile.last_name || "",
        email: userProfile.email || "",
        user_timezone: userProfile.user_timezone || "",
        role: userProfile.role || "",
      });
    }
  }, [userProfile, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap gap-6 px-8">
        <div className="flex w-full gap-6">
          <div className="flex flex-col w-1/2 text-[13px]">
            <label htmlFor="first_name">
              First Name<span className="text-red-500">*</span>
            </label>
            <Controller
              control={control}
              name="first_name"
              rules={{ required: "First name is required." }}
              render={({ field: { value, onChange, ref } }) => (
                <Input
                  id="first_name"
                  onChange={onChange}
                  name="first_name"
                  type="text"
                  value={value}
                  placeholder="Enter your first name"
                  className="w-full h-9 text-[13px]"
                  maxLength={24}
                />
              )}
            />
          </div>

          <div className="flex flex-col w-1/2 text-[13px]">
            <label htmlFor="last_name">Last Name</label>
            <Controller
              control={control}
              name="last_name"
              rules={{ required: "First name is required." }}
              render={({ field: { value, onChange, ref } }) => (
                <Input
                  id="last_name"
                  type="text"
                  value={value}
                  onChange={onChange}
                  placeholder="Enter your last name"
                  className="h-9 text-[13px]"
                />
              )}
            />
          </div>
        </div>

        <div className="flex w-full gap-6">
          <div className="flex flex-col w-1/2 text-[13px]">
            <span>
              Email<span className="text-red-500">*</span>
            </span>
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
                  value={value}
                  ref={ref}
                  className="w-full cursor-not-allowed bg-gray-300 text-black h-9 text-[13px]"
                  disabled
                />
              )}
            />
          </div>

          <div className="flex flex-col w-1/2 text-[13px]">
            <span>
              Role<span className="text-red-500">*</span>
            </span>
            <Controller
              control={control}
              name="role"
              render={({ field }) => (
                <Select
                  options={USER_ROLES}
                  classNamePrefix="select"
                  placeholder="Select Your Role"
                  menuPlacement="top"
                  menuShouldBlockScroll={true}
                  name="role"
                  styles={customSelectStyle}
                  value={USER_ROLES.find(option => option.value === field.value)}
                  onChange={(selectedOption) =>
                    field.onChange((selectedOption as { value: string })?.value)
                  }
                />
              )}
            />
          </div>
        </div>

        <div className="flex w-full gap-6">
          <div className="flex flex-col w-full text-[13px]">
            <span>
              Timezone<span className="text-red-500">*</span>
            </span>
            <Controller
              control={control}
              name="user_timezone"
              render={({ field: { value, onChange } }) => (
                <Select
                  options={timeZones}
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Select Your TimeZone"
                  menuPlacement="top"
                  menuShouldBlockScroll={true}
                  name="user_timezone"
                  styles={customSelectStyle}
                  value={timeZones.find((option) => option.value === value)}
                  onChange={(selectedOption =>
                    onChange((selectedOption as { value: string })?.value)
                  )}
                />
              )}
            />
          </div>
        </div>

        {/* Add more rows here with the same structure... */}

        <div className="w-full flex justify-end mt-6">
          <Button className="h-[30px] rounded-sm">Save Changes</Button>
        </div>
      </div>
    </form>

    //   <form>
    //   <div className="grid grid-cols-1 gap-6 px-8 lg:grid-cols-2 2xl:grid-cols-3">
    //     <div className="flex flex-col gap-1 text-[13px]">
    //       <span>First name<span className="text-red-500">*</span></span>
    //       <Controller
    //         control={control}
    //         name="first_name"
    //         defaultValue="first name"
    //         rules={{ required: "First name is required." }}
    //         render={({ field: { value, onChange, ref } }) => (
    //           <Input
    //             id="first_name"
    //             name="first_name"
    //             type="text"
    //             value={value}
    //             onChange={onChange}
    //             ref={ref}
    //             placeholder="Enter your first name"
    //             className="w-full h-9 text-[13px]"
    //             maxLength={24}
    //           />
    //         )}
    //       />
    //     </div>

    //     <div className="flex flex-col gap-1 text-[13px]">
    //       <span>Last name</span>
    //       <Controller
    //         control={control}
    //         name="last_name"
    //         defaultValue="last name"
    //         render={({ field: { value, onChange, ref } }) => (
    //           <Input
    //             id="last_name"
    //             name="last_name"
    //             type="text"
    //             value={value}
    //             onChange={onChange}
    //             ref={ref}
    //             placeholder="Enter your last name"
    //             className="w-full h-9 text-[13px]"
    //             maxLength={24}
    //           />
    //         )}
    //       />
    //     </div>
    //     <div className="flex flex-col gap-1 text-[13px]">
    //       <span>Email<span className="text-red-500">*</span></span>
    //       <Controller
    //         control={control}
    //         name="email"
    //         defaultValue="user@email.com"
    //         rules={{ required: "Email is required." }}
    //         render={({ field: { value, ref } }) => (
    //           <Input
    //             id="email"
    //             name="email"
    //             type="email"
    //             value={value}
    //             ref={ref}
    //             className="w-full cursor-not-allowed bg-gray-300 text-black h-9 text-[13px]"
    //             disabled
    //           />
    //         )}
    //       />
    //     </div>
    //     <div className="flex flex-col gap-1 text-[13px]">
    //       <span>Role<span className="text-red-500">*</span></span>
    //       <Controller
    //         control={control}
    //         name="role"
    //         render={({ field: { value, onChange } }) => (
    //           <Select
    //             options={userRoles}
    //             classNamePrefix="select"
    //             placeholder="Select Your Role"
    //             menuPlacement='top'
    //             menuShouldBlockScroll={true}
    //             name="role"
    //             styles={customSelectStyle}
    //             value={userRoles.find((option) => option.value === value)}
    //           />
    //         )}
    //       />
    //     </div>

    //     <div className="flex flex-col gap-1 text-[13px]">
    //       <span>Timezone<span className="text-red-500">*</span></span>
    //       <Controller
    //         control={control}
    //         name="user_timezone"
    //         render={({ field: { value, onChange } }) => (
    //           <Select
    //             options={timeZones}
    //             className="basic-single"
    //             classNamePrefix="select"
    //             placeholder="Select Your TimeZone"
    //             menuPlacement='top'
    //             menuShouldBlockScroll={true}
    //             name="user_timezone"
    //             styles={customSelectStyle}
    //             value={timeZones.find((option) => option.value === value)}
    //           />
    //         )}
    //       />
    //     </div>
    //     <div className="flex items-center justify-between py-2">
    //       <Button className="h-[30px] rounded-sm">Save Changes</Button>
    //     </div>
    //   </div>
    // </form>
  );
};

export default ProfileSettingsForm;