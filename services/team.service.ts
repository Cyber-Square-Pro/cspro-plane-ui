import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";
import { ITeam } from "@/types/team";

export class TeamService extends APIService {
    constructor() {
      super(API_BASE_URL);
    }

    async addTeam(data: ITeam): Promise<any>{
        console.log("Calling Api")
    }
}