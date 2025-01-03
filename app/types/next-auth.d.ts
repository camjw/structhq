import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    access: string;
    refresh: string;
  }

  interface Session {
    authToken: JWT;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access: string;
    refresh: string;
    accessTokenExpires: number;

    error?: string;
  }

  interface Profile {
    foo: string;
  }
}
