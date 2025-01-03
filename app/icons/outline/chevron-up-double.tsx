import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ChevronUpDoubleIconInner(
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
        d="M17 18L12 13L7 18M17 11L12 6L7 11"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ChevronUpDoubleIcon = forwardRef(ChevronUpDoubleIconInner);
export { ChevronUpDoubleIcon };
