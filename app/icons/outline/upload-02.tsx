import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Upload02IconInner(
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
        d="M21 3H3M18 13L12 7M12 7L6 13M12 7V21"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Upload02Icon = forwardRef(Upload02IconInner);
export { Upload02Icon };
