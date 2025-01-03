import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function AlignRightIconInner(
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
        d="M21 10H8M21 6H4M21 14H4M21 18H8"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const AlignRightIcon = forwardRef(AlignRightIconInner);
export { AlignRightIcon };
