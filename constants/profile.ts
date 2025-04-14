import { Activity, CircleUser, KeyRound, Settings2 , Plus , UserPlus } from "lucide-react";

  // Author: Muhammed Adnan on June 2nd, 2024
export const USER_ROLES = [
  { value:"Engineering/Development", label: "Engineering/Development" },
  { value:"Freelance", label: "Freelance" },
  { value:"Student", label: "Student" },
];

  // Author: Muhammed Adnan on June 2nd, 2024
export const PROFILE_ACTION_LINKS = [
  {
    key: "profile",
    label: "Profile",
    href: '/profile',
    Icon: CircleUser,
  },
  {
    key: "change-password",
    label: "Change password",
    href: '/profile/security',
    Icon: KeyRound,
  },
  {
    key: "activity",
    label: "Activity",
    href: '/profile/activity',
    Icon: Activity,
  },
  {
    key: "preferences",
    label: "Preferences",
    href: '/profile/preferences/theme',
    Icon: Settings2,
  },
];

// Author: Muhammed Adnan on June 2nd, 2024
export const WORKSPACE_ACTION_LINKS = [
  {
    key: "create-workspace",
    Icon: Plus,
    label: "Create workspace",
    href: "/create-workspace",
  },
  {
    key: "invitations",
    Icon: UserPlus,
    label: "Invitations",
    href: "/invitations",
  },
];
