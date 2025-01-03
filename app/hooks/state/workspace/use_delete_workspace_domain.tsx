import { workspaceAllowedDomainsAtomFamily } from "@/state/workspace";
import { AnalyticsEventNames } from "analytics/events";
import useAnalytics from "analytics/use_analytics";
import { useRecoilCallback } from "recoil";
import { toast } from "sonner";

import useAuthToken from "@/components/auth/use_auth_token";
import { useCurrentWorkspace } from "@/components/workspace/workspace_welcome_guard";

import { BackendRequest } from "@/lib/backend_request";

export const useDeleteWorkspaceDomain = () => {
  const { track } = useAnalytics();
  const authToken = useAuthToken();

  const workspace = useCurrentWorkspace();

  return useRecoilCallback(
    ({ set, snapshot }) =>
      async (domainId: string) => {
        const originalWorkspaceDomains = await snapshot.getPromise(
          workspaceAllowedDomainsAtomFamily(workspace.id),
        );

        const domainToDelete = originalWorkspaceDomains.find(
          (d) => d.id === domainId,
        );

        try {
          if (!domainToDelete) {
            throw new Error("Domain not found");
          }

          set(
            workspaceAllowedDomainsAtomFamily(workspace.id),
            (currentWorkspaceDomains) => {
              return currentWorkspaceDomains.filter((d) => d.id !== domainId);
            },
          );

          const response = await BackendRequest.call<void, void>(
            `workspaces/email_domains/${domainId}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${authToken?.access}`,
              },
            },
          );

          if (!response.ok) {
            throw new Error("Failed to delete workspace domain");
          }

          track({
            name: AnalyticsEventNames.WORKSPACE_DOMAIN_DELETED,
            data: { domain: domainToDelete.domain },
          });

          toast.success(`${domainToDelete.domain} deleted`);

          return domainId;
        } catch (error) {
          console.error(error);
          toast.error(`Couldn't delete ${domainToDelete?.domain}`);
          set(
            workspaceAllowedDomainsAtomFamily(workspace.id),
            originalWorkspaceDomains,
          );
        }
      },
    [authToken?.access, track, workspace.id],
  );
};
