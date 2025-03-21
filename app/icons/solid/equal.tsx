import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function EqualIconInner(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 9C4 8.44772 4.44772 8 5 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10H5C4.44772 10 4 9.55228 4 9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 15C4 14.4477 4.44772 14 5 14H19C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16H5C4.44772 16 4 15.5523 4 15Z"
        fill="currentColor"
      />
    </svg>
  );
}
const EqualIcon = forwardRef(EqualIconInner);
export { EqualIcon };
