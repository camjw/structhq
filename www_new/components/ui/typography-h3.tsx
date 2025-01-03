import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export interface TypographyH3Props
  extends React.BaseHTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}

const typographyH3Variants = cva(
  "font-semibold !leading-[120%] tracking-tighter text-gray-12",
  {
    variants: {
      size: {
        default: "text-lg",
        lg: "text-xl xl:text-5xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface TypographyH3Props
  extends React.BaseHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyH3Variants> {
  asChild?: boolean;
}

const TypographyH3 = React.forwardRef<HTMLHeadingElement, TypographyH3Props>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h3";
    return (
      <Comp
        className={cn(typographyH3Variants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
TypographyH3.displayName = "TypographyH3";

export { TypographyH3 };
