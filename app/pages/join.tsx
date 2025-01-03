import React from "react";

import { useRouter } from "next/router";
import { toast } from "sonner";

import useAuthToken from "@/components/auth/use_auth_token";
import NotLoggedInLayout from "@/components/layouts/not_logged_in_layout";
import LoadingSpinner from "@/components/loading_states/loading_spinner";

import { BackendRequest } from "@/lib/backend_request";

export default function Join() {
  const router = useRouter();
  const { workspaceSlug, inviteLinkId } = router.query;

  const authToken = useAuthToken();

  React.useEffect(() => {
    if (!workspaceSlug || !inviteLinkId) {
      router.replace("/");
    }

    (async function () {
      try {
        const response = await BackendRequest.call<
          { workspaceSlug: string; inviteLinkId: string },
          void
        >(`/workspaces/join/from_link`, {
          method: "POST",
          body: {
            workspaceSlug: workspaceSlug as string,
            inviteLinkId: inviteLinkId as string,
          },
          headers: {
            Authorization: `Bearer ${authToken?.access}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to join workspace");
        }

        router.replace(`/${workspaceSlug}/chat`);
      } catch (error) {
        console.error(error);
        toast.error("Failed to join workspace.");
      }
    })();
  }, [router, workspaceSlug, inviteLinkId, authToken]);

  return (
    <div className="h-screen flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
}

Join.getLayout = NotLoggedInLayout.getLayout;
Join.isProtected = false;
