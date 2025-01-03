import React from "react";

import { ChevronLeftIcon } from "@/icons/outline/chevron-left";
import { HelpCircleIcon } from "@/icons/outline/help-circle";
import { Building01Icon } from "@/icons/solid/building-01";
import { User01Icon } from "@/icons/solid/user-01";
import Link from "next/link";

import { SettingsSidebarLink } from "@/components/sidebars/settings_sidebar_link";
import SupportMenu from "@/components/support_menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentWorkspace } from "@/components/workspace/workspace_welcome_guard";

import { cn } from "@/lib/utils";

export function SettingsSidebar() {
  const workspace = useCurrentWorkspace();

  return (
    <div
      className={cn(
        `z-[101] h-full flex-grow-0 flex-shrink-0 flex flex-col w-52`,
      )}
    >
      <div className="pt-4 bg-gray-3 flex flex-col gap-4 justify-between h-full overflow-auto w-full">
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col justify-center px-4 gap-4">
            <Link href={`/${workspace.slug}/chat`}>
              <div className="flex flex-row items-center gap-1.5">
                <ChevronLeftIcon className="h-4 w-4 text-gray-12" />
                <span className="text-gray-12 font-display font-medium text-lg">
                  Settings
                </span>
              </div>
            </Link>

            <div className="flex flex-col gap-2 pt-2">
              <div className="flex flex-row space-x-2 items-center">
                <Building01Icon className="h-4 w-4 text-gray-11" />
                <span className="text-gray-11 font-medium text-sm font-display">
                  Workspace
                </span>
              </div>
              <div className="flex flex-col gap-[1px] pl-[19px]">
                <SettingsSidebarLink
                  href={`/${workspace.slug}/settings/general`}
                  label="General"
                />

                <SettingsSidebarLink
                  href={`/${workspace.slug}/settings/members`}
                  label="Members"
                />

                <SettingsSidebarLink
                  href={`/${workspace.slug}/settings/api`}
                  label="API"
                />

                <SettingsSidebarLink
                  href={`/${workspace.slug}/settings/billing`}
                  label="Billing"
                />
              </div>
            </div>
            {/* 
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex flex-row space-x-2 items-center">
                <User01Icon className="h-4 w-4 text-gray-11" />
                <span className="text-gray-11 font-medium text-sm font-display">
                  My Account
                </span>
              </div>
              <div className="flex flex-col gap-[1px] pl-[21px]">
                <SettingsSidebarLink
                  href={`/${workspace.slug}/settings/account/profile`}
                  label="Profile"
                />
                
                <SettingsSidebarLink
                  href={`/${workspace.slug}/settings/account/security`}
                  label="Security"
                />
              </div>
            </div> */}
          </div>
        </div>
        <SupportMenu />
      </div>
    </div>
  );
}
