"use client";

import React, { Suspense } from "react";

import { ChevronLeftIcon } from "@/icons/outline/chevron-left";
import { Workspace } from "@/models/workspace";
import { userAtom, userWorkspacesAtom } from "@/state/user";
import { workspaceBySlugAtomFamily } from "@/state/workspace";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";

import FullGrayScreen from "@/components/loading_states/full_gray_screen";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";

import { COMPANY_NAME } from "@/lib/constants";

type WorkspaceContextData = {
  workspace: Workspace;
};

export const WorkspaceContext = React.createContext<
  WorkspaceContextData | undefined
>(undefined);

export const WorkspaceProvider: React.FC<{
  workspace: Workspace;
  children: React.ReactNode;
}> = ({ workspace, children }) => {
  return (
    <WorkspaceContext.Provider value={{ workspace }}>
      {children}
    </WorkspaceContext.Provider>
  );
};

export function useCurrentWorkspace() {
  const context = React.useContext(WorkspaceContext);

  if (context === undefined) {
    throw new Error("useWorkspace must be used within a WorkspaceProvider");
  }

  return context.workspace;
}

export function NoAccessToWorkspace() {
  const user = useRecoilValue(userAtom);
  const userWorkspaces = useRecoilValue(userWorkspacesAtom);

  return (
    <div>
      <div className="w-full h-24 flex items-center justify-between px-10">
        <Link href={userWorkspaces.length > 0 ? userWorkspaces[0].slug : "/"}>
          <Button variant={"ghost"}>
            <ChevronLeftIcon className="h-4 w-4 text-gray-12" />
            Back to {COMPANY_NAME}
          </Button>
        </Link>
        <div className="flex flex-col space-y-1">
          <span className="text-gray-11 text-xs">Logged in as:</span>
          <span className="font-medium text-sm">{user?.email}</span>
        </div>
      </div>
      <div className="flex flex-col space-y-6 w-full items-center justify-center pt-[15%]">
        <Header>You don't have access to this workspace.</Header>
        <Header>Ask an admin to give you access.</Header>
      </div>
    </div>
  );
}

export default function WorkspaceWelcomeGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const pathname = router.isReady ? router.asPath : null;

  const workspaceSlug = pathname?.split("/")[1] ?? null;

  const isOnWelcomePage = pathname?.startsWith(`/${workspaceSlug}/welcome`);

  const workspaceLoadable = useRecoilValueLoadable(
    workspaceBySlugAtomFamily(workspaceSlug),
  );

  const shouldRedirect = React.useMemo(() => {
    if (workspaceLoadable.state !== "hasValue") {
      return false;
    }

    const workspace = workspaceLoadable.contents;

    if (!workspace) {
      return false;
    }

    Cookies.set("current_workspace", workspace.id, {
      expires: 7,
      path: "/",
      secure: true,
      sameSite: "strict",
    });

    return !workspace.isSetupComplete && !isOnWelcomePage;
  }, [workspaceLoadable, isOnWelcomePage]);

  React.useEffect(() => {
    if (shouldRedirect) {
      router.replace(`/${workspaceSlug}/welcome`);
    }
  }, [shouldRedirect, router, workspaceSlug]);

  if (workspaceLoadable.state === "loading" || shouldRedirect) {
    return <FullGrayScreen />;
  }

  if (workspaceLoadable.state === "hasError") {
    return (
      <Suspense fallback={<FullGrayScreen />}>
        <NoAccessToWorkspace />
      </Suspense>
    );
  }

  if (workspaceLoadable.state === "hasValue" || isOnWelcomePage) {
    const workspace = workspaceLoadable.contents;

    if (!workspace) {
      return <FullGrayScreen />;
    }

    return (
      <WorkspaceProvider workspace={workspace}>{children}</WorkspaceProvider>
    );
  }
}
