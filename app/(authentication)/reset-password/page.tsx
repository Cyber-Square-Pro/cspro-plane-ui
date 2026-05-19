"use client";
import { ResetPasswordForm } from "@/components/forms/account/resetpassword";
import { Spinner } from "@/components/spinner";
import { useRouter, useSearchParams } from 'next/navigation';
import { ToastContainer } from "react-toastify";
import { Toast } from "@/lib/toast/toast";
import { AuthService } from "@/services/auth.service";
import { TResetPasswordValidator } from "@/lib/validators/account/resetpassword.validator";
import React, { Suspense, useState } from "react";
import Link from "next/link";
import  FormDescription  from "@/components/form-elements/form.description";
import { FormHeading } from "@/components/form-elements/form-heading";

const ResetPasswordContent = () => {
 const authService = new AuthService();
  const toast = new Toast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

const uid = searchParams.get("uid");
const token = searchParams.get("token");

  const onFormSubmit = async (formData: TResetPasswordValidator) => {

    if (!uid || !token) {
      toast.showToast("The link is invalid or has expired.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await authService.resetPassword( uid, token, formData.new_password );
      if(response?.status === 200){
        toast.showToast("success","Password reset successfully");
        setTimeout(() => router.push("/"), 2000);
      }else{
        toast.showToast("error", response?.message ?? "Failed to reset password");
      }
    } catch (error) {
      toast.showToast("error", "An error occurred while resetting the password");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
          <div className="flex justify-center items-center h-full">
                <div className="max-w-xl px-4 w-full">
                  <FormHeading headingText="Reset Your Password" />
    
                  <FormDescription descriptionText=
                    "Choose a new strong password for your account." />
                      <div>
                      <div className="text-sm text-gray-600">
                        {isSubmitting && (<div className="flex items-center space-x-2">
                          <Spinner size="medium"/>
                          </div> 
                        )}    
                        <div className={isSubmitting ? "pointer-events-none opacity-50" : ""}>
                            <ResetPasswordForm onFormSubmit={onFormSubmit}
                             isSubmitting={isSubmitting} />
                        </div>
                       </div>

                    <footer className="mt-4 justify-center text-center"> 
                    <span className="text-sm text-muted-foreground">
                    Back to
                    </span>
                    <Link href="/" className="ml-1 text-sm text-blue-500 hover:underline">
                    Sign In
                    </Link>    
                    </footer>
                  </div>
                </div>
              </div>
          );
    };
    
    const ResetPasswordPage = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-full">
            <Spinner size="large" />
          </div>
        }
      >
        <ResetPasswordContent />
      </Suspense>
      <ToastContainer />
    </>
  );
};
    export default ResetPasswordPage;