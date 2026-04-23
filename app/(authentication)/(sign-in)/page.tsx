"use client";
import React, { useCallback, useState } from "react";
import { SignInForm } from "@/components/forms/account/sign-in-form";
import { IEmailPasswordFormValues, IUser, IUserSettings } from "@/types/user";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/auth.service";
import { Toast } from "@/lib/toast/toast";
import { ToastContainer } from "react-toastify";
import { useMobxStore } from "@/store/store.provider";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Spinner } from "@/components/spinner";

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
      console.log("is onboarders", user.is_onboarded);
      if (!user.is_onboarded) {
        console.log("redirecting...");
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
    [router],
  );

  const mutateUserInfo = useCallback(() => {
    fetchCurrentUser().then((user) => {
      handleLoginRedirection(user);
    });
  }, [fetchCurrentUser, handleLoginRedirection]);

  const onFormSubmit = async (formData: IEmailPasswordFormValues) => {
    setLoading(true);

    return authService
      .userSignIn(formData)
      .then((response) => {
        if (response?.statusCode == 200) {
          toast.showToast("success", response?.message);
          setLoading(true);
          mutateUserInfo();
        } else {
          setLoading(false);
          toast.showToast("error", response?.message);
        }
      })
      .catch(() => {
        setLoading(false);
        toast.showToast("error", "Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <div className="flex justify-center items-center h-full">
        <Card className="max-w-xl w-full mx-4">
          <CardHeader className="text-center">
            <CardTitle>Welcome back to CS Pro!</CardTitle>
            <CardDescription>
              Start managing your projects, issues and workspaces once more.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-card/80 z-10 rounded-md">
                  <Spinner size="large" />
                </div>
              )}
              <div
                className={isLoading ? "opacity-50 pointer-events-none" : ""}
              >
                <SignInForm onFormSubmit={onFormSubmit} />
              </div>
            </div>
          </CardContent>

          <CardFooter className="justify-center gap-1">
            <span className="text-sm text-muted-foreground">
              Don&apos;t have an account?
            </span>
            <Link
              href="/sign-up"
              className="text-sm text-primary hover:underline"
            >
              Signup
            </Link>
          </CardFooter>
        </Card>
        <ToastContainer />
      </div>
    </>
  );
};

export default SignInPage;
