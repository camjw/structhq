import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BarChart08IconInner(
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
        d="M3 2C3.55229 2 4 2.44772 4 3V17.8C4 18.3766 4.00078 18.7488 4.02393 19.0322C4.04612 19.3038 4.0838 19.4045 4.109 19.454C4.20487 19.6422 4.35785 19.7951 4.54601 19.891C4.59546 19.9162 4.69617 19.9539 4.96784 19.9761C5.25117 19.9992 5.62345 20 6.2 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H6.16152C5.63435 22 5.17956 22 4.80497 21.9694C4.40963 21.9371 4.01641 21.8658 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2.13419 19.9836 2.06287 19.5904 2.03057 19.195C1.99997 18.8205 1.99998 18.3657 2 17.8385L2 3C2 2.44772 2.44772 2 3 2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 13.5C7.55229 13.5 8 13.9477 8 14.5V17.5C8 18.0523 7.55229 18.5 7 18.5C6.44772 18.5 6 18.0523 6 17.5V14.5C6 13.9477 6.44772 13.5 7 13.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 10.5C12.0523 10.5 12.5 10.9477 12.5 11.5V17.5C12.5 18.0523 12.0523 18.5 11.5 18.5C10.9477 18.5 10.5 18.0523 10.5 17.5V11.5C10.5 10.9477 10.9477 10.5 11.5 10.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 7.5C16.5523 7.5 17 7.94772 17 8.5V17.5C17 18.0523 16.5523 18.5 16 18.5C15.4477 18.5 15 18.0523 15 17.5V8.5C15 7.94772 15.4477 7.5 16 7.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 4.5C21.0523 4.5 21.5 4.94772 21.5 5.5V17.5C21.5 18.0523 21.0523 18.5 20.5 18.5C19.9477 18.5 19.5 18.0523 19.5 17.5V5.5C19.5 4.94772 19.9477 4.5 20.5 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BarChart08Icon = forwardRef(BarChart08IconInner);
export { BarChart08Icon };
