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
                
                this.setAccessToken(response?.data?.accessToken);
                this.setRefreshToken(response?.data?.refreshToken);
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
    
}


  