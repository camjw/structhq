import { User } from "@/models/user";
import {
  Workspace,
  WorkspaceAPIKey,
  WorkspaceAllowedEmailDomain,
  WorkspaceInviteRecord as WorkspaceInvite,
} from "@/models/workspace";
import { atom, atomFamily, selector, selectorFamily } from "recoil";

import { BackendRequest } from "@/lib/backend_request";

import { getAccessToken } from "./utils";

export const workspaceBySlugAtomFamily = atomFamily<
  Workspace | null,
  string | null
>({
  key: "workspaceBySlug",
  default: selectorFamily({
    key: "workspaceBySlug/Default",
    get: (slug: string | null) => async () => {
      const accessToken = await getAccessToken();

      if (!slug) {
        return null;
      }

      const response = await BackendRequest.call<void, Workspace>(
        `/workspaces/by_slug/${slug}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch workspace");
      }

      return response.json();
    },
  }),
});

export const workspaceUsersAtom = atom<User[]>({
  key: "workspaceUsersAtom",
  default: selector({
    key: "workspaceUsersAtom/Default",
    get: async () => {
      const accessToken = await getAccessToken();

      const response = await BackendRequest.call<void, User[]>(
        `/workspaces/users`,
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

export const workspaceAPIKeysAtom = atom<WorkspaceAPIKey[]>({
  key: "workspaceAPIKeysAtom",
  default: selector({
    key: "workspaceAPIKeysAtom/Default",
    get: async () => {
      const accessToken = await getAccessToken();

      const response = await BackendRequest.call<void, WorkspaceAPIKey[]>(
        `/workspaces/api-keys/list`,
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

export const workspaceAllowedDomainsAtomFamily = atomFamily<
  WorkspaceAllowedEmailDomain[],
  string
>({
  key: "workspaceAllowedDomainsAtom",
  default: selectorFamily({
    key: "CompanyAllowedDomainsAtomDefault",
    get: (_workspaceId) => async () => {
      const accessToken = await getAccessToken();

      if (!accessToken) return [];

      const response = await BackendRequest.call<
        void,
        WorkspaceAllowedEmailDomain[]
      >(`/workspaces/email_domains/`, {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      return response.json();
    },
  }),
});

// export const workspaceSubscriptionSelector = selector<StripeSubscription | null>({
//   key: "workspaceSubscriptionSelector",
//   get: ({ get }) => {
//     const workspace = get(workspaceAtom);

//     // Return the most recent one
//     return (
//       workspace?.stripeSubscriptions[workspace.stripeSubscriptions.length - 1] ||
//       null
//     );
//   },
// });

// export const workspaceHasValidSubscriptionSelector = selector<boolean>({
//   key: "workspaceHasValidSubscriptionSelector",

//   get: ({ get }) => {
//     const workspace = get(workspaceAtom);

//     // Hack - if the workspace doesn't have a stripe customer ID, they're a legacy customer and get it for free
//     if (!workspace?.stripeCustomerId) {
//       return true;
//     }

//     const validSubscription = workspace.stripeSubscriptions.find(
//       (subscription) =>
//         subscription.status === StripeSubscriptionStatus.ACTIVE ||
//         subscription.status === StripeSubscriptionStatus.TRIALING,
//     );

//     return Boolean(validSubscription);
//   },
// });

export const workspaceInvitedUsersAtom = atom<WorkspaceInvite[]>({
  key: "workspaceInvitedUsersAtom",
  default: selector({
    key: "WorkspaceInvitedUsersAtom/Default",
    get: async () => {
      const accessToken = await getAccessToken();

      if (!accessToken) return [];

      const response = await BackendRequest.call<void, WorkspaceInvite[]>(
        `/workspaces/invites/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      return response.json();
    },
  }),
});
