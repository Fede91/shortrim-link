import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = NextResponse.json({ success: true }, { status: 200 });
  response.cookies.set({
    name: "token",
    value: "",
    httpOnly: true,
    maxAge: 0,
    path: "/",
  });
  return response;
}
