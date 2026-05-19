"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";  
import { ForgetPasswordValidator, TForgetPasswordValidator } 
from "@/lib/validators/account/forgetpassword.validator";

interface Props {
  onFormSubmit: (formData: TForgetPasswordValidator) => void;
  isLoading?: boolean;
}
export const ForgetPasswordForm: React.FC<Props> = ({
    onFormSubmit,
    isLoading= false,
}) => {

    const {
register,
handleSubmit,
formState: { isValid, errors },
} = useForm<TForgetPasswordValidator>({
resolver: zodResolver(ForgetPasswordValidator),
mode: "onChange",

});

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="py-2">
         
        <Input
          autoFocus 
          className="w-full border rounded-md"
          placeholder="Enter your email"
          {...register("email")}
          disabled={isLoading}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      

      <div className="py-2">
        <Button
          className="w-full border rounded-md"
          disabled={!isValid || isLoading}
          type="submit"
        >
          {isLoading ? "Submitting..." : "Send Reset Link"}
        </Button>
        </div>

    </form>
  );
};
