"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ForgotPasswordValidator,
  TForgotPasswordValidator,
} from "@/lib/validators/account/forgotpassword.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

/*
  Author: Tysha Daniels on April 18, 2025
  Purpose: Form component for the Forgot Password page.
           Accepts user's email and triggers the password reset email flow.
  Props:
    - onFormSubmit: callback fired with validated email data
    - isLoading: shows a disabled state while the request is in-flight
*/

interface Props {
  onFormSubmit: (formData: TForgotPasswordValidator) => void;
  isLoading?: boolean;
}

export const ForgotPasswordForm: React.FC<Props> = ({
  onFormSubmit,
  isLoading = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TForgotPasswordValidator>({
    resolver: zodResolver(ForgotPasswordValidator),
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
      <div>
        <Input
          id="forgot-password-email"
          className="w-full"
          placeholder="Enter your email address"
          type="email"
          {...register("email")}
          disabled={isLoading}
        />
        {errors.email && (
          <span className="text-red-500 text-[13px] mt-1 block">
            {errors.email.message}
          </span>
        )}
      </div>

      <Button
        id="forgot-password-submit"
        className="w-full"
        disabled={!isValid || isLoading}
        type="submit"
      >
        {isLoading ? "Sending..." : "Send Reset Link"}
      </Button>
    </form>
  );
};
