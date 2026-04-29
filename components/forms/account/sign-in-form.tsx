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
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

interface Props {
  onFormSubmit: (formData: IEmailPasswordFormValues) => void;
}

export const SignInForm: React.FC<Props> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<TSignInValidator>({
    resolver: zodResolver(SignInValidator),
  });
  const { onFormSubmit } = props;

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="space-y-4">
        <div>
          <Input
            className="w-full border rounded-md"
            placeholder="Enter your email"
            {...register("email")}
          />
        </div>
        <div>
          <div className="relative">
            <Input
              className="w-full border rounded-md"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <div className="py-1 text-right">
            <Link
              href="/forgot-password"
              className="text-xs text-gray-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <div className="py-2">
          <Button
            className="w-full border rounded-md"
            disabled={!isValid}
            type="submit"
          >
            Login
          </Button>
        </div>

        <div className="py-2 text-center">
          <span className="bg-slate-50"> Dont have an account?</span>
          <Link href="/sign-up"> Signup</Link>
        </div>
      </div>
    </form>
  );
};
