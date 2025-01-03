import { WorkspaceInviteRecord } from "@/models/workspace";
import { profileIdSelector } from "@/state/profile";
import { workspaceInvitedUsersAtom } from "@/state/workspace";
import { AnalyticsEventNames } from "analytics/events";
import useAnalytics from "analytics/use_analytics";
import { useRecoilCallback } from "recoil";
import { toast } from "sonner";

import useAuthToken from "@/components/auth/use_auth_token";
import { useCurrentWorkspace } from "@/components/workspace/workspace_welcome_guard";

import { BackendRequest } from "@/lib/backend_request";
import uuid from "@/lib/uuid";

type InviteWorkspaceMemberRequest = {
  email: string;
};

export const useInviteWorkspaceMember = () => {
  const { track } = useAnalytics();
  const authToken = useAuthToken();

  const currentWorkspace = useCurrentWorkspace();

  return useRecoilCallback(
    ({ set, snapshot }) =>
      async ({ email }: InviteWorkspaceMemberRequest) => {
        const sender = await snapshot.getPromise(profileIdSelector);

        const originalInvitedUsers = await snapshot.getPromise(
          workspaceInvitedUsersAtom,
        );

        const id = uuid();

        if (!sender) return;

        const inviteRecordToAdd: WorkspaceInviteRecord = {
          id,
          email,
          accepted: false,
          sender,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        set(workspaceInvitedUsersAtom, [
          inviteRecordToAdd,
          ...originalInvitedUsers,
        ]);

        try {
          const response = await BackendRequest.call<
            InviteWorkspaceMemberRequest,
            WorkspaceInviteRecord
          >(`workspaces/invites`, {
            method: "POST",
            body: { email },
            headers: {
              Authorization: `Bearer ${authToken?.access}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to invite user");
          }

          track({
            name: AnalyticsEventNames.WORKSPACE_MEMBER_INVITED,
            data: {
              email,
            },
          });

          toast.success(`Invitation sent`);

          return { email };
        } catch (error) {
          console.error(error);
          toast.error(`Couldn't send invite`);

          set(workspaceInvitedUsersAtom, originalInvitedUsers);
        }
      },
    [authToken?.access, track],
  );
};
