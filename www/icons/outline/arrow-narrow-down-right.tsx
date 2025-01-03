import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowNarrowDownRightIconInner(
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
        d="M6 6L18 18M18 18V10M18 18H10"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ArrowNarrowDownRightIcon = forwardRef(ArrowNarrowDownRightIconInner);
export { ArrowNarrowDownRightIcon };
