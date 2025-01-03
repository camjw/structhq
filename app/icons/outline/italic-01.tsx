import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Italic01IconInner(
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
        d="M19 4H10M14 20H5M15 4L9 20"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Italic01Icon = forwardRef(Italic01IconInner);
export { Italic01Icon };
