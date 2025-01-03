import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function AlignRight01IconInner(
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
        d="M21 21V3M3 12H17M17 12L10 5M17 12L10 19"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const AlignRight01Icon = forwardRef(AlignRight01IconInner);
export { AlignRight01Icon };
