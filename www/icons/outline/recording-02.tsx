import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Recording02IconInner(
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
        d="M3 10L3 14M7.5 11V13M12 6V18M16.5 3V21M21 10V14"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Recording02Icon = forwardRef(Recording02IconInner);
export { Recording02Icon };
