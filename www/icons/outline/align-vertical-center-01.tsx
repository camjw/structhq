import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function AlignVerticalCenter01IconInner(
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
        d="M3 12H21M12 2V8.5M12 8.5L16 4.5M12 8.5L8 4.5M12 22V15.5M12 15.5L16 19.5M12 15.5L8 19.5"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const AlignVerticalCenter01Icon = forwardRef(AlignVerticalCenter01IconInner);
export { AlignVerticalCenter01Icon };
