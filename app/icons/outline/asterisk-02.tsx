import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Asterisk02IconInner(
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
        d="M12 4V20M18 6L6 18M20 12H4M18 18L6 6"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Asterisk02Icon = forwardRef(Asterisk02IconInner);
export { Asterisk02Icon };
