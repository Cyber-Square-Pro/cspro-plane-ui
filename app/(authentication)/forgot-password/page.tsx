"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Spinner } from "@/components/spinner";
import { ForgotPasswordForm } from "@/components/forms/account/forgot-password-form";
import { AuthService } from "@/services/auth.service";
import { Toast } from "@/lib/toast/toast";
import { TForgotPasswordValidator } from "@/lib/validators/account/forgotpassword.validator";

/*
  Author: Tysha Daniels on April 18, 2025
  Purpose: Renders the Forgot Password page.
           The user enters their email; if found, a reset link is emailed to them.
  Props: None
*/

const ForgotPasswordPage = () => {
  const router = useRouter();
  const authService = new AuthService();
  const toast = new Toast();
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const onFormSubmit = async (formData: TForgotPasswordValidator) => {
    setIsLoading(true);
    try {
      const response = await authService.forgotPassword(formData.email);
      if (response?.statusCode === 200) {
        setEmailSent(true);
        toast.showToast("success", response?.message ?? "Reset link sent! Check your inbox.");
      } else {
        toast.showToast("error", response?.message ?? "Something went wrong.");
      }
    } catch {
      toast.showToast("error", "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-full">
        <Card className="max-w-xl w-full mx-4">
          <CardHeader className="text-center">
            <CardTitle>Forgot Your Password?</CardTitle>
            <CardDescription>
              {emailSent
                ? "We've sent a password reset link to your email. Please check your inbox."
                : "No worries! Enter your email and we'll send you a reset link."}
            </CardDescription>
          </CardHeader>

          {!emailSent && (
            <CardContent>
              <div className="relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-card/80 z-10 rounded-md">
                    <Spinner size="large" />
                  </div>
                )}
                <div className={isLoading ? "opacity-50 pointer-events-none" : ""}>
                  <ForgotPasswordForm
                    onFormSubmit={onFormSubmit}
                    isLoading={isLoading}
                  />
                </div>
              </div>
            </CardContent>
          )}

          {emailSent && (
            <CardContent className="flex justify-center">
              <button
                className="text-sm text-primary hover:underline"
                onClick={() => setEmailSent(false)}
              >
                Didn&apos;t receive it? Try again
              </button>
            </CardContent>
          )}

          <CardFooter className="justify-center gap-1">
            <span className="text-sm text-muted-foreground">
              Remember your password?
            </span>
            <Link href="/" className="text-sm text-primary hover:underline">
              Sign In
            </Link>
          </CardFooter>
        </Card>
      </div>
      <ToastContainer />
    </>
  );
};

export default ForgotPasswordPage;
