"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangePasswordValidator, TChangePasswordValidator } from "@/lib/validators/account/changepassword.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Eye, EyeOff } from 'lucide-react'; 
import { useForm } from "react-hook-form";

/*
  Author: Fathima Swabri on July 10, 2024
  Purpose: Provides a form for users to update password. 
  Props: None 
*/

interface Props {
  onFormSubmit: (formData: TChangePasswordValidator) => void;
}

export const ChangePasswordForm: React.FC<Props> = ({ onFormSubmit }) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TChangePasswordValidator>({
    resolver: zodResolver(ChangePasswordValidator),
    mode: 'onChange',
  });

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5 w-full mt-4" autoComplete="off">
      <div className="relative">
        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
          Current Password
        </label>
        <div className="relative">
          <Input
          
            className="w-full border rounded-md px-3 py-4 mt-1"
            placeholder="Current Password"
            type={showCurrentPassword ? 'text' : 'password'}
            {...register("currentPassword")}
          />
          <span
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400"
          >
            {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>
        {errors.currentPassword && (
          <span className="text-red-500 text-[13px] ml-2">{errors.currentPassword.message}</span>
        )}
      </div>

      <div className="relative">
        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
          New Password
        </label>
        <div className="relative">
          <Input
            
            className="w-full border rounded-md px-3 py-4 mt-1"
            placeholder="New Password"
            type={showNewPassword ? 'text' : 'password'}
            {...register("newPassword")}
          />
          <span
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400"
          >
            {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>
        {errors.newPassword && (
          <span className="text-red-500 text-[13px] ml-2">{errors.newPassword.message}</span>
        )}
      </div>

      <div className="relative">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <div className="relative">
          <Input
          
            className="w-full border rounded-md px-3 py-4 mt-1"
            placeholder="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            {...register("confirmPassword")}
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>
        {errors.confirmPassword && (
          <span className="text-red-500 text-[13px] ml-2">{errors.confirmPassword.message}</span>
        )}
      </div>

      <Button
        className="w-1/3 border rounded-md py-2 mx-auto mt-8"
        disabled={!isValid}
        type="submit"
      >
        Change Password
      </Button>
    </form>
  );
};

export default ChangePasswordForm;