import { LucideIcon } from "lucide-react";
import { FC } from "react";

// Created by: Mohammed Rifad on April 19th, 2024

export interface IWorkspace {
    readonly id: string;
    readonly owner: IUser;
    readonly created_at: Date;
    readonly updated_at: Date;
    name: string;
    url: string;
    logo: string | null;
    slug: string;
    readonly total_members: number;
    readonly slug: string;
    readonly created_by: string;
    readonly updated_by: string;
    organization_size: string;
    total_issues: number;
  }
// Created by: Muhammed Adnan on May 23rd, 2024
export interface IProjectItem {
  icon: LucideIcon; 
  title: string;
};

// Author: Muhammed Adnan on June 1st, 2024
export interface ISidebarItem {
  key: string;
  Icon: LucideIcon;
  label: string;
  href: string;
}
