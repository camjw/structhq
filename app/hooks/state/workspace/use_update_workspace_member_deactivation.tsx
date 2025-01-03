import { Profile } from "@/models/profile";
import { profilesAtom } from "@/state/profile";
import { AnalyticsEventNames } from "analytics/events";
import useAnalytics from "analytics/use_analytics";
import { useRecoilCallback } from "recoil";
import { toast } from "sonner";

import useAuthToken from "@/components/auth/use_auth_token";
import { useCurrentWorkspace } from "@/components/workspace/workspace_welcome_guard";

import { BackendRequest } from "@/lib/backend_request";

type DeactivateWorkspaceMemberRequest = {
  profileId: string;
  isDeactivated: boolean;
};

export const useUpdateWorkspaceMemberDeactivation = () => {
  const { track } = useAnalytics();
  const authToken = useAuthToken();

  const workspace = useCurrentWorkspace();

  return useRecoilCallback(
    ({ set, snapshot }) =>
      async ({
        profileId,
        isDeactivated,
      }: DeactivateWorkspaceMemberRequest) => {
        const workspaceMembers = await snapshot.getPromise(profilesAtom);

        const profile = workspaceMembers.find((p) => p.id === profileId);

        try {
          if (!profile) {
            throw new Error("User not found");
          }

          set(profilesAtom, (profiles) => {
            return profiles.map((p) => {
              if (p.id === profileId) {
                return {
                  ...p,
                  isDeactivated,
                };
              }

              return p;
            });
          });

          const response = await BackendRequest.call<
            DeactivateWorkspaceMemberRequest,
            Profile
          >(`profiles/deactivate`, {
            method: "POST",
            body: {
              profileId,
              isDeactivated,
            },
            headers: {
              Authorization: `Bearer ${authToken?.access}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to update profile suspension");
          }

          track({
            name: AnalyticsEventNames.WORKSPACE_MEMBER_DEACTIVATION_UPDATED,
            data: { profileId: profileId, isDeactivated },
          });

          toast.success(
            isDeactivated
              ? `${profile.preferredName} has been deactivated.`
              : `${profile.preferredName} has been reactivated.`,
          );

          return profileId;
        } catch (error) {
          console.error(error);
          toast.error(
            isDeactivated
              ? `Couldn't deactivate ${profile?.preferredName}`
              : `Couldn't reactivate ${profile?.preferredName}`,
          );

          set(profilesAtom, workspaceMembers);
        }
      },
    [authToken?.access, track],
  );
};
