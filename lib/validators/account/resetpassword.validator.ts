import { z } from "zod";

export const ResetPasswordValidator = z
  .object({
    new_password: z.string().min(8, "Password should be minimum 8 characters long."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.new_password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type TResetPasswordValidator = z.infer<typeof ResetPasswordValidator>;
