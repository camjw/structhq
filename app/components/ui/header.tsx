import React from "react";

import { type VariantProps, cva } from "class-variance-authority";

const headerVariants = cva(
  "font-display select-none text-center text-gray-12",
  {
    variants: {
      variant: {
        default: "font-semibold text-3xl",
        xl: "font-semibold text-6xl",
        sm: "font-medium text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type HeaderProps<
  T extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
> = {
  as?: T;
} & (T extends keyof JSX.IntrinsicElements
  ? React.HTMLAttributes<JSX.IntrinsicElements[T]>
  : React.ComponentProps<T>) &
  VariantProps<typeof headerVariants>;

export function Header<T extends React.ElementType = "h1">({
  as: Comp = "h1",
  children,
  variant,
}: HeaderProps<T>) {
  return <Comp className={headerVariants({ variant })}>{children}</Comp>;
}

const subheaderVariants = cva("font-display select-none text-gray-11", {
  variants: {
    variant: {
      default: "text-lg",
      sm: "text-sm",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "default",
    align: "center",
  },
});

type SubheaderProps<
  T extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
> = {
  as?: T;
} & (T extends keyof JSX.IntrinsicElements
  ? React.HTMLAttributes<JSX.IntrinsicElements[T]>
  : React.ComponentProps<T>) &
  VariantProps<typeof subheaderVariants>;

export function SubHeader<T extends React.ElementType = "h3">({
  as: Comp = "h3",
  children,
  variant,
  align,
}: SubheaderProps<T>) {
  return (
    <Comp className={subheaderVariants({ variant, align })}>{children}</Comp>
  );
}
