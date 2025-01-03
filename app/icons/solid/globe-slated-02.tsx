import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function GlobeSlated02IconInner(
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
        d="M17.5104 2.07561C17.9009 1.68508 18.5341 1.68508 18.9246 2.07561C23.0251 6.17611 23.0251 12.8243 18.9246 16.9248C17.2569 18.5926 15.1678 19.582 13 19.8932V21H17C17.5523 21 18 21.4477 18 22C18 22.5523 17.5523 23 17 23H7C6.44772 23 6 22.5523 6 22C6 21.4477 6.44772 21 7 21H11V19.9884C8.79411 19.8839 6.61489 19.0873 4.81565 17.5987L3.36824 19.0461C2.97772 19.4366 2.34455 19.4366 1.95403 19.0461C1.5635 18.6556 1.5635 18.0224 1.95403 17.6319L5.89366 13.6922C5.01842 12.5236 4.5 11.0724 4.5 9.5C4.5 5.63401 7.63401 2.5 11.5 2.5C15.366 2.5 18.5 5.63401 18.5 9.5C18.5 13.366 15.366 16.5 11.5 16.5C9.92769 16.5 8.47646 15.9816 7.30789 15.1064L6.23778 16.1765C9.57398 18.8129 14.4301 18.5909 17.5104 15.5106C20.8298 12.1912 20.8298 6.80928 17.5104 3.48982C17.1199 3.0993 17.1199 2.46613 17.5104 2.07561Z"
        fill="currentColor"
      />
    </svg>
  );
}
const GlobeSlated02Icon = forwardRef(GlobeSlated02IconInner);
export { GlobeSlated02Icon };
