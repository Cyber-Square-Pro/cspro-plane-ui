// ForgotPasswordForm is a reusable form for requesting a password reset link.
import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  // Function to handle form submission
  onFormSubmit: (data: { email: string }) => void;
  // Whether the form is loading
  isLoading?: boolean;
}

// Main component for the forgot password form
export const ForgotPasswordForm: React.FC<Props> = ({ onFormSubmit, isLoading }) => {
  // Setup react-hook-form for email input
  const { register, handleSubmit, formState: { isValid } } = useForm<{ email: string }>({ mode: "onChange" });

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
      {/* Email input field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
          placeholder="Enter your email"
          {...register("email", { required: true })}
          disabled={isLoading}
        />
      </div>
      {/* Submit button for sending reset link */}
      <button
        type="submit"
        className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg shadow-lg shadow-red-900/20 hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-500 transition-all duration-300 active:scale-[0.98] disabled:opacity-50"
        disabled={!isValid || isLoading}
      >
        {isLoading ? "Sending..." : "Send Reset Link"}
      </button>
    </form>
  );
};