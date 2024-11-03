
import { z } from 'zod';

export const AddTeamValidator = z.object({
  teamName: z.string().min(1, "Team Name is required"),
  description: z.string().max(200, "Description must be 200 characters or less").min(1, "Description must be 200 characters or less"),
});

export type TAddTeamValidator = z.infer<typeof AddTeamValidator>;
