"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";  
import { ResetPasswordValidator, TResetPasswordValidator } 
from "@/lib/validators/account/resetpassword.validator";
import Link from "next/link";
import{ Eye, EyeOff } from 'lucide-react';

interface Props {
isSubmitting: boolean; 
  onFormSubmit: (formData: TResetPasswordValidator) => void;
  
}
export const ResetPasswordForm: React.FC<Props> = ({
    onFormSubmit,
    isSubmitting,
}) => {

    const [showPassword, setShowPassword] = useState(false);
    const {
register,
handleSubmit,
formState: { isValid, errors },
} = useForm<TResetPasswordValidator>({
resolver: zodResolver(ResetPasswordValidator),
mode: "onChange",

});

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="py-2">
         <div className="relative">
        <Input
          autoFocus 
          className="w-full border rounded-md"
          placeholder="Enter your new password"
          type={showPassword ? "text" : "password"}
          {...register("new_password")}
          disabled={isSubmitting}
        />
          <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
        </div>
        {errors.new_password && (
          <p className="text-red-500 text-sm mt-1">{errors.new_password.message}</p>
        )}
      
      </div>
         <div className="py-2">
         <div className="relative">
        <Input
          autoFocus 
          className="w-full border rounded-md"
          placeholder="Confirm your new password"
          type={showPassword ? "text" : "password"}
          {...register("confirm_password")}
          disabled={isSubmitting}
        />
         <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
        </div>

        {errors.confirm_password && (
          <p className="text-red-500 text-sm mt-1">{errors.confirm_password.message}</p>
        )}
      </div>

      <div className="py-2">
        <Button
          className="w-full border rounded-md"
          disabled={!isValid || isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Submitting..." : "Reset Password"}
        </Button>
        </div>
    </form>
  );
};
