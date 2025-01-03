import React from "react";

import { isSigningOutAtom } from "@/state/auth";
import { signOut } from "next-auth/react";
import { useSetRecoilState } from "recoil";
import { toast } from "sonner";

export default function useSignOut() {
  const setIsSigningOut = useSetRecoilState(isSigningOutAtom);

  return React.useCallback(
    async (message: string) => {
      try {
        setIsSigningOut(true);

        if (process.env.NODE_ENV === "development") {
          console.log("Signing out", message);
        }

        const callbackUrl = `${window.location.protocol}//${window.location.host}/login`;
        await signOut({ callbackUrl });
      } catch (e) {
        console.error(e);
        toast.error("Something went wrong!");
      }
    },
    [setIsSigningOut],
  );
}
