import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Menu04IconInner(
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
        d="M3 12H21M3 6H21M9 18H21"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Menu04Icon = forwardRef(Menu04IconInner);
export { Menu04Icon };
