"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SignInValidator,
  TSignInValidator,
} from "@/lib/validators/account/signin.validator";
import { IEmailPasswordFormValues } from "@/types/user";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  onFormSubmit: (formData: IEmailPasswordFormValues) => void;
}

export const SignInForm: React.FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<TSignInValidator>({
    resolver: zodResolver(SignInValidator),
  });
  const { onFormSubmit } = props;

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5">
      {/* Email Input - Made larger, more rounded and increased padding */}
      <div>
        <Input
          className="w-full rounded-full py-6 px-5 text-base border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          placeholder="Email"
          {...register("email")}
        />
      </div>

      {/* Password Input - Made larger, more rounded and increased padding */}
      <div>
        <Input
          className="w-full rounded-full py-6 px-5 text-base border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          placeholder="Password"
          type="password"
          {...register("password")}
        />
      </div>

      {/* Added Forgot Password Link */}
      <div className="text-right">
        <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
          Forgot your password?
        </Link>
      </div>

      {/* Login Button - Made larger and more rounded */}
      <div>
        <Button
          className="w-full rounded-full py-6 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          disabled={!isValid}
          type="submit"
        >
          Login
        </Button>
      </div>

      {/* OR Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>

      {/* Sign Up Link - Repositioned below the OR divider*/}
      <div className="text-center text-sm">
        <span className="text-gray-600">Dont have an account?</span>{" "}
        <Link href="/sign-up" className="text-blue-600 hover:underline font-medium">
          Sign up
        </Link>
      </div>
    </form>
  );
};