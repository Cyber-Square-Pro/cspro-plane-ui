"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  SignUpValidator,
  TSignUpValidator,
} from "@/lib/validators/account/signup.validator";
import { IEmailPasswordFormValues } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
{/*Library import for eye feature*/}
import { Eye, EyeOff } from "lucide-react";

interface Props {
  onFormSubmit: (formData: IEmailPasswordFormValues) => void;
  isSubmitting: boolean;
}

export const SignUpForm: React.FC<Props> = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TSignUpValidator>({
    resolver: zodResolver(SignUpValidator),
    mode: "onChange",
  });
  const { onFormSubmit, isSubmitting } = props;
  console.log(errors);
  return (
    <div className="mx-auto w-full max-w-md bg-gradient-to-br from-rose-900 via-slate-900 to-indigo-900 rounded-2xl shadow-xl shadow-slate-200/90 ring-2 ring-white/10 p-8">
      <div className="text-center mb-2 border-b border-white/35 pb-4">
        <h2 className="text-2xl font-semibold bg-clip-text tracking-tight text-white bg-gradient-to-r from-white to-slate-400">
          Cyber Square SignUp
        </h2>
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4 text-white">
        {/* Email */}
        <div>
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-200 mr-2">
              Email
            </label>
            {errors?.email && (
              <span className="text-xs text-red-400 font-medium">{errors.email?.message}</span>
            )}
          </div>
          <Input
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-red-400 focus:ring-2 focus:ring-red-100 transition text-black pr-10"
            placeholder="Enter your email"
            {...register("email")}
          />
        </div>
        {/* Password */}
        <div>
          <div className="flex items-center mb-1">
            <label className="block text-sm font-medium text-gray-200 mr-2">
              Password
            </label>
            {errors?.password && (
              <span className="text-xs text-red-400 font-medium">{errors.password?.message}</span>
            )}
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
        {/* Confirm Password */}
        <div>
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-200 mr-2">
              Confirm Password
            </label>
            {errors?.confirmPassword && (
              <span className="text-xs text-red-400 font-medium">{errors.confirmPassword?.message}</span>
            )}
          </div>
          <div className="relative">
            <Input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-red-400 focus:ring-2 focus:ring-red-100 transition text-black pr-10"
              placeholder="Re-type password"
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 hover:text-red-400 transition-colors"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        {/* Submit Button */}
        <div>
          <Button
            className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg shadow-lg shadow-red-900/20 hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-500 transition-all duration-300 active:scale-[0.98] disabled:opacity-50"
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </Button>
        </div>
        {/* Already have an account */}
        <div className="py-2 text-center">
          <span className="bg-slate-40 text-white">Already have an account?</span>
          <Link href="/" className="text-blue-400 hover:underline hover:text-blue-500 font-medium ml-1">Login</Link>
        </div>
      </form>
    </div>
  );
};
