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
  onFormSubmit: (formData: TForgotPasswordValidator) => void;
}

export const ForgotPasswordForm: React.FC<Props> = ({
  isSubmitting,
  onFormSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TForgotPasswordValidator>({
    resolver: zodResolver(ForgotPasswordValidator),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="py-2">
        <Input
          className="w-full border rounded-md"
          placeholder="Enter your email"
          {...register("email")}
        />
        {errors?.email && (
          <p className="text-sm text-red-500 mt-3">{errors.email.message}</p>
        )}
      </div>

      <div className="py-2">
        <Button
          className="w-full border rounded-md"
          disabled={!isValid || isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Sending..." : "Send Reset Link"}
        </Button>
      </div>

      <div className="py-2 text-center">
        <Link href="/">Back to login</Link>
      </div>
    </form>
  );
};
