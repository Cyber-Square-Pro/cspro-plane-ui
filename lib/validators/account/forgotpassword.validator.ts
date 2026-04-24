import { z } from 'zod';

export const ForgotPasswordValidator = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export type TForgotPasswordValidator = z.infer<typeof ForgotPasswordValidator>;