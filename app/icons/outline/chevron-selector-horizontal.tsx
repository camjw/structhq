import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ChevronSelectorHorizontalIconInner(
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
        d="M9 7L4 12L9 17M15 7L20 12L15 17"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ChevronSelectorHorizontalIcon = forwardRef(
  ChevronSelectorHorizontalIconInner,
);
export { ChevronSelectorHorizontalIcon };
