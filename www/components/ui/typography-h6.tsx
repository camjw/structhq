import * as React from "react";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

export interface TypographyH6Props
  extends React.BaseHTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}

const TypographyH6 = React.forwardRef<HTMLHeadingElement, TypographyH6Props>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h6";
    return (
      <Comp
        className={cn(
          "text-sm font-semibold text-gray-10 !leading-[180%]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
TypographyH6.displayName = "TypographyH6";

export { TypographyH6 };
