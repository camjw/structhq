import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Expand02IconInner(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M3 21L21 3M3 21H9M3 21L3 15M21 3H15M21 3V9"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Expand02Icon = forwardRef(Expand02IconInner);
export { Expand02Icon };
