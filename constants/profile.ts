import { Activity, CircleUser, KeyRound, Settings2 , Plus , UserPlus } from "lucide-react";

  // Author: Muhammed Adnan on June 2nd, 2024
export const USER_ROLES = [
  { value:"Product / Project Manager", label: "Product / Project Manager" },
  { value:"Development / Engineering", label: "Development / Engineering" },
  { value:"Founder / Executive", label: "Founder / Executive" },
  { value:"Freelancer / Consultant", label: "Freelancer / Consultant" },
  { value:"Marketing / Growth", label: "Marketing / Growth" },
  { value:"Sales / Business Development", label: "Sales / Business Development" },
  { value:"Support / Operations", label: "Support / Operations" },
  { value:"Student / Professor", label: "Student / Professor" },
  { value:"Human Resources", label: "Human Resources" },
  { value:"Other", label: "Other" }
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
    href: '/profile/change-password',
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
