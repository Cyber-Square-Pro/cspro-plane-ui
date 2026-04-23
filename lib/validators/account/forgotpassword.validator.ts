import { z } from "zod";

export const ForgotPasswordValidator = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
});

export type TForgotPasswordValidator = z.infer<typeof ForgotPasswordValidator>;
