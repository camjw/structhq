"use client";

import * as React from "react";

import { CheckIcon } from "@/icons/outline/check";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "peer flex items-center justify-center shrink-0 rounded border ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "data-[state=checked]:bg-primary-9 data-[state=unchecked]:bg-white data-[state=checked]:text-white data-[state=checked]:hover:border-primary-9 data-[state=checked]:border-gray-3 border-gray-4 group-hover/checkbox:border-primary-9",
      },
      size: {
        default: "h-[15px] w-[15px]",
        sm: "h-3.5 w-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const checkIndicatorVariants = cva("", {
  variants: {
    size: {
      default: "h-[13px] w-[13px]",
      sm: "h-[11px] w-[11px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <div className="px-2 h-full inline-flex items-center justify-center group/checkbox">
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          checkboxVariants({ variant, size, className }),
          "group/checkbox",
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center text-current")}
        >
          <CheckIcon className={cn(checkIndicatorVariants({ size }))} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </div>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
