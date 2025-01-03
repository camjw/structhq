import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function AlignTop01IconInner(
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
        d="M21 3H3M12 21V7M12 7L5 14M12 7L19 14"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const AlignTop01Icon = forwardRef(AlignTop01IconInner);
export { AlignTop01Icon };
