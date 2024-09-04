import { z } from 'zod';

export const AddBacklogValidator = z.object({
    title: z.string().min(1, "Title is required"),
    assignee: z.string().min(1, "Assignee is required"),
    status: z.string().min(1, "Status is required"),
    description: z.string().min(1, "Description is required"),
    subtasks: z.array(z.string()).optional(), 
});

export type TAddBacklogValidator = z.infer<typeof AddBacklogValidator>;
