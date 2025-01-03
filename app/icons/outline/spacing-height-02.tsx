import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function SpacingHeight02IconInner(
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
        d="M21 3H3M21 21H3M12 17.5L12 6.50004M15.0001 6.50001L9 6.5M15.0001 17.5L9 17.5"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const SpacingHeight02Icon = forwardRef(SpacingHeight02IconInner);
export { SpacingHeight02Icon };
