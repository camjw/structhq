import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function User03IconInner(
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
        d="M2.27242 19.314C4.77828 16.6562 8.20525 15 12 15C15.7948 15 19.2218 16.6562 21.7276 19.314C22.0014 19.6044 22.0763 20.0298 21.9182 20.3962C21.76 20.7627 21.3991 21 21 21H3.00002C2.60091 21 2.24001 20.7627 2.08187 20.3962C1.92373 20.0298 1.99863 19.6044 2.27242 19.314Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.50002 7.5C6.50002 4.46243 8.96246 2 12 2C15.0376 2 17.5 4.46243 17.5 7.5C17.5 10.5376 15.0376 13 12 13C8.96246 13 6.50002 10.5376 6.50002 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const User03Icon = forwardRef(User03IconInner);
export { User03Icon };
