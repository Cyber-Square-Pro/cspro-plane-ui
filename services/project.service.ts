import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";
import { IProject } from "@/types/project";

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

async fetchProjects(workspaceSlug: string): Promise<IProject[]> {
    return this.get(`/api/workspace/${workspaceSlug}/projects/`)
        .then((response) => response?.data)
        .catch((error) => {
            throw error?.response;
        });
    }

}