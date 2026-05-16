 import { IProject, IProjectLite } from "@/types/project";
import { RootStore } from "./root.store";
import {
  action,
  makeObservable,
  computed,
  runInAction,
  observable
} from "mobx";
import { ProjectService } from "@/services/project.service";
import { IssueService } from "@/services/issue.service";

export interface IProjectStore {
   workspaceProjects: IProjectLite[];
  createProject: (workspaceSlug: string, data: any) => Promise<any>;
  fetchProjects: (workspaceSlug: string) => Promise<any>;
  createIssue: (workspaceSlug: string, projectId: string, data: any) => Promise<any>;
}

export class ProjectStore implements IProjectStore {
  rootStore;
  projectService;
  issueService;

  projects: { [workspaceSlug: string]: IProject[] } = {};
 
  workspaceProjects: IProjectLite[] = [];

  constructor(_rootStore: RootStore) {
    this.rootStore = _rootStore;
    this.projectService = new ProjectService();
    this.issueService = new IssueService();

    makeObservable(this, {
      projects: observable.ref,
      workspaceProjects: observable,
      fetchProjects: action,
      createProject: action,
      createIssue: action,
    });
  }

  createProject = async (workspaceSlug: string, data: any) => {
    const response = await this.projectService.createProject(workspaceSlug, data);
    if (response) {
      runInAction(() => {
        const projects = response?.project;
       this.workspaceProjects = [...this.workspaceProjects, projects]; //copying
        
      });
    }
    return response;
  };

  fetchProjects = async (workspaceSlug: string) => {
    const response = await this.projectService.fetchProjects(workspaceSlug);
    runInAction(() => {
     this.workspaceProjects = [...response];
    });
  };

  createIssue = async (workspaceSlug: string, projectId: string, data: any) => {
    const response = await this.issueService.createIssue(workspaceSlug, projectId, data);
    return response;
  };
}
