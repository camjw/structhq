import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Server02IconInner(
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
        d="M5.5 2C3.01472 2 1 4.01472 1 6.5C1 8.98528 3.01472 11 5.5 11H18.5C20.9853 11 23 8.98528 23 6.5C23 4.01472 20.9853 2 18.5 2H5.5ZM4.75 6.5C4.75 5.80964 5.30964 5.25 6 5.25C6.69036 5.25 7.25 5.80964 7.25 6.5C7.25 7.19036 6.69036 7.75 6 7.75C5.30964 7.75 4.75 7.19036 4.75 6.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 13C3.01472 13 1 15.0147 1 17.5C1 19.9853 3.01472 22 5.5 22H18.5C20.9853 22 23 19.9853 23 17.5C23 15.0147 20.9853 13 18.5 13H5.5ZM6 16.25C5.30964 16.25 4.75 16.8096 4.75 17.5C4.75 18.1904 5.30964 18.75 6 18.75C6.69036 18.75 7.25 18.1904 7.25 17.5C7.25 16.8096 6.69036 16.25 6 16.25Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Server02Icon = forwardRef(Server02IconInner);
export { Server02Icon };
