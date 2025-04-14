import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";
import { IProfile } from "@/types/user";

export class ProfileService extends APIService {

    constructor() {
        super(API_BASE_URL);
    }
    
    async fetchUserProfile(): Promise<any> {
        return this.get("api/user/profile/")
        .then((response) => response?.data)
        .catch((error) => {
            throw error?.response;
        });
    }

    async updateUserProfile(data:any): Promise<any> {
        console.log(data, "data from service")
        return this.put("api/user/profile/", data)
        .then((response) => response?.data)
        .catch((error) => {
            throw error?.response;
        });
    }
    
    
}