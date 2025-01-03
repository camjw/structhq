import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Toggle01RightIconInner(
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
        d="M17 6C20.3137 6 23 8.68629 23 12C23 15.3137 20.3137 18 17 18H7C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6H17ZM12.5278 16C11.5777 14.9385 11 13.5367 11 12C11 10.4633 11.5777 9.06151 12.5278 8H7C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16H12.5278Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Toggle01RightIcon = forwardRef(Toggle01RightIconInner);
export { Toggle01RightIcon };
