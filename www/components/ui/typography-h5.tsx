import * as React from "react";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

export interface TypographyH5Props
  extends React.BaseHTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}

const TypographyH5 = React.forwardRef<HTMLHeadingElement, TypographyH5Props>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h5";
    return (
      <Comp
        className={cn("text-sm font-bold !leading-[180%]", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
TypographyH5.displayName = "TypographyH5";

export { TypographyH5 };
