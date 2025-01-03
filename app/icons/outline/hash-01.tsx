import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Hash01IconInner(
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
        d="M4 8H20M4 16H20M8 3V21M16 3V21"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Hash01Icon = forwardRef(Hash01IconInner);
export { Hash01Icon };
