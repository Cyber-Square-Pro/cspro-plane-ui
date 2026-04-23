"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ResetPasswordValidator,
  TResetPasswordValidator,
} from "@/lib/validators/account/resetpassword.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  onFormSubmit: (formData: TResetPasswordValidator) => void;
  isLoading?: boolean;
}

export const ResetPasswordForm: React.FC<Props> = ({
  onFormSubmit,
  isLoading = false,
}) => {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TResetPasswordValidator>({
    resolver: zodResolver(ResetPasswordValidator),
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="space-y-5"
      autoComplete="off"
    >
      <div>
        <label
          htmlFor="reset-new-password"
          className="block text-sm font-medium mb-1"
        >
          New Password
        </label>
        <div className="relative">
          <Input
            id="reset-new-password"
            className="w-full pr-10"
            placeholder="New Password"
            type={showNew ? "text" : "password"}
            {...register("newPassword")}
            disabled={isLoading}
          />
          <span
            onClick={() => setShowNew(!showNew)}
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-muted-foreground"
          >
            {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>
        {errors.newPassword && (
          <span className="text-red-500 text-[13px] mt-1 block">
            {errors.newPassword.message}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="reset-confirm-password"
          className="block text-sm font-medium mb-1"
        >
          Confirm Password
        </label>
        <div className="relative">
          <Input
            id="reset-confirm-password"
            className="w-full pr-10"
            placeholder="Confirm New Password"
            type={showConfirm ? "text" : "password"}
            {...register("confirmPassword")}
            disabled={isLoading}
          />
          <span
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-muted-foreground"
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>
        {errors.confirmPassword && (
          <span className="text-red-500 text-[13px] mt-1 block">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <Button
        id="reset-password-submit"
        className="w-full"
        disabled={!isValid || isLoading}
        type="submit"
      >
        {isLoading ? "Resetting..." : "Reset Password"}
      </Button>
    </form>
  );
};
