import { AuthToken } from "@/models/auth_token";
import NextAuth, { Account, Profile, Session, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

import { BackendRequest } from "@/lib/backend_request";

// 2 Hours
export const ACCESS_TOKEN_EXPIRES = 2 * 60 * 60 * 1000;

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },

  callbacks: {
    async jwt({
      token,
      user,
      account,
      profile,
      ...rest
    }: {
      token: JWT;
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile;
    }) {
      if (account && user) {
        // User just logged in
        try {
          const authTokenResponse = await BackendRequest.call<
            { account: Account; profile: Profile | undefined },
            AuthToken
          >("auth/token/obtain", {
            method: "POST",
            body: {
              account,
              profile,
            },
          });

          if (!authTokenResponse.ok) {
            console.error(authTokenResponse.statusText);
            throw new Error("Failed to authenticate with Google");
          }

          const data = await authTokenResponse.json();

          return {
            access: data.access,
            accessTokenExpires: Date.now() + ACCESS_TOKEN_EXPIRES,
            refresh: data.refresh,
            user,
          };
        } catch (error) {
          console.error(error);
          throw new Error("Failed to authenticate with Google");
        }
      }

      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      return refreshAccessToken(token);
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.authToken = token;

      return session;
    },
  },

  debug: process.env.NODE_ENV === "development",

  pages: {
    signIn: "/login",
    error: "/login",
  },
});

async function refreshAccessToken(authToken: JWT): Promise<JWT> {
  try {
    const response = await BackendRequest.call<{ refresh: string }, AuthToken>(
      "auth/token/refresh/",
      {
        method: "POST",
        body: { refresh: authToken.refresh },
      },
    );

    if (!response.ok) {
      console.error(response.statusText);
      return {
        ...authToken,
        error: "RefreshAccessTokenError",
      };
    }

    const data = await response.json();

    const { access: newAccessToken } = data;

    return {
      access: newAccessToken,
      refresh: authToken.refresh,
      accessTokenExpires: Date.now() + ACCESS_TOKEN_EXPIRES,
    };
  } catch (error) {
    console.error(error);
    return {
      ...authToken,
      error: "RefreshAccessTokenError",
    };
  }
}
