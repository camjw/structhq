import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center rounded-md transition-colors font-medium focus-visible:outline-none disabled:pointer-events-none whitespace-nowrap gap-2 w-fit",
  {
    variants: {
      variant: {
        default:
          "bg-primary-9 text-white hover:bg-primary-10 disabled:bg-primary-7 disabled:text-primary-3 focus-visible:ring-primary-9 border border-primary-10 disabled:border-primary-7 shadow-sm",
        destructive:
          "bg-red-9 text-white hover:bg-red-11 disabled:bg-red-7 disabled:text-red-2 focus-visible:ring-red-9 border border-transparent",
        destructiveOutline:
          "border border-gray-4 bg-white hover:bg-red-3 hover:border-red-4 text-red-10 disabled:bg-red-4 disabled:text-red-8 disabled:border-red-4 focus-visible:ring-red-8/40 focus-visible:ring-[3px] focus-visible:border-red-8",
        outline:
          "border border-gray-4 bg-white hover:bg-gray-3 text-gray-12 disabled:bg-gray-4 disabled:text-gray-8 disabled:border-gray-4 shadow-sm",
        secondary:
          "text-primary-10 hover:text-gray-12 focus-visible:ring-primary-9 border border-transparent",
        tertiary:
          "hover:bg-gray-3 text-gray-12 focus-visible:ring-gray-12 disabled:text-gray-8 border border-transparent",
        solid:
          "bg-gray-3 hover:bg-gray-4 text-gray-12 focus-visible:ring-gray-12 disabled:text-gray-8 border border-transparent",
        ghost:
          "hover:bg-gray-3 text-gray-9 hover:text-gray-12 focus-visible:ring-gray-12 disabled:text-gray-8",
        pill: "rounded-full text-secondary-9 hover:text-primary-2 uppercase font-mono tracking-wider bg-white bg-opacity-10 hover:bg-opacity-20 focus-visible:ring-primary-9",
        pillPrimary:
          "rounded-full text-primary-9 hover:text-secondary-9 uppercase font-mono tracking-wider bg-secondary-9 hover:bg-primary-9 border border-white focus-visible:ring-primary-9",
        pillSecondary:
          "rounded-full text-secondary-10 hover:text-primary-9 uppercase font-mono tracking-wider bg-white hover:bg-secondary-9 border border-white hover:border-secondary-9 focus-visible:ring-primary-9",
        link: "text-primary underline-offset-4 hover:underline focus-visible:ring-primary-9",
        unstyled: "text-primary rounded",
        icon: "text-gray-9 hover:text-gray-12",
      },
      size: {
        default: "h-8 px-3 py-2",
        textSm: "h-6 px-1.5 py-1 !text-xs !rounded",
        sm: "h-7 rounded-md px-2.5 !text-xs",
        lg: "py-[8px] px-3.5",
        xl: "h-12 w-[21rem]",
        icon: "h-7 w-7",
        menu: "h-6 w-6 !rounded-md",
        iconSm: "h-6 w-6",
        hero: "px-8 py-4 !rounded-lg",
        none: "",
      },
      textVariant: {
        default: "text-sm font-medium",
        base: "text-base font-medium",
        lg: "text-lg font-medium",
        hero: "text-3xl font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      textVariant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      textVariant,
      asChild = false,
      isLoading = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ size, variant, textVariant, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
