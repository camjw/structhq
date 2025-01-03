import React from "react";

import { Copy01Icon } from "@/icons/outline/copy-01";
import { toast } from "sonner";

import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

export default function CopyStringBlock({
  content,
  entity,
  label,
  className,
}: {
  content: string;
  entity?: string;
  label?: string;
  className?: string;
}) {
  const onClick = React.useCallback(() => {
    navigator.clipboard.writeText(content);

    if (entity) {
      toast.success(`${entity} ID copied to clipboard.`);
    } else {
      toast.success("Copied to clipboard.");
    }
  }, [content, entity]);

  return (
    <div className="relative w-full group" onClick={onClick}>
      <Tooltip>
        <TooltipTrigger className="w-full">
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-row items-center justify-between w-full">
              <div>
                {entity && <Label>{entity} ID</Label>}
                {label && <Label>{label}</Label>}
              </div>
            </div>
            <div
              className={cn(
                "rounded-md bg-white shadow-sm px-3 py-1 text-gray-10 text-base font-medium w-full text-left border border-gray-4 h-9 flex items-center relative",
                className,
              )}
            >
              <span className="select-none line-clamp-1 overflow-hidden truncate overflow-ellipsis w-full text-nowrap max-w-[calc(100%-2rem)] flex-grow">
                {content}
              </span>
              <Copy01Icon className="absolute top-2.5 origin-center right-3.5 w-4 h-4 text-gray-10 group-hover:text-gray-12 transition-all" />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          Click to copy to clipboard
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
