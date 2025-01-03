import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { FormField, FormFieldInputProps } from "@/components/ui/form";

import { cn } from "@/lib/utils";

const inputVariants = cva("flex w-full", {
  variants: {
    variant: {
      default:
        "rounded-md border border-gray-4 focus:border-primary-10 bg-white shadow-sm px-3 py-1 transition-colors placeholder:text-gray-9 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
      borderless:
        "bg-white px-3 py-1 transition-colors placeholder:text-gray-9 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
    },
    height: {
      default: "h-9 text-base",
      sm: "h-7 text-sm",
      md: "h-8 text-base",
      lg: "h-12 text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    height: "default",
  },
});

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FormFieldInputProps &
  VariantProps<typeof inputVariants>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error,
      name,
      label,
      tooltip,
      message,
      variant,
      height,
      autoComplete = "off",
      ...props
    },
    ref,
  ) => {
    return (
      <FormField {...{ error, name, label, tooltip, message }}>
        <input
          name={name}
          id={props.id ?? name}
          type={type}
          className={cn(inputVariants({ variant, height }), className)}
          autoComplete={autoComplete}
          ref={ref}
          {...props}
        />
      </FormField>
    );
  },
);
Input.displayName = "Input";

export { Input };
