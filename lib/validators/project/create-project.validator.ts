import { z } from 'zod';

export const CreateProjectValidator = z.object({

    name: z.string().min(1,'Project name is required'),
    identifier: z.string().min(1,'Project identifier is required'),
    description: z.string().min(1,'Project description is required'),
    
    });
 
export type TCreateProjectValidator = z.infer<typeof CreateProjectValidator>