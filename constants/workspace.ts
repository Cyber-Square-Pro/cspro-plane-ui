import { IProjectItem } from '@/types/workspace';
import { Layers3, Contrast, Dice4, FileVideo, FileText, Settings } from 'lucide-react';


export const RESTRICTED_URLS = [
  "api",
  "installations",
  "404",
  "create-workspace",
  "error",
  "invitations",
  "magic-sign-in",
  "onboarding",
  "profile",
  "reset-password",
  "sign-up",
  "spaces",
  "workspace-member-invitation",
]

// Created by: Muhammed Adnan on May 23rd, 2024
  export const projectItems: IProjectItem[] = [
    { icon: Layers3, title: "Issues" },
    { icon: Contrast, title: "Sprints" },
    { icon: Dice4, title: "Modules" },
    { icon: FileVideo, title: "Views" },
    { icon: FileText, title: "Pages" },
    { icon: Settings, title: "Settings" }
  ];

  

  export const ORG_SIZE = [
    { value:"1 - 10", label: "1 - 10" },
    { value:"10 - 49", label: "10 - 49" },
    { value:"50 - 249", label: "50 - 249" },
    { value:"250+", label: "250+" },
  ];
