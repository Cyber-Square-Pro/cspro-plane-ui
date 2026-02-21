import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";
import { IProject, IProjectLite } from "@/types/project";

export class ProjectService extends APIService {

    constructor() {
        super(API_BASE_URL);
    }

    async createProject(workspaceSlug: string, data: Partial<IProject>) {
        return this.post(`/api/workspace/${workspaceSlug}/projects/`, data)
            .then((response) => response?.data)
            .catch((error) => {
                throw error?.response;
            });
    }

async fetchProjects(workspaceSlug: string): Promise<IProjectLite[]> {
    return this.get(`/api/workspace/${workspaceSlug}/projects/`)
        .then((response) =>{ 
           console.log('response from fetchProjects', response)
   
           console.log('response data projects from fetchProjects', response?.data?.projects)
            return response?.data?.projects;})
        .catch((error) => {
            throw error?.response;
        });
    }

 
    async fetchProjectDetails(projectId: number) {
    return this.get(`/api/workspace/project/${projectId}`)
        .then((response) =>{ 
            return response?.data?.project;})
        .catch((error) => {
            throw error?.response;
        });
    }

    

    
}