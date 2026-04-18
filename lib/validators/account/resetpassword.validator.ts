import { z } from 'zod';

/*
  Author: Tysha Daniels on April 18, 2025
  Purpose: Zod validator for the reset-password form (new password + confirmation).
*/

export const ResetPasswordValidator = z
  .object({
    newPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .superRefine(({ newPassword, confirmPassword }, ctx) => {
    if (newPassword !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['confirmPassword'],
      });
    }
  });

export type TResetPasswordValidator = z.infer<typeof ResetPasswordValidator>;
