import React from "react";

import { Workspace } from "@/models/workspace";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";

import {
  BrandingLogo,
  BrandingLogoSpinner,
} from "@/components/branding/branding_logo";
import NotLoggedInLayout from "@/components/layouts/not_logged_in_layout";
import { Button } from "@/components/ui/button";
import { Header, SubHeader } from "@/components/ui/header";
import { Panel } from "@/components/ui/panel";
import WorkspaceAvatar from "@/components/workspace/workspace_avatar";

import { BackendRequest } from "@/lib/backend_request";

export default function Join({
  workspaceSlug,
  inviteLinkId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [workspace, setWorkspace] = React.useState<Workspace | null>(null);

  React.useEffect(() => {
    (async function () {
      try {
        const response = await BackendRequest.call<
          { workspaceSlug: string; inviteLinkId: string },
          Workspace
        >(`/workspaces/check_invite_link/`, {
          method: "POST",
          body: {
            workspaceSlug,
            inviteLinkId,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to join workspace");
        }

        const workspace = await response.json();

        setWorkspace(workspace);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [setWorkspace, workspaceSlug, inviteLinkId]);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      {workspace ? (
        <div className="flex flex-col items-center justify-center">
          <Panel>
            <WorkspaceAvatar workspace={workspace} size={"xl"} />
            <div className="pt-4 flex flex-col space-y-4">
              <Header>Join {workspace.name}</Header>
              <SubHeader>
                You've been invited to join the {workspace.name} workspace.
              </SubHeader>
            </div>
            <Link
              href={`/login?workspaceSlug=${encodeURIComponent(workspaceSlug)}&inviteLinkId=${encodeURIComponent(inviteLinkId)}`}
            >
              <Button size={"xl"}>Log in</Button>
            </Link>
          </Panel>
        </div>
      ) : (
        <BrandingLogoSpinner />
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.workspaceSlug || !params?.inviteLinkId) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      workspaceSlug: params.workspaceSlug,
      inviteLinkId: params.inviteLinkId,
    },
  };
};

Join.getLayout = NotLoggedInLayout.getLayout;
Join.isUnprotected = true;
