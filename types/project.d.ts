import type { IUserLite, IWorkspace, IWorkspaceLite, IUserMemberLite } from ".";


export type TUserProjectRole = 5 | 10 | 15 | 20;

export interface IProject {
    archive_in: number;
    close_in: number;
    created_at: Date;
    created_by: string;
    cover_image: string | null;
    cycle_view: boolean;
    issue_views_view: boolean;
    module_view: boolean;
    page_view: boolean;
    inbox_view: boolean;
    default_assignee: IUser | string | null;
    default_state: string | null;
    description: string;
    emoji: string | null;
    emoji_and_icon:
      | string
      | {
          name: string;
          color: string;
        }
      | null;
    estimate: string | null;
    icon_prop: {
      name: string;
      color: string;
    } | null;
    id: string;
    identifier: string;
    is_deployed: boolean;
    is_favorite: boolean;
    is_member: boolean;
    member_role: TUserProjectRole | null;
    members: IProjectMemberLite[];
    issue_views_view: boolean;
    module_view: boolean;
    name: string;
    network: number;
    page_view: boolean;
    project_lead: IUserLite | string | null;
    sort_order: number | null;
    total_cycles: number;
    total_members: number;
    total_modules: number;
    updated_at: Date;
    updated_by: string;
    workspace: IWorkspace | string;
    workspace_detail: IWorkspaceLite;
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
    // project_lead_member: IWorkspaceMember;
    // projectLead: string;
    // coverImage: string;
    // emoji: string;
   }
