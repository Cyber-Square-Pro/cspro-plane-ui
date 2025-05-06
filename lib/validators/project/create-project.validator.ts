import { z } from 'zod';

export const CreateProjectValidator = z.object({

    name: z.string().min(1),
    identifier: z.string().min(1),
    description: z.string().min(1),
    
     
    });
 
export type TCreateProjectValidator = z.infer<typeof CreateProjectValidator>