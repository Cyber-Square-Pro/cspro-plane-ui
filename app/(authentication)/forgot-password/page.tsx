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
import { AuthService } from "@/services/auth-service"; // ✅ keep consistent
import { Toast } from "@/lib/toast/toast";

const ForgotPasswordPage = () => {
  const router = useRouter();
  const authService = new AuthService();
  const toast = new Toast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const onFormSubmit = async (data: { email: string }) => {
    setIsSubmitting(true);

    try {
      await authService.requestPasswordReset(data.email);

      setEmailSent(true);
      toast.showToast(
        "success",
        "If an account exists, a reset link has been sent."
      );
    } catch {
      toast.showToast("error", "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
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
                : "Enter your email and we'll send you a reset link."}
            </CardDescription>
          </CardHeader>

          {!emailSent && (
            <CardContent>
              <div className="relative">
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center bg-card/80 z-10 rounded-md">
                    <Spinner size="large" />
                  </div>
                )}

                <div
                  className={
                    isSubmitting ? "opacity-50 pointer-events-none" : ""
                  }
                >
                  <ForgotPasswordForm
                    isSubmitting={isSubmitting}
                    onFormSubmit={onFormSubmit}
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
            <Link href="/sign-in" className="text-sm text-primary hover:underline">
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