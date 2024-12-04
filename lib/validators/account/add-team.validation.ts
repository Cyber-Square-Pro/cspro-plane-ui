import { z } from 'zod';

export const AddTeamValidator = z.object({
  team_name: z.string().min(1),
  team_description: z.string().max(200).min(1),
});

export type TAddTeamValidator = z.infer<typeof AddTeamValidator>;
