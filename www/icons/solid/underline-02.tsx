import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Underline02IconInner(
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
        d="M2 4C2 3.44772 2.44772 3 3 3L4.9994 3H5.0006L8.49901 3H8.50099L10.5 3C11.0523 3 11.5 3.44772 11.5 4C11.5 4.55229 11.0523 5 10.5 5L9.5 5V10C9.5 12.7036 11.289 14.9919 13.7495 15.7409C16.2098 14.9921 18 12.7051 18 10V5H17C16.4477 5 16 4.55228 16 4C16 3.44772 16.4477 3 17 3L18.9994 3H19.0006L21 3C21.5523 3 22 3.44772 22 4C22 4.55229 21.5523 5 21 5L20 5V10C20 14.4183 16.4183 18 12 18C7.58172 18 4 14.4183 4 10V5H3C2.44772 5 2 4.55228 2 4ZM3 21C3 20.4477 3.44772 20 4 20H20C20.5523 20 21 20.4477 21 21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Underline02Icon = forwardRef(Underline02IconInner);
export { Underline02Icon };
