import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyH2Variants = cva("!leading-[133%] font-semibold font-poppins", {
  variants: {
    size: {
      default: "text-xl sm:text-2xl",
      medium: "text-xl sm:text-2xl xl:text-4xl",
      lg: "text-2xl sm:text-4xl xl:text-[52px] tracking-tighter",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface TypographyH2Props
  extends React.BaseHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyH2Variants> {
  asChild?: boolean;
}

const TypographyH2 = React.forwardRef<HTMLHeadingElement, TypographyH2Props>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h2";
    return (
      <Comp
        className={cn(typographyH2Variants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
TypographyH2.displayName = "TypographyH2";

export { TypographyH2, typographyH2Variants };
