import { jwtVerify } from "jose"
import { NextRequest } from "next/server"
import { parse } from 'cookie';
import { AxiosRequestHeaders } from "axios";

export const getTokensFromCookie = (headers: AxiosRequestHeaders, tokenType: string) =>{

  const cookieHeader = headers.Cookie;
   
}

export const getRefreshTokenFromCookie = (request: NextRequest) =>{

  const cookieHeader = request.headers.get('Cookie');
  const cookies = parse(cookieHeader || '');
  const token = cookies.accessToken;

  return token
}




// export const verifyToken = async(token: string) => {

//   try{
//     const verified = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))
//     return true
//   }
//   catch(error){
//     return false
//   }
// }












// export function getHeaders() {
//     const accessToken = getAccessToken();
    
//     if (accessToken) {
//       return {
//         Authorization: `Bearer ${accessToken}`,
//       };
//     }
//     return {}; 
//   }



// export function setTokens(accessToken: string, refreshToken: string) {
//     const tokens = { accessToken, refreshToken };

//     // Cookies.set('accessToken', accessToken);
     
    
   
// }
// export function getAccessToken() {

//     return localStorage.getItem('accessToken')
// }

// export function getRefreshToken() {
//     return localStorage.getItem('refreshToken')
// }



