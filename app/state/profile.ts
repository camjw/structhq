import { Profile } from "@/models/profile";
import { getAccessToken } from "@/state/utils";
import { atom, atomFamily, selector, selectorFamily } from "recoil";

import { BackendRequest } from "@/lib/backend_request";

export const profileAtom = atom<Profile>({
  key: "profile",
  default: selector({
    key: "profile/Default",
    get: async () => {
      const accessToken = await getAccessToken();

      const response = await BackendRequest.call<void, Profile>(
        `/profiles/me`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }

      return response.json();
    },
  }),
});

export const profileIdSelector = selector<string>({
  key: "profileIdSelector",
  get: ({ get }) => {
    const profile = get(profileAtom);

    return profile.id;
  },
});

export type ProfileFeatureFlags = { [key: string]: boolean };

export const profileFeatureFlagsAtom = atom<ProfileFeatureFlags>({
  key: "profileFeatureFlagsAtom",
  default: selector({
    key: "profileFeatureFlagsAtom/Default",
    get: async ({ get }) => {
      const profile = get(profileAtom);

      if (!profile) {
        return {};
      }
      const isInDevMode = process.env.NODE_ENV === "development";

      const featureFlagPath = isInDevMode
        ? "https://eu.i.posthog.com/decide?v=3"
        : "/decide?v=3";

      const featureFlagResponse = await fetch(featureFlagPath, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: process.env.NEXT_PUBLIC_POSTHOG_API_KEY,
          distinct_id: profile.id,
        }),
      });

      const data = await featureFlagResponse.json();

      return data.featureFlags as ProfileFeatureFlags;
    },
  }),
});

export const profilesAtom = atom<Profile[]>({
  key: "profilesAtom",
  default: selector({
    key: "profilesAtom/Default",
    get: async () => {
      const accessToken = await getAccessToken();

      const response = await BackendRequest.call<void, Profile[]>(
        `/profiles/list`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );

      if (!response.ok) {
        console.error(response);
        return [];
      }

      return response.json();
    },
  }),
});
