import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Heading02IconInner(
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
        d="M6 4V20M18 4V20M9.5 4V20M11.5 4H4M18 12H9.5M11.5 20H4M20 20H16M20 4H16"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Heading02Icon = forwardRef(Heading02IconInner);
export { Heading02Icon };
