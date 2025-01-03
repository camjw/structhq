import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Menu05IconInner(
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
        d="M3 8.5H21M3 15.5H21"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Menu05Icon = forwardRef(Menu05IconInner);
export { Menu05Icon };
