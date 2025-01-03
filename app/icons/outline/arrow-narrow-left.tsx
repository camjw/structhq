import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowNarrowLeftIconInner(
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
        d="M20 12H4M4 12L10 18M4 12L10 6"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ArrowNarrowLeftIcon = forwardRef(ArrowNarrowLeftIconInner);
export { ArrowNarrowLeftIcon };
