import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BarChart05IconInner(
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
        d="M3 17V21M15 8V21M9 13V21M21 3V21"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const BarChart05Icon = forwardRef(BarChart05IconInner);
export { BarChart05Icon };
