import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";
import { IEmailPasswordFormValues } from "@/types/user";
import axios, { AxiosInstance } from "axios";

// AuthService handles all authentication-related API calls.
export class AuthService extends APIService {

  /**
   * Sends a password reset request to the backend.
   * @param token The reset token from the email link
   * @param new_password The new password to set
   */
  async resetPassword(token: string, new_password: string): Promise<any> {
    return this.axiosObj.post(
      API_BASE_URL + "/api/user/reset-password/",
      { token, new_password },
      { headers: { "Content-Type": "application/json" } }
    )
      .then((response) => response?.data)
      .catch((error) => { throw error?.response?.data; });
  }

  /**
   * Sends a forgot password request to the backend.
   * @param email The user's email address
   */
  async forgotPassword(email: string): Promise<any> {
    return this.axiosObj.post(API_BASE_URL + "/api/user/forgot-password/", { email })
      .then((response) => response?.data)
      .catch((error) => { throw error?.response?.data; });
  }

  // Axios instance for making HTTP requests
  private axiosObj: AxiosInstance;

  /**
   * Initializes the AuthService with the API base URL.
   */
  constructor() {
    super(API_BASE_URL);
    this.axiosObj = axios.create();
  }

  /**
   * Registers a new user.
   * @param data The user's registration data
   */
  async userSignUp(data: IEmailPasswordFormValues): Promise<any> {
    console.log(data)
    return this.axiosObj.post(API_BASE_URL + "/api/user/sign-up/", data, { headers: {} })
      .then((response) => {
        this.setAccessToken(response?.data?.accessToken);
        this.setRefreshToken(response?.data?.refreshToken);
        return response?.data;
      })
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  /**
   * Signs in a user.
   * @param data The user's sign-in credentials
   */
  async userSignIn(data: IEmailPasswordFormValues): Promise<any> {
    return this.axiosObj.post(API_BASE_URL + "/api/user/sign-in/", data)
      .then((response) => {
        console.log('response is ', response?.data.statusCcode)
        this.setAccessToken(response?.data?.accessToken);
        this.setRefreshToken(response?.data?.refreshToken);
        return response?.data;
      })
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  /**
   * Logs out the user by removing tokens.
   */
  async userLogout(): Promise<any> {
    this.removeAccessToken();
    this.removeRefreshToken();
    return Promise.resolve();
  }
}