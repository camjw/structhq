"use client";

import * as React from "react";

import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, checked, onCheckedChange, ...props }, ref) => {
  const [state, setState] = React.useState<boolean>(checked ?? false);

  React.useEffect(() => {
    setState(checked ?? false);
  }, [checked, setState]);

  return (
    <button
      className={cn(
        "peer inline-flex h-5 w-[30px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-0 focus:ring-0 focus:border-transparent focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        state ? "bg-primary-9" : "bg-gray-6",
        className,
      )}
      {...props}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();

        setState((prev) => !prev);
        onCheckedChange?.(!state);
      }}
    >
      <div
        className={cn(
          "pointer-events-none block h-3.5 w-3.5 rounded-full bg-white shadow-lg ring-0 transition-transform",
          state ? "translate-x-2.5" : "translate-x-0.5",
        )}
      />
    </button>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
