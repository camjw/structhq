import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ChevronSelectorVerticalIconInner(
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
        d="M7 15L12 20L17 15M7 9L12 4L17 9"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ChevronSelectorVerticalIcon = forwardRef(
  ChevronSelectorVerticalIconInner,
);
export { ChevronSelectorVerticalIcon };
