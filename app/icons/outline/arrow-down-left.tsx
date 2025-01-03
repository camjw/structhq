import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowDownLeftIconInner(
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
        d="M17 7L7 17M7 17H17M7 17V7"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ArrowDownLeftIcon = forwardRef(ArrowDownLeftIconInner);
export { ArrowDownLeftIcon };
