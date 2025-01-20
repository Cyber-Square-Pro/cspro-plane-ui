import { useMobxStore } from '@/store/store.provider';
import { IProjectItem } from '@/types/workspace';
import { Layers3, Contrast, Dice4, FileVideo, FileText, Settings , BarChartHorizontal} from 'lucide-react';




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

    { icon: Layers3, title: "Backlogs", href: "/workspaces/[workspaceSlug]/projects/testproject/backlog"},
    { icon: Contrast, title: "Sprints", href: "/sprints"},
    { icon: Dice4, title: "Modules", href: "/modules"},
    { icon: FileVideo, title: "Views", href: "/views"},
    { icon: FileText, title: "Pages", href: "/pages"},
    { icon: Settings, title: "Settings", href: "/settings"}
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