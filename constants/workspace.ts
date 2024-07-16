import { useMobxStore } from '@/store/store.provider';
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
    { icon: Layers3, title: "Backlogs" },
    { icon: Contrast, title: "Sprints" },
    { icon: Dice4, title: "Modules" },
    { icon: FileVideo, title: "Views" },
    { icon: FileText, title: "Pages" },
    { icon: Settings, title: "Settings" }
  ];


  export const WORKSPACESETTINGS_LINKS = [

 
    {
      key: "general",
      label: 'General',
      href: '/workspaces/[workspaceSlug]/settings'
    
    },
    {
      key: "member",
      label: 'Members',
      href: '/workspaces/[workspaceSlug]/settings/members'
    
    },
    {
      key: "exports",
      label: 'Exports', 
      href: '/workspaces/projects/settings/exports' 
   
    },
  ]