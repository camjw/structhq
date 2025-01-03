import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Download02IconInner(
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
        d="M21 21H3M18 11L12 17M12 17L6 11M12 17V3"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Download02Icon = forwardRef(Download02IconInner);
export { Download02Icon };
