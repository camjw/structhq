import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function DropperIconInner(
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
        d="M10.5 6.49981L17.5 13.4998M2 21.9998C2 21.9998 6.5 21.4998 9 18.9998L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99982C19.8954 1.89525 18.1046 1.89524 17 2.99981L5 14.9998C2.5 17.4998 2 21.9998 2 21.9998Z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const DropperIcon = forwardRef(DropperIconInner);
export { DropperIcon };
