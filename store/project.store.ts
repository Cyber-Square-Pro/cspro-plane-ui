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

export interface IProjectStore {
   workspaceProjects: IProjectLite[];
  createProject: (workspaceSlug: string, data: any) => Promise<any>;
  fetchProjects: (workspaceSlug: string) => Promise<any>;
}

export class ProjectStore implements IProjectStore {
  rootStore;
  projectService;

  projects: { [workspaceSlug: string]: IProject[] } = {};
 
  workspaceProjects: IProjectLite[] = [];

  constructor(_rootStore: RootStore) {
    this.rootStore = _rootStore;
    this.projectService = new ProjectService();

    makeObservable(this, {
      projects: observable.ref,
      workspaceProjects: observable,
      fetchProjects: action,
      createProject: action,
    });
  }

  createProject = async (workspaceSlug: string, data: any) => {
    const response = await this.projectService.createProject(workspaceSlug, data);
    if (response) {
      runInAction(() => {
        const projects = response?.project;
       this.workspaceProjects = [...this.workspaceProjects, response]; //copying
        
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
}
