import { IProject } from "@/types/project";
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

  projects: { [workspaceSlug: string]: IProject[] };


  //computed
  workspaceProjects: IProject[] | null;

  //actions
  fetchProjects: (workspaceSlug: string) => Promise<IProject[] | undefined>;
  createProject: (workspaceSlug: string, data: any) => Promise<any>;
}

export class ProjectStore implements IProjectStore {

  projects: { [workspaceSlug: string]: IProject[] } = {};
  // workspaceProjects: IProject[] | null = null;
  rootStore;
  projectService;
  constructor(_rootStore: RootStore) {
    makeObservable(this, {
      projects: observable.ref,

      //computed
      workspaceProjects: computed,

    })
    this.rootStore = _rootStore;
    this.projectService = new ProjectService()

  }

  get workspaceProjects() {
    if (!this.rootStore.workspace.workspaceSlug) return null;
    const projects = this.projects[this.rootStore.workspace.workspaceSlug];
    if (!projects) return null;
    return projects;
  }





  createProject = async (workspaceSlug: string,
    data: Partial<IProject>,) => {
    try {
      const response = await this.projectService.createProject(workspaceSlug, data); // API call
       
      console.log("resulttttttttttttttt", response);
      runInAction(() => {
        if (!this.projects[workspaceSlug]) {
          this.projects[workspaceSlug] = [];
        }
        console.log(response.project, 'from create project')
        this.projects[workspaceSlug].push(response.project);
      });
      return response;
    }

    catch (error) {
      console.error("Error creating project:", error);
    }

  }

  fetchProjects = async (workspaceSlug: string) => {
    try {
      const response = await this.projectService.fetchProjects(workspaceSlug); // API call
      const projects = response?.projects || [];
      runInAction(() => {
        this.projects[workspaceSlug] = response.projects;  // Assuming the response is an array of projects
      });
      console.log(this.projects[workspaceSlug], 'from')
      return projects
      // console.log("service", this.projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };


}
