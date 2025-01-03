import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyH4Variants = cva(
  "font-semibold !leading-[120%] tracking-tight text-gray-12",
  {
    variants: {
      size: {
        default: "text-xl",
        lg: "text-xl xl:text-3xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface TypographyH4Props
  extends React.BaseHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyH4Variants> {
  asChild?: boolean;
}

const TypographyH4 = React.forwardRef<HTMLHeadingElement, TypographyH4Props>(
  ({ className, asChild = false, size, ...props }, ref) => {
    const Comp = asChild ? Slot : "h4";
    return (
      <Comp
        className={cn(typographyH4Variants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
TypographyH4.displayName = "TypographyH4";

export { TypographyH4 };
