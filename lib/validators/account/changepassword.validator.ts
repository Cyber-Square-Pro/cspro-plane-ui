import { z } from 'zod';

export const ChangePasswordValidator = z.object({
  currentPassword: z.string().min(1, 'Current Password Required'),
  newPassword: z.string().min(6, 'New Password must be at least 6 characters long'),
  confirmPassword: z.string()
}).superRefine(({ newPassword, confirmPassword }, ctx) => {
  if (newPassword !== confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Passwords do not match',
      path: ['confirmPassword']
    });
  }
});

export type TChangePasswordValidator = z.infer<typeof ChangePasswordValidator>;
