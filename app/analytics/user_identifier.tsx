import React from "react";

import { profileAtom } from "@/state/profile";
import { userAtom } from "@/state/user";
import { useRecoilValue } from "recoil";

import useAnalytics from "./use_analytics";

export default function UserIdentifier() {
  const user = useRecoilValue(userAtom);
  const profile = useRecoilValue(profileAtom);

  const { identify } = useAnalytics();

  React.useEffect(() => {
    if (user) {
      identify(user.id, {
        email: user.email,
        fullName: profile.fullName,
        preferredName: profile.preferredName,
      });
    }
  }, [user, profile, identify]);

  return null;
}
