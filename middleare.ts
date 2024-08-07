import { NextRequest, NextResponse } from 'next/server';
import { getTokensFromCookie } from './lib/tokens/jwt_token.handlers';

export async function middleware(request: NextRequest) {

 
  // const token = getTokensFromCookie(request, "access")


  // if (!token) {
  
  //   return NextResponse.redirect(new URL('/', request.url))
  // }
}

export const config = {
  matcher: [
    '/onboarding',
    '/workspaces/:path',
    '/api/:path'
  ]
}



