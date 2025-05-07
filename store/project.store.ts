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
    createProject: (workspaceSlug: string, data: any) => Promise<any>;
    
    fetchProjects: (workspaceSlug: string) => Promise<any>;

}

export class ProjectStore implements IProjectStore {

    projects: { [workspaceSlug: string]: IProject[] } = {};
    
    rootStore;
    projectService;
    constructor(_rootStore: RootStore) {
        makeObservable(this, {
            projects: observable.ref,

            //computed
            workspaceProjects: computed,
    
        })
        this.rootStore = _rootStore;
        this.projectService = new  ProjectService();
         
      }

      get workspaceProjects() {
        if (!this.rootStore.workspace.workspaceSlug) return null;
        const projects = this.projects[this.rootStore.workspace.workspaceSlug];
        if (!projects) return null;
        return projects;
      }




    
      createProject = async (workspaceSlug: string, data: any) => {
        
        console.log('creating project', data, workspaceSlug)

        const response = await this.projectService.createProject(workspaceSlug, data);
        console.log('response from store@@@@@@@@@@@@@@@@@@@@@@', response)
        if (response) {
          runInAction(() => {
            if (!this.projects[workspaceSlug]) {
              this.projects[workspaceSlug] = [];
            }
            // this.projects[workspaceSlug].push(response);
          });
        }
        return response;
      }


 fetchProjects = async (workspaceSlug: string) => {
  const response = await this.projectService.fetchProjects(workspaceSlug);
  runInAction(() => {
    this.projects[workspaceSlug] = response || [];
  });
}
      
}
