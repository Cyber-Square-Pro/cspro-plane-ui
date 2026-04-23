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
{/*Library import for eye feature*/}
import { Eye, EyeOff } from "lucide-react";

interface Props {
  onFormSubmit: (formData: IEmailPasswordFormValues) => void;
}

export const SignInForm: React.FC<Props> = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<TSignInValidator>({
    resolver: zodResolver(SignInValidator),
  });
  const { onFormSubmit } = props;

  return (
    <div className="mx-auto w-full max-w-md bg-gradient-to-br from-rose-900 via-slate-900 to-indigo-900 rounded-2xl shadow-xl shadow-slate-200/90 ring-2 ring-white/10 p-8">
      <div className="text-center mb-2 border-b border-white/35 pb-4">
        <h2 className="text-2xl font-semibold bg-clip-text tracking-tight text-white bg-gradient-to-r from-white to-slate-400">
          Cyber Square Login
        </h2>
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4 text-white">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Email
          </label>
          <Input
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-red-400 focus:ring-2 focus:ring-red-100 transition text-black pr-10"
            placeholder="Enter your email"
            {...register("email")}
          />
        </div>
        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-sm font-medium text-gray-200">
              Password
            </label>
          </div>
          {/* Show/Hide Password */}
          <div className="relative">
            <Input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-red-400 focus:ring-2 focus:ring-red-100 transition text-black pr-10"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 hover:text-red-400 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        {/* Forgot Password */}
        <div className="flex items-center justify-center py-1">
          <Link href="/forgot-password" className="text-sm text-blue-400 hover:text-red-400 hover:underline">
            Forgot password?
          </Link>
        </div>
        {/* Submit Button */}
        <div>
          <Button
            className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg shadow-lg shadow-red-900/20 hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-500 transition-all duration-300 active:scale-[0.98] disabled:opacity-50"
            disabled={!isValid}
            type="submit"
          >
            Login
          </Button>
        </div>
        {/* Sign Up */}
        <div className="py-2 text-center">
          <span className="bg-slate-40 text-white">Don't have an account?</span>
          <Link href="/sign-up" className="text-blue-400 hover:underline hover:text-blue-500 font-medium ml-1">Sign up</Link>
        </div>
      </form>
    </div>
  );
};
