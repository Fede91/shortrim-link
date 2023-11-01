"use client";
import { verifyJwtToken } from "@/lib/auth";
import { JWTPayload } from "jose";
import React from "react";
import Cookies from "universal-cookie";

export function useAuth() {
  const [auth, setAuth] = React.useState<JWTPayload | null>(null);

  const getVerifiedtoken = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token") ?? null;
    const verifiedToken = await verifyJwtToken(token);
    setAuth(verifiedToken);
  };
  React.useEffect(() => {
    getVerifiedtoken();
  }, []);
  return auth;
}
