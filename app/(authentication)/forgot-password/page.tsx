"use client";
import React, { useState } from "react";
import { ForgotPasswordForm } from "@/components/forms/account/forgot-password-form";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/auth.service";
import { Toast } from "@/lib/toast/toast";
import { ToastContainer } from "react-toastify";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ForgotPasswordPage = () => {
  const router = useRouter();
  const authService = new AuthService();
  const toast = new Toast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: { email: string }) => {
    setIsLoading(true);
    try {
      const response = await authService.forgotPassword(formData.email);
      if (response?.statusCode === 200) {
        toast.showToast("success", response?.message || "Password reset link sent to your email");
        setTimeout(() => {
          router.push("/sign-in");
        }, 3000);
      } else {
        toast.showToast("error", response?.message || "Failed to send reset link");
      }
    } catch (error: any) {
      toast.showToast("error", error?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-full">
        <Card className="max-w-md w-full mx-4">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Forgotten Password?</CardTitle>
            <CardDescription className="text-center">
              Enter your email address and we will send you a link to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ForgotPasswordForm onSubmit={handleSubmit} isLoading={isLoading} />
          </CardContent>
        </Card>
      </div>
      <ToastContainer />
    </>
  );
};

export default ForgotPasswordPage;