import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Monitor04IconInner(
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
        d="M15 17V21H9V17M5.2 17H18.8C19.9201 17 20.4802 17 20.908 16.782C21.2843 16.5903 21.5903 16.2843 21.782 15.908C22 15.4802 22 14.9201 22 13.8V6.2C22 5.0799 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H5.2C4.07989 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.07989 2 6.2V13.8C2 14.9201 2 15.4802 2.21799 15.908C2.40973 16.2843 2.71569 16.5903 3.09202 16.782C3.51984 17 4.0799 17 5.2 17Z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Monitor04Icon = forwardRef(Monitor04IconInner);
export { Monitor04Icon };
