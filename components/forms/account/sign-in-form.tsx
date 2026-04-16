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
  const [showPassword, setShowPassword] = React.useState(false); //added state to toggle password visibility
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<TSignInValidator>({
    resolver: zodResolver(SignInValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { onFormSubmit } = props;

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="py-2">
        <Input
          className="w-full border rounded-md"
          placeholder="Enter your email"
          {...register("email")}
        />
      </div>

      <div className="py-2">
        <Input
          className="w-full border rounded-md"
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          {...register("password")}
        />
        <div className="mt-2 flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            <span>Show Password</span>
          </label>

          <Link
            href="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
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
        <Button
          className="w-full border rounded-md"
          type="button"
          onClick={() =>
            reset({
              email: "",
              password: "",
            })
          }
        >
          Cancel
        </Button>
      </div>
      <div className="py-2 text-center">
        <span className="bg-slate-50"> Dont have an account?</span>
        <Link href="/sign-up"> Signup</Link>
      </div>
    </form>
  );
};
