import { NextResponse } from "next/server";
export async function POST(request: Request) {

    console.log("API Initialized: Sign-in route hit");
    const requestBody = await request.json?.();

    const response = await fetch("http://localhost:8000/api/sign-in/", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(requestBody),
    });

    const { message, statusCode, accessToken, refreshToken } = await response.json();
    console.log('stats', statusCode)
    if (statusCode == 200) {
        const accessTokenCookie = `accessToken=${accessToken}; Path=/; HttpOnly`;
        const refreshTokenCookie = `refreshToken=${refreshToken}; Path=/; HttpOnly`;


        const cookieHeaderValue = `${accessTokenCookie}, ${refreshTokenCookie}`;
        return NextResponse.json({
            message, statusCode, accessToken, refreshToken
        },
            {
                headers: { "Set-Cookie": cookieHeaderValue }
            });



    }

    return NextResponse.json({ message, statusCode });
}