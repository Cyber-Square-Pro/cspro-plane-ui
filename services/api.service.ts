  import axios, {  AxiosError } from "axios";


  export abstract class APIService {

    protected baseURL: string;
    protected headers: any = {};
    constructor(baseURL: string) {
      this.baseURL = baseURL;
      this.setupInterceptors();
    }

    private setupInterceptors() {
 
      axios.interceptors.request.use(
        (config: any) => {

          
          config.headers = {
            ...config.headers,
            ...this.getHeaders()
          };
          return config;
        },
        (error: AxiosError) => {
          return Promise.reject(error);
        }
      );

      axios.interceptors.response.use(
        (response) => {
          return response;
        },
        async (error: AxiosError) => {
          if (error.response && error.response.status === 401) {
            // Handle 401 Unauthorized error
            await this.handleUnauthorizedError();
          }
          return Promise.reject(error);
        }
      );
    }

    private async handleUnauthorizedError() {
      const refreshToken = this.getRefreshToken();
      if (refreshToken) {
        try {

          
          // Request new access token using refresh token
          const response = await axios.post(this.baseURL + '/api/token/refresh/', { refresh:refreshToken });
          const newAccessToken = response.data.access;

          // Update access token
          
          this.setAccessToken(newAccessToken);
        } catch (error) {
          // If refresh token is invalid or expired, redirect to login page
          console.error("Error refreshing access token:", error);
          // window.location.href = '/login';
        }
      } else {
        // If no refresh token is available, redirect to login page
        // window.location.href = '/login';
      }
    }




    setRefreshToken(token: string) {
      localStorage.setItem('refreshToken', token)
    }
    setAccessToken(token: string) {
      localStorage.setItem('accessToken', token)
    }
    
    removeRefreshToken(){
      localStorage.removeItem('refreshToken');
    }
    removeAccessToken(){
      localStorage.removeItem('accessToken');
  
    }

    purgeRefreshToken() {
      // todo
    }

    getAccessToken() {
    
      return localStorage.getItem('accessToken')
    }

    getRefreshToken() {
      return localStorage.getItem('refreshToken')
    }


    getHeaders() {
      const accessToken = this.getAccessToken();
      if (accessToken) {
        return {
          Authorization: `Bearer ${accessToken}`,
        };
      }
      return {}; 
    }

    get(url: string, config = {}): Promise<any> {

      try {


        return axios({
          method: "get",
          url: this.baseURL + url,

          ...config,
        })
      }

      catch (error) {
        return Promise.reject(error);
      }

    }


    post(url: string, data = {}, config = {}): Promise<any> {

      try {

        return axios({
          method: "post",
          url: this.baseURL + url,
          data,
          headers: this.getAccessToken() ? this.getHeaders() : {},
          ...config,
        })

      }
      catch (error) {
        
        return Promise.reject(error);
      }

    }
    put(url: string, data = {}, config = {}): Promise<any> {
      return axios({
        method: "put",
        url: this.baseURL + url,
        data,
        headers: this.getAccessToken() ? this.getHeaders() : {},
        ...config,
      });
    }

    patch(url: string, data = {}, config = {}): Promise<any> {
      return axios({
        method: "patch",
        url: this.baseURL + url,
        data,
        headers: this.getAccessToken() ? this.getHeaders() : {},
        ...config,
      });
    }

    delete(url: string, data?: any, config = {}): Promise<any> {
      return axios({
        method: "delete",
        url: this.baseURL + url,
        data: data,
        //   headers: this.getAccessToken() ? this.getHeaders() : {},
        ...config,
      });
    }

  }