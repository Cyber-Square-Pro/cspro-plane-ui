
import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";
import { ITeam } from "@/types/team";

export class TeamService extends APIService {
  constructor() {
    super(API_BASE_URL);
  }

  async addTeam(data: ITeam): Promise<string> {
    try {
      console.log("Calling API to add team:", data); // Log the request
      const response = await this.post("team/add/", data); // API POST request

      if (response.status === 200) {
        return response.message; // Return the success message
      } else {
        throw new Error("Unexpected API response."); // Handle unexpected responses
      }
    } catch (error: any) {
      // Handle specific error cases based on response status
      if (error.response?.status === 409) {
        throw new Error("The team already exists.");
      }
      console.error("Error in API call:", error); // Log the error for debugging
      throw new Error("An unexpected error occurred while adding the team.");
    }
  }
}

