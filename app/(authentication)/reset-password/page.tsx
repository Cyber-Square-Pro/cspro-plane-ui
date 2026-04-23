"use client";

import { FormHeading } from "@/components/form-elements/form-heading";
import FormDescription from "@/components/form-elements/form.description";
import { ResetPasswordForm } from "@/components/forms/account/reset-password-form";
import { Toast } from "@/lib/toast/toast";
import { TResetPasswordValidator } from "@/lib/validators/account/resetpassword.validator";
import { AuthService } from "@/services/auth.service";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";

const ResetPasswordContent = () => {
  const authService = new AuthService();
  const router = useRouter();
  const searchParams = useSearchParams();
  const toast = new Toast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const uid = searchParams.get("uid") || "";
  const token = searchParams.get("token") || "";
  const hasResetLink = Boolean(uid && token);

  const onFormSubmit = async (formData: TResetPasswordValidator) => {
    if (!hasResetLink) {
      toast.showToast("error", "Invalid password reset link.");
      return;
    }

    setIsSubmitting(true);

    return authService
      .resetPassword({
        ...formData,
        uid,
        token,
      })
      .then((response) => {
        if (response?.statusCode === 200) {
          toast.showToast("success", response?.message);
          setTimeout(() => {
            router.push("/");
          }, 2000);
          return;
        }

        toast.showToast("error", response?.message);
      })
      .catch((error) => {
        toast.showToast("error", error?.message || "Unable to reset password.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-xl px-4 w-full">
        <FormHeading headingText="Reset Password" />
        <FormDescription descriptionText="Choose a new password for your account." />
        {hasResetLink ? (
          <ResetPasswordForm
            isSubmitting={isSubmitting}
            onFormSubmit={onFormSubmit}
          />
        ) : (
          <p className="text-center text-sm text-red-500">
            This password reset link is missing required information.
          </p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

const ResetPasswordPage = () => {
  return (
    <Suspense fallback={null}>
      <ResetPasswordContent />
    </Suspense>
  );
};

export default ResetPasswordPage;
