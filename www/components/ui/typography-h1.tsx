import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyH1Variants = cva("font-medium font-geist", {
  variants: {
    size: {
      default: "text-2xl sm:text-4xl !leading-[133%]",
      blog: "text-3xl xs:text-4xl md:text-[60px] lg:text-7xl tracking-tighter !leading-[1.125]",
      lg: "text-4xl xs:text-5xl md:text-[80px] lg:text-8xl tracking-tight !leading-[1.125]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface TypographyH1Props
  extends React.BaseHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyH1Variants> {
  asChild?: boolean;
}

const TypographyH1 = React.forwardRef<HTMLHeadingElement, TypographyH1Props>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h1";
    return (
      <Comp
        className={cn(typographyH1Variants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
TypographyH1.displayName = "TypographyH1";

export { TypographyH1, typographyH1Variants };
