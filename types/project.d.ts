import type { IUserLite, IWorkspace, IWorkspaceLite, IUserMemberLite } from ".";


export type TUserProjectRole = 5 | 10 | 15 | 20;

export interface IProject {
     
    project_name: string;
    description: string;
    created_date: string;
    identifier: string;
    cover_image:File;
    status: boolean;

  }

export interface IProjectMemberLite {
    id: string;
    member__avatar: string;
    member__display_name: string;
    member_id: string;
  }

export interface ICreateProjectForm {
    project_name: string;
    identifier: string;
    description: string;
    // workspace: string;
    // emojiAndIcon: string;
    network: number;
    cover_image?: File;
    // project_lead_member: IWorkspaceMember;
    // projectLead: string;
    // coverImage: string;
    // emoji: string;
   }
