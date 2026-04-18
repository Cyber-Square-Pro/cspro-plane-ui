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
          <Input
            className="w-full border rounded-md"
            placeholder="Enter your password"
            type="password"
            {...register("password")}
          />
        </div>
        <div>
          <Button
            className="w-full border rounded-md"
            disabled={!isValid}
            type="submit"
          >
            Login
          </Button>
        </div>
      </div>
    </form>
  );
};
