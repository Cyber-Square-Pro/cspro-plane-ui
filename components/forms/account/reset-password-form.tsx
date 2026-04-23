"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ResetPasswordValidator,
  TResetPasswordValidator,
} from "@/lib/validators/account/resetpassword.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  isSubmitting: boolean;
  onFormSubmit: (formData: TResetPasswordValidator) => void;
}

export const ResetPasswordForm: React.FC<Props> = ({
  isSubmitting,
  onFormSubmit,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TResetPasswordValidator>({
    resolver: zodResolver(ResetPasswordValidator),
    mode: "onChange",
    defaultValues: {
      new_password: "",
      confirmPassword: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="py-2">
        <Input
          className="w-full border rounded-md"
          placeholder="Enter your new password"
          type={showPassword ? "text" : "password"}
          {...register("new_password")}
        />
        {errors?.new_password && (
          <p className="text-sm text-red-500 mt-3">
            {errors.new_password.message}
          </p>
        )}
      </div>

      <div className="py-2">
        <Input
          className="w-full border rounded-md"
          placeholder="Confirm your new password"
          type={showPassword ? "text" : "password"}
          {...register("confirmPassword")}
        />
        {errors?.confirmPassword && (
          <p className="text-sm text-red-500 mt-3">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className="py-2">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            onChange={(event) => setShowPassword(event.target.checked)}
          />
          <span>Show Password</span>
        </label>
      </div>

      <div className="py-2">
        <Button
          className="w-full border rounded-md"
          disabled={!isValid || isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Resetting..." : "Reset Password"}
        </Button>
      </div>

      <div className="py-2 text-center">
        <Link href="/">Back to login</Link>
      </div>
    </form>
  );
};
