import { z } from 'zod';

export const ForgetPasswordValidator = z.object({

    email: z.string().email("Please enter your account email").min(1, 'Email Required'),
     
    });
 
export type TForgetPasswordValidator = z.infer<typeof ForgetPasswordValidator>