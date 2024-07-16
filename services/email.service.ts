import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";
import { IAddMemberFormValues, IVerificationCode } from "@/types/user";


export class EmailService extends APIService {
    constructor() {
      
      
      super(API_BASE_URL);
    }

    async requestCode(): Promise<any> {
         
        return this.post("/api/users/email/", { headers: this.getAccessToken() ? this.getHeaders() : {}, })
          .then((response) => {
            return response?.data;
          }) 
          .catch((error) => {
            throw error?.response?.data;
          });
      }

      async verifyEmail(formData:IVerificationCode): Promise<any> {
        
        
        return this.post("/api/users/email/verify/", formData, { headers: this.getAccessToken() ? this.getHeaders() : {}, })
          .then((response) => {
            return response?.data;
          })
          .catch((error) => {
            throw error?.response?.data;
          });
      }

      async addMemberService(formData: IAddMemberFormValues): Promise<any> {
        console.log("Form Data api:", formData); // Log form data here
        return this.post("/api/send/invitation/", formData, { headers: this.getAccessToken() ? this.getHeaders() : {} })
          .then((response) => {
            console.log(response)
            return response?.data;
            
          })
          .catch((error) => {
            throw error?.response?.data;
          });
      }
      
}

    

