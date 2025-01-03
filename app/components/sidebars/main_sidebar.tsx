import React from "react";

import { CalendarIcon } from "@/icons/outline/calendar";
import { Cube04Icon } from "@/icons/outline/cube-04";
import { CalendarIcon as CalendarIconSolid } from "@/icons/solid/calendar";
import { ContainerIcon as ContainerIconSolid } from "@/icons/solid/container";
import { Cube04Icon as Cube04IconSolid } from "@/icons/solid/cube-04";

import { BrandingLogo } from "@/components/branding/branding_logo";
import { SidebarLink } from "@/components/sidebars/sidebar_link";
import SidebarWorkspaceMenu from "@/components/sidebars/sidebar_workspace_menu";
import { SidebarWrapper } from "@/components/sidebars/sidebar_wrapper";
import SupportMenu from "@/components/support_menu";
import { useCurrentWorkspace } from "@/components/workspace/workspace_welcome_guard";

export function MainSidebar() {
  const workspace = useCurrentWorkspace();

  return (
    <SidebarWrapper>
      <div className="pt-3 bg-gray-3 flex flex-col gap-4 justify-between h-full overflow-auto w-full">
        <div className="flex flex-col h-full">
          <div className="flex flex-col items-center justify-center px-8 gap-4 divide-y divide-gray-6">
            <div className="flex flex-col items-center gap-4">
              <BrandingLogo />
              <SidebarWorkspaceMenu />
            </div>

            <div className="flex flex-col items-center gap-2 pt-4">
              <SidebarLink
                href={`/${workspace.slug}/structs`}
                icon={Cube04Icon}
                activeIcon={Cube04IconSolid}
                tooltip="Structs"
              />
              <SidebarLink
                href={`/${workspace.slug}/schedules`}
                icon={CalendarIcon}
                activeIcon={CalendarIconSolid}
                tooltip="Schedules"
              />
            </div>
          </div>
        </div>
        <SupportMenu />
      </div>
    </SidebarWrapper>
  );
}
