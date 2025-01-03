import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Hurricane03IconInner(
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
        d="M21 4H3M20 8L6 8M18 12L9 12M15 16L8 16M17 20H12"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Hurricane03Icon = forwardRef(Hurricane03IconInner);
export { Hurricane03Icon };
