import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyPVariants = cva("!leading-[180%]", {
  variants: {
    size: {
      default: "text-base",
      sm: "sm:text-sm xl:text-base sm:!leading-[150%]",
      lg: "sm:text-lg xl:text-xl sm:!leading-[150%]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface TypographyPProps
  extends React.BaseHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyPVariants> {
  asChild?: boolean;
}

const TypographyP = React.forwardRef<HTMLParagraphElement, TypographyPProps>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";
    return (
      <Comp
        className={cn(typographyPVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
TypographyP.displayName = "TypographyP";

export { TypographyP, typographyPVariants };
