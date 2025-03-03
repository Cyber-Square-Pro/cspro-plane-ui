import { z } from 'zod';

export const CreateProjectValidator = z.object({

    project_name: z.string().min(1),
    identifier: z.string() ,
    description: z.string().min(1),
    // workspace: z.string().min(1),
    // emojiAndIcon: z.string().min(1),
    network: z.number().min(1),
    // projectLead: z.string().min(1),
    // coverImage: z.string().min(1),
    // emoji: z.string().min(1),
    // identifier: z.string().min(1),
     
    });
 
export type TCreateProjectValidator = z.infer<typeof CreateProjectValidator>