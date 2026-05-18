import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";

export class IssueService extends APIService {
    constructor() {
        super(API_BASE_URL);
    }

    async createIssue(workspaceSlug: string, projectId: string, data: { title: string }) {
        return this.post(`/api/workspace/${workspaceSlug}/projects/${projectId}/issues/`, data)
            .then((response) => response?.data)
            .catch((error) => {
                throw error?.response;
            });
    }
}
