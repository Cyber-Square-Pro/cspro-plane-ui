import { z } from "zod";

export const ForgotPasswordValidator = z.object({
  email: z.string().min(1, "Enter email").regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: "Invalid email format",
  }),
});

export type TForgotPasswordValidator = z.infer<typeof ForgotPasswordValidator>;
