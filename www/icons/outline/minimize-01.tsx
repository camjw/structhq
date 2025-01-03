import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Minimize01IconInner(
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
        d="M4 14H10M10 14V20M10 14L3 21M20 10H14M14 10V4M14 10L21 3"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Minimize01Icon = forwardRef(Minimize01IconInner);
export { Minimize01Icon };
