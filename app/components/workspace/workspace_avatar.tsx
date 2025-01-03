import React from "react";

import { ColorUtils } from "@/models/color";
import { Workspace } from "@/models/workspace";
import * as Avatar from "@radix-ui/react-avatar";
import { type VariantProps, cva } from "class-variance-authority";

import { MountCallback } from "@/lib/mounting_callbacks";
import { cn } from "@/lib/utils";

const workspaceVariants = cva("", {
  variants: {
    size: {
      default: "h-9 w-9 rounded-lg text-2xl font-bold",
      sm: "h-5 w-5 rounded-md text-base font-bold",
      md: "h-7 w-7 rounded-md text-base font-bold",
      xl: "h-20 w-20 rounded-lg text-5xl font-bold",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const FALLBACK_DELAY_MS = 600;

export default function WorkspaceAvatar({
  workspace,
  size,
}: {
  workspace: Workspace;
} & VariantProps<typeof workspaceVariants>) {
  const backgroundColor = ColorUtils.getAvatarColorBackgroundClass(
    workspace.avatarColor,
  );

  const [inFallbackMode, setInFallbackMode] = React.useState(false);

  return (
    <Avatar.Root
      className={cn(
        workspaceVariants({ size }),
        "flex items-center gap-2 justify-center outline-none overflow-hidden",
        inFallbackMode ? backgroundColor : "bg-transparent",
      )}
    >
      {workspace.avatarImage !== null ? (
        <>
          <Avatar.Image
            src={workspace.avatarImage}
            alt={workspace.name}
            // Zoom in image to fill space
            style={{ objectFit: "cover" }}
            className="h-full w-full"
          />

          <Avatar.Fallback delayMs={FALLBACK_DELAY_MS}>
            <MountCallback callback={() => setInFallbackMode(true)} />
            <span className="uppercase text-white">{workspace.name[0]}</span>
          </Avatar.Fallback>
        </>
      ) : (
        <>
          <MountCallback callback={() => setInFallbackMode(true)} />
          <span className="uppercase text-white">{workspace.name[0]}</span>
        </>
      )}
    </Avatar.Root>
  );
}
