import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BarChart06IconInner(
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
        d="M9 8V21M21 17V21M3 3V21M15 13V21"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const BarChart06Icon = forwardRef(BarChart06IconInner);
export { BarChart06Icon };
