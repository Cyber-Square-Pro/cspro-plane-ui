"use client";
import React, { useState } from "react";
import { ChevronDown, CircleUserRound } from "lucide-react";
import ProfileSettingsForm from "@/components/forms/settings/profile-settings-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";

/*
  Author: Muhammed Adnan on June 2nd, 2024
  Purpose: Displays the profile settings page 
*/

const ProfileSettings = () => {
  const [isDeactivateSectionOpen, setIsDeactivateSectionOpen] = useState(false);
  const toggleDeactivateSection = () => {
    setIsDeactivateSectionOpen(!isDeactivateSectionOpen);
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex w-[790px] h-full flex-col space-y-6 px-10 pt-9 pb-3 overflow-y-auto max-h-[calc(100vh-3.5rem)]">
          <div className="relative h-100 w-full ">
            <Image
              src={"https://images.unsplash.com/photo-1506383796573-caf02b4a79ab"}
              className="h-[180px] w-full rounded-lg object-cover"
              alt={"Cover image"}
              width={300}
              height={150}
              unoptimized
            />
              <div className="absolute -bottom-6 left-8 flex h-16 w-16 items-center bg-blue-50 justify-center rounded-lg">
                <button>
                  <div className="h-16 w-16 rounded-md bg-gray-200 p-2">
                    <CircleUserRound className="h-full w-full text-gray-700"/>
                  </div>
                </button>
              </div>
            <div className="absolute bottom-3 right-3 flex">
              <button className="h-[25px] p-1 bg-white rounded-sm text-black text-xs">Change Cover</button>
            </div>
          </div>

          <div className="flex flex-col px-8">
            <span className="font-bold mt-3">First name Last name</span>
            <span className="text-sm tracking-tight">user@email.com</span>
          </div>
        <ProfileSettingsForm />
        <div className="border-t px-8">
          <button
            className="flex w-full items-center justify-between py-4"
            onClick={toggleDeactivateSection}
          >
            <span className="tracking-tight">Deactivate account</span>
            <ChevronDown className={`h-5 w-5 transition-all ${isDeactivateSectionOpen ? "rotate-180" : ""}`} />
          </button>
          {isDeactivateSectionOpen && (
            <div className="flex flex-col gap-8 transition duration-100 ease-out">
              <span className="text-sm tracking-tight">
                The danger zone of the profile page is a critical area that requires careful consideration and
                attention. When deactivating an account, all of the data and resources within that account
                will be permanently removed and cannot be recovered.
              </span>
              <div>
                <Button className="bg-red-500 hover:bg-red-600 h-[30px] rounded-sm">
                  Deactivate account
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
