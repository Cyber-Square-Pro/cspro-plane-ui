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
import { useRouter } from "next/navigation";

interface Props {
  onFormSubmit: (formData: IEmailPasswordFormValues) => void;
}

/*
  Author: Tysha Daniels
  Purpose: Added Cancel button to sign-in form (PLN-102)
*/

export const SignInForm: React.FC<Props> = (props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<TSignInValidator>({
    resolver: zodResolver(SignInValidator),
  });
  const { onFormSubmit } = props;

  const handleCancel = () => {
    router.push("/");
  };

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
          type="password"
          {...register("password")}
        />
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
          variant="outline"
          type="button"
          onClick={handleCancel}
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
