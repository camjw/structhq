import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Recording02IconInner(
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
        d="M3 9C3.55228 9 4 9.44772 4 10V14C4 14.5523 3.55228 15 3 15C2.44772 15 2 14.5523 2 14L2 10C2 9.44772 2.44772 9 3 9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 10C8.05228 10 8.5 10.4477 8.5 11V13C8.5 13.5523 8.05228 14 7.5 14C6.94772 14 6.5 13.5523 6.5 13V11C6.5 10.4477 6.94772 10 7.5 10Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5C12.5523 5 13 5.44772 13 6V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V6C11 5.44772 11.4477 5 12 5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 2C17.0523 2 17.5 2.44772 17.5 3V21C17.5 21.5523 17.0523 22 16.5 22C15.9477 22 15.5 21.5523 15.5 21V3C15.5 2.44772 15.9477 2 16.5 2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 9C21.5523 9 22 9.44772 22 10V14C22 14.5523 21.5523 15 21 15C20.4477 15 20 14.5523 20 14V10C20 9.44772 20.4477 9 21 9Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Recording02Icon = forwardRef(Recording02IconInner);
export { Recording02Icon };
