import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";
import { IEmailPasswordFormValues } from "@/types/user";
import axios, { AxiosInstance } from "axios";
import { TForgotPasswordValidator } from "@/lib/validators/account/forgotpassword.validator";
import { TResetPasswordValidator } from "@/lib/validators/account/resetpassword.validator";

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

    async forgotPassword(data: TForgotPasswordValidator): Promise<any> {
      return this.axiosObj
        .post(API_BASE_URL + "/api/user/forgot-password/", data)
        .then((response) => response?.data)
        .catch((error) => {
          throw error?.response?.data;
        });
    }

    async resetPassword(
      data: TResetPasswordValidator & { uid: string; token: string }
    ): Promise<any> {
      return this.axiosObj
        .post(API_BASE_URL + "/api/user/reset-password/", data)
        .then((response) => response?.data)
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


  
