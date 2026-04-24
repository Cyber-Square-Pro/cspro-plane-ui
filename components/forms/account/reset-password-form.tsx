"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResetPasswordValidator, TResetPasswordValidator } from "@/lib/validators/account/resetpassword.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';
import { useForm } from "react-hook-form";

interface Props {
  onSubmit: (formData: TResetPasswordValidator) => Promise<void>;
  isLoading?: boolean;
  token?: string;
}

export const ResetPasswordForm: React.FC<Props> = ({ onSubmit, isLoading = false, token }) => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TResetPasswordValidator>({
    resolver: zodResolver(ResetPasswordValidator),
    mode: 'onChange',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full mt-4" autoComplete="off">
      {token && <input type="hidden" name="token" value={token} />}
      
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
        className="w-full border rounded-md py-2 mt-8"
        disabled={!isValid || isLoading}
        type="submit"
      >
        {isLoading ? "Resetting..." : "Reset Password"}
      </Button>
    </form>
  );
};