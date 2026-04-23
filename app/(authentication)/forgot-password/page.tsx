"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { Spinner } from "@/components/spinner";
import { ForgotPasswordForm } from "@/components/forms/account/forgot-password-form";
import { AuthService } from "@/services/auth.service";

const ForgotPasswordPage = () => {
  const router = useRouter();
  const authService = new AuthService();
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onFormSubmit = async (data: { email: string }) => {
    setIsLoading(true);
    setError("");
    setMessage("");
    try {
      const response = await authService.forgotPassword(data.email);
      setEmailSent(true);
      setMessage(response?.message || "Check your inbox for the reset password link!");
    } catch (err: any) {
      setError(err?.message || "Invalid email address. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="mx-auto w-full max-w-md bg-gradient-to-br from-rose-900 via-slate-900 to-indigo-900 rounded-2xl shadow-xl shadow-slate-200/90 ring-2 ring-white/10 p-8">
        <div className="text-center mb-2 border-b border-white/35 pb-4">
          <h2 className="text-2xl font-semibold bg-clip-text tracking-tight text-white bg-gradient-to-r from-white to-slate-400">
            Forgot Password
          </h2>
        </div>
        <p className="text-center text-slate-200 mb-6">
          {emailSent ? message : "Enter your email to receive a password reset link."}
        </p>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {!emailSent && (
          <ForgotPasswordForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
        )}
        {isLoading && (
          <div className="flex justify-center mt-4">
            <Spinner size="large" />
          </div>
        )}
        {emailSent && (
          <button
            className="block mx-auto mt-6 text-sm text-blue-300 hover:text-red-400 hover:underline"
            onClick={() => setEmailSent(false)}
          >
            Didn&apos;t receive the email? Try again
          </button>
        )}
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-500">Remember your password?</span>
          <a href="/" className="ml-1 text-sm text-blue-600 hover:underline font-medium">Sign In</a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPasswordPage;
