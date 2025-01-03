import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ChevronDownDoubleIconInner(
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
        d="M7 13L12 18L17 13M7 6L12 11L17 6"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ChevronDownDoubleIcon = forwardRef(ChevronDownDoubleIconInner);
export { ChevronDownDoubleIcon };
