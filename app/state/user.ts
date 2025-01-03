import { User } from "@/models/user";
import { Workspace } from "@/models/workspace";
import { atom, selector } from "recoil";

import { BackendRequest } from "@/lib/backend_request";

import { getAccessToken } from "./utils";

export const userAtom = atom<User>({
  key: "user",
  default: selector({
    key: "user/Default",
    get: async () => {
      const accessToken = await getAccessToken();

      const response = await BackendRequest.call<void, User>(`/users/me`, {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      return response.json();
    },
  }),
});

export const userWorkspacesAtom = atom<Workspace[]>({
  key: "userWorkspaces",
  default: selector({
    key: "userWorkspaces/Default",
    get: async () => {
      const accessToken = await getAccessToken();

      const response = await BackendRequest.call<void, Workspace[]>(
        `/users/me/workspaces`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user workspaces");
      }

      return response.json();
    },
  }),
});

export const userCanJoinWorkspacesAtom = atom<Workspace[]>({
  key: "userCanJoinWorkspaces",
  default: selector({
    key: "userCanJoinWorkspaces/Default",
    get: async () => {
      const accessToken = await getAccessToken();

      const response = await BackendRequest.call<void, Workspace[]>(
        `/users/me/workspaces/can_join`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch available workspaces");
      }

      return response.json();
    },
  }),
});
