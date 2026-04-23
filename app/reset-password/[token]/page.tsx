// This page allows users to reset their password using a token from their email link.
"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { useRouter, useSearchParams } from "next/navigation";
import { Spinner } from "@/components/spinner";
import { Eye, EyeOff } from "lucide-react";
import { AuthService } from "@/services/auth.service";

// Main component for the reset password page
const ResetPasswordPage = () => {
  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // Router for navigation
  const router = useRouter();
  // Get token from URL (either from query or path)
  const params = useSearchParams();
  const token = params.get("token") || (typeof window !== "undefined" ? window.location.pathname.split("/").pop() : "");
  // Form state for password fields and UI feedback
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handles form submission for resetting password
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    // Validate fields
    if (!password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setIsLoading(true);
    try {
      // Call backend to reset password
      const authService = new AuthService();
      const response = await authService.resetPassword(token, password);
      setSuccess(response?.message || "Password reset successful! You can now sign in.");
      // Redirect to sign-in after success
      setTimeout(() => router.push("/"), 2000);
    } catch (err: any) {
      // Display backend password validation errors if present
      if (err?.errors && err.errors['new_password']) {
        setError(Array.isArray(err.errors['new_password']) ? err.errors['new_password'].join(' ') : err.errors['new_password']);
      } else if (err?.detail) {
        // Show a more user-friendly message for the 'detail' field
        setError(err.detail === 'Invalid token' ? 'The password reset link is invalid or has expired.' : err.detail);
      } else {
        setError(err?.message || "Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Render the reset password form UI
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-transparent pt-14">
        {/* Card container for the form */}
        <div className="mx-auto w-full max-w-md bg-gradient-to-br from-rose-900 via-slate-900 to-indigo-900 rounded-2xl shadow-xl shadow-slate-200/90 ring-2 ring-white/10 p-8">
          {/* Heading */}
          <div className="text-center mb-2 border-b border-white/35 pb-4">
            <h2 className="text-2xl font-semibold bg-clip-text tracking-tight text-white bg-gradient-to-r from-white to-slate-400">
              Reset Password
            </h2>
          </div>
          {/* Error and success messages */}
          {error && <div className="text-red-400 text-center mb-4">{error}</div>}
          {success && <div className="text-green-400 text-center mb-4">{success}</div>}
          {/* Password reset form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-white">
            {/* New password field with show/hide toggle */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-red-400 focus:ring-2 focus:ring-red-100 transition text-black pr-10"
                  placeholder="Enter new password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  disabled={isLoading}
                />
                {/* Eye icon to toggle password visibility */}
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 hover:text-red-400 transition-colors"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            {/* Confirm password field with show/hide toggle */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-red-400 focus:ring-2 focus:ring-red-100 transition text-black pr-10"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                />
                {/* Eye icon to toggle confirm password visibility */}
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 hover:text-red-400 transition-colors"
                  tabIndex={-1}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg shadow-lg shadow-red-900/20 hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-500 transition-all duration-300 active:scale-[0.98] disabled:opacity-50"
              disabled={isLoading || !password || !confirmPassword}
            >
              {isLoading ? <Spinner size="small" /> : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;