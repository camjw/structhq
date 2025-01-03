import { AuthToken } from "@/models/auth_token";
import { useSession } from "next-auth/react";

export default function useAuthToken(): AuthToken | null {
  const { data: session } = useSession();

  return (session?.authToken as AuthToken) ?? null;
}
