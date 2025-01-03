import { Suspense } from "react";

import { AnalyticsEventNames } from "@/analytics/events";
import useAnalytics from "@/analytics/use_analytics";
import { ColorUtils } from "@/models/color";
import { userAtom, userWorkspacesAtom } from "@/state/user";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";

import useSignOut from "@/components/auth/use_sign_out";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLink,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import WorkspaceAvatar from "@/components/workspace/workspace_avatar";
import { useCurrentWorkspace } from "@/components/workspace/workspace_welcome_guard";

function SidebarWorkspaceMenuContents() {
  const user = useRecoilValue(userAtom);
  const userWorkspacesLoadable = useRecoilValueLoadable(userWorkspacesAtom);

  const currentWorkspace = useCurrentWorkspace();

  const signOut = useSignOut();
  const { track } = useAnalytics();

  const onSignout = async () => {
    await signOut("Workspace menu");
    track({ name: AnalyticsEventNames.LOGGED_OUT, data: {} });
  };

  return (
    <DropdownMenuContent side="right" align="start" sideOffset={8}>
      {/* <DropdownMenuLink
        href={`/${currentWorkspace.slug}/settings/account/preferences`}
      >
        Preferences
      </DropdownMenuLink>
      <DropdownMenuSeparator /> */}
      <DropdownMenuLink href={`/${currentWorkspace.slug}/settings/general`}>
        Workspace settings
      </DropdownMenuLink>
      <DropdownMenuLink href={`/${currentWorkspace.slug}/settings/members`}>
        Manage members
      </DropdownMenuLink>
      {/* <DropdownMenuSeparator />
      <DropdownMenuItem>Download desktop app</DropdownMenuItem> */}
      <DropdownMenuSeparator />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Switch workspaces</DropdownMenuSubTrigger>
        <DropdownMenuSubContent sideOffset={0}>
          <div className="px-2 py-1 mx-1">
            <span className="text-gray-11 text-sm select-none">
              {user.email}
            </span>
          </div>
          {userWorkspacesLoadable.state === "hasValue" && (
            <>
              {userWorkspacesLoadable.contents.map((workspace) => (
                <DropdownMenuItem key={workspace.id}>
                  <div className="flex items-center gap-2">
                    <WorkspaceAvatar workspace={workspace} size="sm" />
                    <span className="font-normal">{workspace.name}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem>Create a new workspace</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuItem onClick={onSignout}>Sign out</DropdownMenuItem>
    </DropdownMenuContent>
  );
}
export default function SidebarWorkspaceMenu() {
  const workspace = useCurrentWorkspace();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="outline-none focus:outline-none">
            <WorkspaceAvatar workspace={workspace} />
          </button>
        </DropdownMenuTrigger>
        <Suspense fallback={null}>
          <SidebarWorkspaceMenuContents />
        </Suspense>
      </DropdownMenu>
    </div>
  );
}
