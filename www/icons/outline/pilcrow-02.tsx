import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Pilcrow02IconInner(
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
        d="M17.5 4V20M19.5 4H9C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12H14M14 4V20M12 20H19.5"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Pilcrow02Icon = forwardRef(Pilcrow02IconInner);
export { Pilcrow02Icon };
