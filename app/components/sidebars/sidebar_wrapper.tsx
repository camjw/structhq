import React from "react";

import { cn } from "@/lib/utils";

import { LEFT_SIDEBAR_WIDTH } from "./utils";

export const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        `z-[101] left-0 top-0 h-full static flex-grow-0 flex-shrink-0 flex flex-col lg:translate-x-0`,
      )}
      style={{
        width: `${LEFT_SIDEBAR_WIDTH}px`,
        maxWidth: `${LEFT_SIDEBAR_WIDTH}px`,
      }}
    >
      {children}
    </div>
  );
};
