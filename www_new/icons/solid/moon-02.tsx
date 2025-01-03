import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Moon02IconInner(
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
        d="M11.5395 2.91375C11.9489 2.68037 12.1398 2.19279 11.9977 1.74343C11.8556 1.29408 11.4191 1.00494 10.9499 1.04942C5.36684 1.57878 1 6.27878 1 11.9999C1 18.075 5.92487 22.9999 12 22.9999C17.7208 22.9999 22.4206 18.6335 22.9504 13.0509C22.9949 12.5817 22.7058 12.1451 22.2564 12.003C21.8071 11.8608 21.3195 12.0517 21.0861 12.4612C19.8798 14.5771 17.6055 16.0001 15 16.0001C11.134 16.0001 8 12.8661 8 9.00012C8 6.39446 9.4232 4.11995 11.5395 2.91375Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Moon02Icon = forwardRef(Moon02IconInner);
export { Moon02Icon };