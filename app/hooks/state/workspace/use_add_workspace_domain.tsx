import { Workspace, WorkspaceAllowedEmailDomain } from "@/models/workspace";
import { workspaceAllowedDomainsAtomFamily } from "@/state/workspace";
import { AnalyticsEventNames } from "analytics/events";
import useAnalytics from "analytics/use_analytics";
import { DateTime } from "luxon";
import { useRecoilCallback } from "recoil";
import { toast } from "sonner";

import useAuthToken from "@/components/auth/use_auth_token";
import { useCurrentWorkspace } from "@/components/workspace/workspace_welcome_guard";

import { BackendRequest } from "@/lib/backend_request";
import uuid from "@/lib/uuid";

type AddWorkspaceDomainRequest = {
  id: string;
  domain: string;
};

export const useAddWorkspaceDomain = () => {
  const { track } = useAnalytics();
  const authToken = useAuthToken();
  const workspace = useCurrentWorkspace();

  return useRecoilCallback(
    ({ set }) =>
      async (domain: string) => {
        const id = uuid();
        const domainToAdd: WorkspaceAllowedEmailDomain = {
          id,
          domain,
          createdAt: DateTime.utc().toISO(),
        };

        set(
          workspaceAllowedDomainsAtomFamily(workspace.id),
          (workspaceDomains) => {
            return [...workspaceDomains, domainToAdd];
          },
        );

        try {
          const response = await BackendRequest.call<
            AddWorkspaceDomainRequest,
            Workspace
          >(`workspaces/email_domains/`, {
            method: "POST",
            body: { id, domain },
            headers: {
              Authorization: `Bearer ${authToken?.access}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to add workspace domain");
          }

          const data = await response.json();

          track({
            name: AnalyticsEventNames.WORKSPACE_DOMAIN_ADDED,
            data: {
              domain,
            },
          });

          toast.success(`${domain} added to allowed domains`);

          return data;
        } catch (error) {
          console.error(error);
          toast.error(`We couldn't add this domain, try again later`);

          set(
            workspaceAllowedDomainsAtomFamily(workspace.id),
            (workspaceDomains) => {
              return workspaceDomains.filter((d) => d.id !== domainToAdd.id);
            },
          );
        }
      },
    [authToken?.access, track, workspace.id],
  );
};
