import { z } from 'zod';

export const ResetPasswordValidator = z.object({

    new_password: z.string().min(8, 'Password must be at least 8 characters'),
    confirm_password:z.string().min(1, 'Please confirm your password.')

    })
    .superRefine(({ new_password, confirm_password }, ctx) => {
        if (new_password !== confirm_password) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Passwords do not match',
        path: ['confirm_password'],
    });
}
    });
 
export type TResetPasswordValidator = z.infer<typeof ResetPasswordValidator>