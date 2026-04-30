import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";
import { IEmailPasswordFormValues } from "@/types/user";
import axios, { AxiosInstance } from "axios";

export class AuthService extends APIService {

  private axiosObj: AxiosInstance;

    constructor() {
      super(API_BASE_URL);
      this.axiosObj = axios.create();
    }


    async userSignUp(data:IEmailPasswordFormValues): Promise<any> {
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

    async userSignIn(data:IEmailPasswordFormValues): Promise<any> {
        
         return this.axiosObj.post(API_BASE_URL +"/api/user/sign-in/", data)
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

    async requestPasswordReset(data: { email: string }): Promise<any> {
      return this.axiosObj
        .post(API_BASE_URL + "/api/user/forgot-password/", data)
        .then((response) => {
          return response?.data;
        })
        .catch((error) => {
          throw error?.response?.data;
        });
    }
        
        
        // Created by: Sreethu EA on May 24th, 2024 - logs out the user,removes token
        async userLogout(): Promise<any>{
            this.removeAccessToken();
            this.removeRefreshToken();
            return Promise.resolve();
          }

        /**
         * Author: Tysha Daniels on April 18, 2025
         * Purpose: Sends a password-reset link to the given email address.
         * Input: email
         * Return: { message, statusCode }
         */
        async forgotPassword(email: string): Promise<any> {
            return this.axiosObj
                .post(API_BASE_URL + "/api/user/forgot-password/", { email }, { headers: {} })
                .then((response) => response?.data)
                .catch((error) => { throw error?.response?.data; });
        }

        /**
         * Author: Tysha Daniels on April 18, 2025
         * Purpose: Resets the user's password using uid + token from the emailed link.
         * Input: uid, token, newPassword
         * Return: { message, statusCode }
         */
        async resetPassword(uid: string, token: string, newPassword: string): Promise<any> {
            return this.axiosObj
                .post(
                    API_BASE_URL + "/api/user/reset-password/",
                    { uid, token, new_password: newPassword },
                    { headers: {} }
                )
                .then((response) => response?.data)
                .catch((error) => { throw error?.response?.data; });
        }
    
}


  
