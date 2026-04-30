"use client";
import { ForgetPasswordForm } from "@/components/forms/account/forgetpassword";
import { Spinner } from "@/components/spinner";
import { ToastContainer } from "react-toastify";
import { Toast } from "@/lib/toast/toast";
import { AuthService } from "@/services/auth.service";
import { TForgetPasswordValidator } from "@/lib/validators/account/forgetpassword.validator";
import React, { useState } from "react";
import Link from "next/link";
import  FormDescription  from "@/components/form-elements/form.description";
import { FormHeading } from "@/components/form-elements/form-heading";

const ForgetPasswordPage = () => {
 const authService = new AuthService();
  const toast = new Toast();
  const [isLoading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const onFormSubmit = async (formData: TForgetPasswordValidator) => {
    setLoading(true);
    try {
      const response = await authService.forgetPassword(formData.email);
      if (response?.statusCode === 200) {
        setEmailSent(true);
        toast.showToast(response?.message || "Password reset link sent to your email.", "success");
      } else {
        toast.showToast(response?.message || "Failed to send password reset link.", "error");
      }
    } catch (error) {
      toast.showToast("An error occurred while sending the password reset link.", "error");
    } finally {
      setLoading(false);
    }
};

  return (
     <>
          <div className="flex justify-center items-center h-full">
                <div className="max-w-xl px-4 w-full">
                  <FormHeading headingText="Forgot Your Password?" />
    
                  <FormDescription descriptionText=
                     {emailSent ?
                     "A Password reset link has been sent to your email." : 
                     "Enter your email to receive a password reset link."} />
                      <div>
                    
                    {!emailSent && (
                         <div className="text-sm text-gray-600">
                        {isLoading && (<div className="flex items-center space-x-2">
                          <Spinner size="medium"/>
                          </div> 
                        )}    
                        <div className={isLoading ? "pointer-events-none opacity-50" : ""}>
                            <ForgetPasswordForm onFormSubmit={onFormSubmit}
                             isLoading={isLoading} />
                        </div>
                       </div>
                    )}

                    {emailSent && (
                         <div className="text-sm text-gray-600 flex justify-center" >
                        <button className="text-sm text-blue-500 hover:underline" 
                        onClick={()=> setEmailSent(false)}>
                        
                        Didn&apos;t receive the email? Please Try Again.   

                        </button>    
                        </div>
                       )}

                    <footer className="mt-4 justify-center text-center"> 
                    <span className="text-sm text-muted-foreground">
                    Remember your password?
                    </span>
                    <Link href="/" className="ml-1 text-sm text-blue-500 hover:underline">
                    Sign In
                    </Link>    
                    </footer>
                  </div>
                </div>
                <ToastContainer />
              </div>
            </>
          );
    };
    
    export default ForgetPasswordPage;