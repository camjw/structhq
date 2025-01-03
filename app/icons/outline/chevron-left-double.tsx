import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ChevronLeftDoubleIconInner(
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
        d="M18 17L13 12L18 7M11 17L6 12L11 7"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ChevronLeftDoubleIcon = forwardRef(ChevronLeftDoubleIconInner);
export { ChevronLeftDoubleIcon };
