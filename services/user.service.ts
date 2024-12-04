import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";
import { IUser, IUserSettings } from "@/types/user";

export class UserService extends APIService {
    constructor() {
      
      
      super(API_BASE_URL);
    }

    async updateUser(data: Partial<IUser>): Promise<any> {
      
        return this.patch("/api/users/me/", data)
          .then((response) => response?.data)
          .catch((error) => {
            throw error?.response?.data;
          });
      }

      async currentUser(): Promise<IUser> {
        return this.get("/api/users/me/")
          .then((response) => response?.data)
          .catch((error) => {
            throw error?.response;
          });
      }

      async updateUserOnBoard({ userRole }: any, user: IUser | undefined): Promise<any> {
        return this.patch("/api/users/me/onboard/", {
          is_onboarded: true,
        })
          .then((response) => {
            
            return response?.data;
          })
          .catch((error) => {
            throw error?.response?.data;
          });
      }

      async currentUserSettings(): Promise<IUserSettings> {
        return this.get("/api/users/me/settings/")
          .then((response) => response?.data)
          .catch((error) => {
            throw error?.response;
          });
      }
}