import { z } from 'zod';

/*
  Author: Tysha Daniels on April 18, 2025
  Purpose: Zod validator for the forgot-password form (email only).
*/

export const ForgotPasswordValidator = z.object({
  email: z.string().email('Please enter a valid email address').min(1, 'Email is required'),
});

export type TForgotPasswordValidator = z.infer<typeof ForgotPasswordValidator>;
