// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// https://www.makeuseof.com/token-authentication-nextjs-using-jwt/
import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/lib/auth";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password !== process.env.ADMIN_MASTER_PASSWORD) {
    return NextResponse.json(
      { message: "Unauthorized", error: "AUTH001" },
      { status: 401 }
    );
  }

  const token = await new SignJWT({
    username: "Admin",
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(getJwtSecretKey());
  const response = NextResponse.json(
    { success: true },
    { status: 200, headers: { "content-type": "application/json" } }
  );
  response.cookies.set({
    name: "token",
    value: token,
    path: "/",
  });
  return response;
}
