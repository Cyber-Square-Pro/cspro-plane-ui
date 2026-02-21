"use client";
import React, { useState } from "react";
import { SignInForm } from "@/components/forms/account/sign-in-form";
import { SignUpForm } from "@/components/forms/account/sign-up-form";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/auth.service";
import { IEmailPasswordFormValues } from "@/types/user";
import { FormHeading } from "@/components/form-elements/form-heading";
import FormDescription from "@/components/form-elements/form.description";
import { Toast } from "@/lib/toast/toast";
import { ToastContainer } from "react-toastify";


/*
  Author: Mohammed Rifad on April 12th, 2024
  Purpose: Renders sign-up page
  Props: None

*/


const SignUpPage = () => {
  const router = useRouter();
  const authService = new AuthService();
  const toast = new Toast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // State to track submission status


  const onFormSubmit = (formData: IEmailPasswordFormValues) => {

    setIsSubmitting(true)
    return authService.userSignUp(formData).then((response) => {
      console.log(response?.statusCode) 
      if (response?.statusCode == 201) {

        toast.showToast("success", response?.message);
        setTimeout(() => {
        router.push("/onboarding")
          
        }, 2000);
      }
      if (response?.statusCode == 409) {
        toast.showToast("error", response?.message);
        setIsSubmitting(false)
        
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-xl px-4 w-full">
        <FormHeading headingText="Sign Up On Plane" />
        <FormDescription descriptionText="Create an account and track your issues, projects and workspaces." />
        <div>
          <SignUpForm
           onFormSubmit={onFormSubmit} 
           isSubmitting={isSubmitting}
           />
        </div>
      </div>

      <ToastContainer />

    </div>
  );
};

export default SignUpPage;