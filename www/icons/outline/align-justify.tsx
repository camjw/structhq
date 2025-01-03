import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function AlignJustifyIconInner(
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
        d="M21 10H3M21 18H3M21 6H3M21 14H3"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const AlignJustifyIcon = forwardRef(AlignJustifyIconInner);
export { AlignJustifyIcon };
