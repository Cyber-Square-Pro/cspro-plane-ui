import { z } from 'zod';

export const ForgotPasswordValidator = z.object({
    email: z.string().min(1, 'Email Required').email('Invalid Email Format'),
});

export type TForgotPasswordValidator = z.infer<typeof ForgotPasswordValidator>
