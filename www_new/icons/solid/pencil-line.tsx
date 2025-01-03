import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function PencilLineIconInner(
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
        d="M16.2929 2.2927C17.788 0.797613 20.2121 0.797615 21.7072 2.29271C23.2023 3.7878 23.2023 6.21183 21.7072 7.70692L10.3906 19.0235C10.1572 19.257 9.98059 19.4337 9.78113 19.5885C9.60481 19.7253 9.41735 19.8471 9.2207 19.9527C8.99825 20.0721 8.76513 20.1617 8.45696 20.2801L8.33177 20.3283C8.30046 20.3404 8.26937 20.3523 8.23883 20.3641L2.85901 22.4332C2.49016 22.5751 2.07236 22.4864 1.79292 22.207C1.60189 22.016 1.50002 21.7603 1.5 21.4998C1.49998 21.3792 1.52179 21.2576 1.56668 21.1408L3.7197 15.543C3.83815 15.2348 3.92775 15.0016 4.04718 14.7791C4.15273 14.5825 4.27456 14.395 4.41139 14.2187C4.56618 14.0192 4.74283 13.8427 4.97635 13.6093L16.2929 2.2927ZM5.38099 16.7951L4.24108 19.7588L7.20481 18.6189L5.38099 16.7951Z"
        fill="currentColor"
      />
      <path
        d="M13 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21C12 20.4477 12.4477 20 13 20Z"
        fill="currentColor"
      />
    </svg>
  );
}
const PencilLineIcon = forwardRef(PencilLineIconInner);
export { PencilLineIcon };