import React from "react";

import { AnalyticsEventNames } from "@/analytics/events";
import useAnalytics from "@/analytics/use_analytics";
import { Profile } from "@/models/profile";
import { User } from "@/models/user";
import { profileAtom } from "@/state/profile";
import { userAtom } from "@/state/user";
import {
  SignInOptions,
  getSession,
  signIn as nextSignIn,
} from "next-auth/react";
import { useSetRecoilState } from "recoil";

import { SignInProvider } from "@/components/auth/utils";

import { BackendRequest } from "@/lib/backend_request";

export default function useSignIn() {
  const { identify, track } = useAnalytics();

  const setUser = useSetRecoilState(userAtom);
  const setProfile = useSetRecoilState(profileAtom);

  const signIn = React.useCallback(
    async (
      provider: SignInProvider,
      options: SignInOptions,
      trackingEventName:
        | AnalyticsEventNames.SIGNED_UP
        | AnalyticsEventNames.LOGGED_IN = AnalyticsEventNames.LOGGED_IN,
    ) => {
      const nextSignInResult = await nextSignIn(provider, options);

      const session = await getSession();

      const accessToken = session?.authToken.access;

      if (!accessToken) {
        return nextSignInResult;
      }

      // Get the user
      const [userResponse, profileResponse] = await Promise.all([
        BackendRequest.call<void, User>(`/users/me/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        BackendRequest.call<void, Profile>(`/profile/me/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
      ]);

      const user = (await userResponse.json()) as User;
      const profile = (await profileResponse.json()) as Profile;

      setUser(user);
      setProfile(profile);

      // Identify the user
      identify(user.id, {
        email: user.email,
        fullName: profile.fullName,
        preferredName: profile.preferredName,
      });

      // Track that they logged in
      track({
        name: trackingEventName,
        data: {
          email: user.email,
        },
      });

      return nextSignInResult;
    },
    [identify, setUser, track, setProfile],
  );

  return signIn;
}
