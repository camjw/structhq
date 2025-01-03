import { Session } from "next-auth";
import { getSession } from "next-auth/react";

let cachedSession: Session | undefined | null = undefined;

// This is a hacky way to get the access token in recoil state without it being an atom and therefore triggering selector re-evaluation

export async function getAccessToken() {
  // Initialization
  if (cachedSession === undefined) {
    cachedSession = await getSession();
  }

  if (cachedSession === null) {
    // Attempt to fetch again in case we disconnected
    cachedSession = await getSession();
  }

  if (cachedSession === null) {
    // We're not logged in
    return null;
  }

  // Check if token is expired
  const expiry = cachedSession?.authToken.accessTokenExpires;

  if (new Date(expiry) < new Date()) {
    // Try and refresh it
    cachedSession = await getSession();
  }

  return cachedSession?.authToken.access || null;
}
