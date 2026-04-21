'use client';
import React, { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import { Spinner } from '@/components/spinner';
import { ResetPasswordForm } from '@/components/forms/account/resetpassword-form';
import { AuthService } from '@/services/auth.service';
import { Toast } from '@/lib/toast/toast';
import { TResetPasswordValidator } from '@/lib/validators/account/resetpassword.validator';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

const ResetPasswordContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const authService = new AuthService();
  const toast = new Toast();
  const [isLoading, setIsLoading] = useState(false);

  const uid = searchParams.get('uid') ?? '';
  const token = searchParams.get('token') ?? '';

  const onFormSubmit = async (formData: TResetPasswordValidator) => {
    if (!uid || !token) {
      toast.showToast('error', 'Invalid or expired reset link.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await authService.resetPassword(
        uid,
        token,
        formData.newPassword,
      );
      if (response?.statusCode === 200) {
        toast.showToast(
          'success',
          response?.message ?? 'Password reset successfully!',
        );
        setTimeout(() => router.push('/'), 2000);
      } else {
        toast.showToast(
          'error',
          response?.message ?? 'Reset failed. The link may have expired.',
        );
      }
    } catch {
      toast.showToast('error', 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <Card className="max-w-xl w-full mx-4">
        <CardHeader className="text-center">
          <CardTitle>Reset Your Password</CardTitle>
          <CardDescription>
            Choose a strong new password for your account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-card/80 z-10 rounded-md">
                <Spinner size="large" />
              </div>
            )}
            <div className={isLoading ? 'opacity-50 pointer-events-none' : ''}>
              <ResetPasswordForm
                onFormSubmit={onFormSubmit}
                isLoading={isLoading}
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="justify-center gap-1">
          <span className="text-sm text-muted-foreground">Back to</span>
          <Link href="/" className="text-sm text-primary hover:underline">
            Sign In
          </Link>
        </CardFooter>
      </Card>
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
