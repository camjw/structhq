import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function FilterLinesIconInner(
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
        d="M6 12H18M3 6H21M9 18H15"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const FilterLinesIcon = forwardRef(FilterLinesIconInner);
export { FilterLinesIcon };
