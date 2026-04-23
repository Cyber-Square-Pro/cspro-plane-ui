"use client";
import React, { useState } from "react";
import ChangePasswordForm from "@/components/forms/account/change-password-form";
import { Toast } from "@/lib/toast/toast";
import { TChangePasswordValidator } from "@/lib/validators/account/changepassword.validator";
import { ProfileService } from "@/services/profile.service";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import { KeyRound, MailOpen } from "lucide-react";

/*
  Author: Fathima Swabri on July 10, 2024
  Purpose: Display security page under profile settings. 
  Props: None 
*/

const ChangePassword: React.FC = () => {
  const profileService = new ProfileService();
  const toast = new Toast();
  const handleFormSubmit = async (formData: TChangePasswordValidator) => {
    try {
      await profileService.updateUserPassword(formData).then((res) => {
        console.log(res, "Password updated successfully");
        res?.statusCode == 200
          ? toast.showToast("success", res?.message)
          : toast.showToast("error", res?.message);
      });
    } catch (error) {
      console.error("Error updating password", error);
      toast.showToast("error", "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full min-h-full p-8 bg-white">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-1">
            <KeyRound size={18} className="text-gray-700" />
            <h1 className="text-2xl font-bold text-gray-900">
              Change Password
            </h1>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Update your password. You&apos;ll need to know your current password
            first.
          </p>

          <ChangePasswordForm onFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
