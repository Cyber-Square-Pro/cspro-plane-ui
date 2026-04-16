"use client";

import React, { useState } from "react";
import { FormHeading } from "@/components/form-elements/form-heading";
import FormDescription from "@/components/form-elements/form.description";
import { ForgotPasswordForm } from "@/components/forms/account/forgot-password-form";
import { AuthService } from "@/services/auth-service";

const ForgotPasswordPage = () => {
  const authService = new AuthService();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);

  const onFormSubmit = async (data: { email: string }) => {
    setStatusMessage("");
    setStatusType(null);

    try {
      setIsSubmitting(true);

      await authService.requestPasswordReset(data.email);

      setStatusType("success");
      setStatusMessage(
        "If an account with that email exists, a reset link has been sent."
      );
    } catch (error) {
      setStatusType("error");
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="max-w-xl px-4 w-full">
          <FormHeading headingText="Forgot Password" />

          <FormDescription descriptionText="Enter your email and we’ll send you a password reset link." />

          <div>
            <ForgotPasswordForm
              isSubmitting={isSubmitting}
              statusMessage={statusMessage}
              statusType={statusType}
              onFormSubmit={onFormSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;