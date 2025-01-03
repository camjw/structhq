import React from "react";

import useLocalStorage from "@/hooks/use_local_storage";
import { isSigningOutAtom } from "@/state/auth";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

import FullGrayScreen from "@/components/loading_states/full_gray_screen";

type AuthGuardProps = {
  loginRedirect: boolean;
  children: React.ReactNode;
};

export default function AuthGuard({ children, loginRedirect }: AuthGuardProps) {
  const { data: session, status } = useSession();
  const isSigningOut = useRecoilValue(isSigningOutAtom);
  const { set } = useLocalStorage({ key: "authRedirectUrl" });

  const loading = status === "loading";

  const router = useRouter();

  React.useEffect(() => {
    if (loading) {
      return;
    }

    if (!session && router && loginRedirect) {
      // Store the url that you were on when you got kicked to login so we can go back to it later

      const pathname = router.asPath;

      set(pathname);
      router.replace("/login");
    }
  }, [session, router, loading, set, loginRedirect]);

  React.useEffect(() => {
    if (session?.authToken.error === "RefreshAccessTokenError") {
      (async () => {
        const callbackUrl = `${window.location.protocol}//${window.location.host}/login`;
        signOut({ callbackUrl });
      })();
    }
  }, [session]);

  if (isSigningOut) {
    return <FullGrayScreen />;
  }

  if (!session && status !== "unauthenticated") {
    // returning children here will cause a hydration mismatch error and infinite auth loop
    return null;
  }

  return <>{children}</>;
}
