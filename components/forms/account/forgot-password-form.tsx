"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ForgotPasswordValidator, TForgotPasswordValidator } from "@/lib/validators/account/forgotpassword.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  onSubmit: (formData: TForgotPasswordValidator) => Promise<void>;
  isLoading?: boolean;
}

export const ForgotPasswordForm: React.FC<Props> = ({ onSubmit, isLoading = false }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TForgotPasswordValidator>({
    resolver: zodResolver(ForgotPasswordValidator),
    mode: 'onChange',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full mt-4" autoComplete="off">
      <div className="relative">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <Input
          className="w-full border rounded-md px-3 py-4 mt-1"
          placeholder="Enter your registered email"
          type="email"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-500 text-[13px] ml-2">{errors.email.message}</span>
        )}
      </div>

      <Button
        className="w-full border rounded-md py-2 mt-8"
        disabled={!isValid || isLoading}
        type="submit"
      >
        {isLoading ? "Sending..." : "Send Reset Link"}
      </Button>
    </form>
  );
};