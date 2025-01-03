import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ChevronRightDoubleIconInner(
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
        d="M6 17L11 12L6 7M13 17L18 12L13 7"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ChevronRightDoubleIcon = forwardRef(ChevronRightDoubleIconInner);
export { ChevronRightDoubleIcon };
