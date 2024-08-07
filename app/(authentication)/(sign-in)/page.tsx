"use client";
import React, { useCallback, useState } from "react";
import { SignInForm } from "@/components/forms/account/sign-in-form";
import { IEmailPasswordFormValues, IUser, IUserSettings } from "@/types/user";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/auth.service";
import { Toast } from "@/lib/toast/toast";
import { ToastContainer } from "react-toastify";
import { useMobxStore } from "@/store/store.provider";
import { Spinner } from "@/components/spinner";
import { FormHeading } from "@/components/form-elements/form-heading";
import FormDescription from "@/components/form-elements/form.description";
 
/*
  Author: Mohammed Rifad on April 12th, 2024
  Purpose: Renders sign-in page
  Props: None

*/

const SignInPage = () => {
  const router = useRouter();
  const authService = new AuthService();
  const toast = new Toast();
  const [isLoading, setLoading] = useState(false);

  const {
    user: { fetchCurrentUser, fetchCurrentUserSettings },
  } = useMobxStore();

  const handleLoginRedirection = useCallback(
   
    (user: IUser) => {
       console.log('is onboarders', user.is_onboarded)
      if (!user.is_onboarded) {
        console.log('redirecting...')
        router.push("/onboarding");
        return;
      }

      fetchCurrentUserSettings().then((userSettings: IUserSettings) => {
        console.log("sett", userSettings);
        const workspaceSlug =
          userSettings?.workspace?.last_workspace_slug ||
          userSettings?.workspace?.fallback_workspace_slug;
        if (workspaceSlug) router.push(`/workspaces/${workspaceSlug}`);
      });
    },
    [router]
  );

  const mutateUserInfo = useCallback(() => {

    fetchCurrentUser().then((user) => {
      handleLoginRedirection(user);
    });
  }, [fetchCurrentUser, handleLoginRedirection]);

    const onFormSubmit = async (formData: IEmailPasswordFormValues) => {


      return authService.userSignIn(formData).then((response) => {
        if (response?.statusCode == 200) {
          toast.showToast("success", response?.message);
          setLoading(true);
          mutateUserInfo();
        } else {
          setLoading(false);
          toast.showToast("error", response?.message);
        }
      });

      // const response = await fetch("api/auth/sign-in", {
      //   method: "POST",
      //   body: JSON.stringify(formData),
      // });

      // const responseData = await response.json();

      // if (responseData.statusCode == 200) {
      //   console.log('success')
      //   setLoading(true);
      //   mutateUserInfo();
      //   setTimeout(() => {
      //     router.push("/onboarding");
      //   }, 1000);
      // }
     
      // else {
      //   setLoading(false);
      //   toast.showToast("error", responseData.message);
      // }
    };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <Spinner size="large" />
        </div>
      ) : (
        <>
          <div className="flex justify-center items-center h-full">
            <div className="max-w-xl px-4 w-full">
              <FormHeading headingText="Welcome Back, let's get on board." />

              <FormDescription descriptionText="Get back to your issues, projects and workspaces." />

              <div>
                <SignInForm onFormSubmit={onFormSubmit} />
              </div>
            </div>
            <ToastContainer />
          </div>
        </>
      )}
    </>
  );
};

export default SignInPage;
