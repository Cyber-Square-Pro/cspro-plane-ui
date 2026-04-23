"use client";

import { FormHeading } from "@/components/form-elements/form-heading";
import FormDescription from "@/components/form-elements/form.description";
import { ForgotPasswordForm } from "@/components/forms/account/forgot-password-form";
import { Toast } from "@/lib/toast/toast";
import { TForgotPasswordValidator } from "@/lib/validators/account/forgotpassword.validator";
import { AuthService } from "@/services/auth.service";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const ForgotPasswordPage = () => {
  const authService = new AuthService();
  const toast = new Toast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFormSubmit = async (formData: TForgotPasswordValidator) => {
    setIsSubmitting(true);

    return authService
      .forgotPassword(formData)
      .then((response) => {
        toast.showToast("success", response?.message);
      })
      .catch((error) => {
        toast.showToast("error", error?.message || "Unable to send reset link.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-xl px-4 w-full">
        <FormHeading headingText="Forgot Password" />
        <FormDescription descriptionText="Enter your email and we will send you a password reset link." />
        <ForgotPasswordForm
          isSubmitting={isSubmitting}
          onFormSubmit={onFormSubmit}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPasswordPage;
