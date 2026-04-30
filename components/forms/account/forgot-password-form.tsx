"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ForgotPasswordValidator,
  TForgotPasswordValidator,
} from "@/lib/validators/account/forgotpassword.validator";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  isSubmitting: boolean;
  statusMessage?: string;
  statusType?: "success" | "error";
  onFormSubmit: (data: TForgotPasswordValidator) => void;
  
}

export const ForgotPasswordForm: React.FC<Props> = ({
  isSubmitting,
  statusMessage,
  statusType,
  onFormSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TForgotPasswordValidator>({
    resolver: zodResolver(ForgotPasswordValidator),
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
      <div>
        <Input
          type="email"
          className="w-full border rounded-md"
          placeholder="Enter your email"
          {...register("email")}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message as string}
          </p>
        )}
      </div>

      <Button
        className="w-full border rounded-md"
        disabled={!isValid || isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Sending..." : "Send Reset Link"}
      </Button>

      {statusMessage && (
        <div
          className={`text-center py-2 ${
            statusType === "success"
              ? "text-green-600 bg-green-50"
              : statusType === "error"
              ? "text-red-600 bg-red-50"
              : ""
          }`}
        >
          {statusMessage}
        </div>
      )}

      <div className="text-center py-2">
        <Link href="/sign-in" className="text-blue-600 hover:underline">
          Back to Login
        </Link>
      </div>
    </form>
  );
};