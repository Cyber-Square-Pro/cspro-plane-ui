import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";
import { IProject } from "@/types/project";
import { ICurrentUserResponse } from "@/types/user";

export class ProjectService extends APIService {

    constructor() {
        super(API_BASE_URL);
    }


    async createProject(
        workspaceSlug: string,
        data: Partial<IProject>,
    ): Promise<any> {

        console.log('(((((((((((((((((', data)
        return this.post(`api/workspace/${workspaceSlug}/projects/`, data,{headers: {
            "Content-Type": "multipart/form-data", // Let the browser set this automatically
        },})
            .then((response) => response?.data)
            .catch((error) => {
                throw error?.response;
            });
    }


    async fetchProjects(
        slug: string,
    ): Promise<any> {
        return this.get(`api/workspace/${slug}/projects/`)
            .then((response) => response?.data)
            .catch((error) => {
                throw error?.response;
            });
    }
}

