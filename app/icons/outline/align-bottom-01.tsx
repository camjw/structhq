import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function AlignBottom01IconInner(
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
        d="M3 21H21M12 3V17M12 17L19 10M12 17L5 10"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const AlignBottom01Icon = forwardRef(AlignBottom01IconInner);
export { AlignBottom01Icon };
