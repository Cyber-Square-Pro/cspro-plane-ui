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
    <form onSubmit={handleSubmit(onFormSubmit)} className="bg-slate-200 rounded-md">
      <div className="p-2">
         
        <Input
          className="w-full border rounded-md"
          placeholder="Enter your email"
          {...register("email")}
        />
      </div>

      <div className="p-2">
        <Input
          className="w-full border rounded-md"
          placeholder="Enter your password"
          type="password"
          {...register("password")}
        />
      </div>
      <div className="p-2">
        <Button
          className="w-full border rounded-md bg-green-500 hover:bg-green-700"
          disabled={!isValid}
          type="submit"
        >
          Login
        </Button>
      </div>
      <div className="p-2">
        <Button
          className="w-full border rounded-md bg-slate-500 hover:bg-slate-700"
          disabled={!isValid}
          type="button"
        >
          Cancel
        </Button>
      </div>
      <div className="p-2 text-center">
        <span className="bg-slate-50"> Dont have an account?</span>
        <Link href="/sign-up"> Signup</Link>
      </div>
    </form>
  );
};
