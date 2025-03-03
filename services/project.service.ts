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

        return this.post(`api/workspace/${workspaceSlug}/projects/`, data)
            .then((response) => response?.data)
            .catch((error) => {
                throw error?.response;
            });
    }


    async fetchProjects(
        slug: string,
    ): Promise<any> {
        return this.post(`api/projects/${slug}`)
            .then((response) => response?.data)
            .catch((error) => {
                throw error?.response;
            });
    }
}

