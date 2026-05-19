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
import{ Eye, EyeOff } from 'lucide-react';


interface Props {
  onFormSubmit: (formData: IEmailPasswordFormValues) => void;
}

export const SignInForm: React.FC<Props> = (props) => {
const [showPassword, setShowPassword] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<TSignInValidator>({
    resolver: zodResolver(SignInValidator),
  });
  const { onFormSubmit } = props;

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="py-2">
         
        <Input
          autoFocus 
          className="w-full border rounded-md"
          placeholder="Enter your email"
          {...register("email")}
        />
      </div>

      <div className="py-2">
        <div className="relative">
        <Input
          className="w-full border rounded-md pr-10"
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          {...register("password")}
        />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
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
        
        <div className="py-2">
        <Button
          className="w-full border rounded-md"
          disabled={!isValid}
          type="button"
          onClick={() => reset()}
        >
          Cancel
        </Button>
        </div>
      <div className="py-2 text-center">
        <span className="bg-slate-50"> Dont have an account?</span>
        <Link href="/sign-up"
        className="ml-1 font-medium text-blue-600 hover:text-blue-500 
        hover:underline transition-colors">Signup</Link>
      </div>
    </form>
  );
};
