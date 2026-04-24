"use client";
import React, { useState, useEffect, Suspense } from "react";
import { ResetPasswordForm } from "@/components/forms/account/reset-password-form";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthService } from "@/services/auth.service";
import { Toast } from "@/lib/toast/toast";
import { ToastContainer } from "react-toastify";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TResetPasswordValidator } from "@/lib/validators/account/resetpassword.validator";

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const authService = new AuthService();
  const toast = new Toast();
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [isValidToken, setIsValidToken] = useState(true);

  useEffect(() => {
    const tokenParam = searchParams.get("token");
    if (!tokenParam) {
      setIsValidToken(false);
      toast.showToast("error", "Invalid or missing reset token");
      setTimeout(() => {
        router.push("/forgot-password");
      }, 3000);
    } else {
      setToken(tokenParam);
    }
  }, [searchParams, router, toast]);

  const handleSubmit = async (formData: TResetPasswordValidator) => {
    if (!token) return;
    
    setIsLoading(true);
    try {
      const response = await authService.resetPassword(token, formData.newPassword);
      if (response?.statusCode === 200) {
        toast.showToast("success", response?.message || "Password reset successfully");
        setTimeout(() => {
          router.push("/sign-in");
        }, 3000);
      } else {
        toast.showToast("error", response?.message || "Failed to reset password");
      }
    } catch (error: any) {
      toast.showToast("error", error?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isValidToken) {
    return (
      <Card className="max-w-md w-full mx-4">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-red-600">Invalid Reset Link</CardTitle>
          <CardDescription className="text-center">
            This password reset link is invalid or has expired.
            Please request a new password reset link.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="max-w-md w-full mx-4">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Reset Password</CardTitle>
        <CardDescription className="text-center">
          Please enter your new password below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResetPasswordForm onSubmit={handleSubmit} isLoading={isLoading} token={token || undefined} />
      </CardContent>
    </Card>
  );
}

const ResetPasswordPage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <Suspense fallback={
          <Card className="max-w-md w-full mx-4">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Loading...</CardTitle>
            </CardHeader>
          </Card>
        }>
          <ResetPasswordContent />
        </Suspense>
      </div>
      <ToastContainer />
    </>
  );
};

export default ResetPasswordPage;