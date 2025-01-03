"use client";

import React, { Suspense } from "react";

import { MainSidebar } from "@/components/sidebars/main_sidebar";
import WorkspaceWelcomeGuard from "@/components/workspace/workspace_welcome_guard";

import { cn } from "@/lib/utils";

type DefaultLayoutProps = {
  children: React.ReactNode;
  containerClassName?: string;
};

export default function LoggedInLayout({
  children,
  containerClassName,
}: DefaultLayoutProps) {
  return (
    <WorkspaceWelcomeGuard>
      <div className="h-screen flex w-screen bg-gray-3">
        <MainSidebar />
        <div
          className={cn(
            "flex-1 flex overflow-y-hidden h-full relative",
            containerClassName,
          )}
          id="content_container"
        >
          <div className="flex flex-col w-full items-center h-screen bg-gray-1 border-l border-gray-4">
            <div className="flex-1 w-full h-full overflow-y-auto">
              <div className="flex flex-col w-full items-start h-full relative">
                <Suspense>{children}</Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkspaceWelcomeGuard>
  );
}

LoggedInLayout.getLayout = (page: React.ReactNode) => (
  <LoggedInLayout>{page}</LoggedInLayout>
);
