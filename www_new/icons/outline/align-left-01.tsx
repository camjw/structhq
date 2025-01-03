import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function AlignLeft01IconInner(
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
        d="M3 3V21M21 12H7M7 12L14 19M7 12L14 5"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const AlignLeft01Icon = forwardRef(AlignLeft01IconInner);
export { AlignLeft01Icon };
