import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BarChart02IconInner(
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
        d="M18 3C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V4C17 3.44772 17.4477 3 18 3Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 15C6.55228 15 7 15.4477 7 16V20C7 20.5523 6.55228 21 6 21C5.44772 21 5 20.5523 5 20V16C5 15.4477 5.44772 15 6 15Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9C12.5523 9 13 9.44772 13 10V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V10C11 9.44772 11.4477 9 12 9Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BarChart02Icon = forwardRef(BarChart02IconInner);
export { BarChart02Icon };
