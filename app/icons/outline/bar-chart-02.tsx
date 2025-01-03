import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BarChart02IconInner(
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
        d="M18 20V4M6 20V16M12 20V10"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const BarChart02Icon = forwardRef(BarChart02IconInner);
export { BarChart02Icon };
