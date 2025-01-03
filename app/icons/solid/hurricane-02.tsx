import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Hurricane02IconInner(
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
        d="M10 19C10.3395 19 10.6734 18.9758 11 18.9291C7.60771 18.4439 5 15.5265 5 12C5 7.02944 9.02944 3 14 3C18.9706 3 23 7.02944 23 12C23 12.5523 22.5523 13 22 13C21.4477 13 21 12.5523 21 12C21 8.13401 17.866 5 14 5C13.6605 5 13.3266 5.02417 13 5.07089C16.3923 5.55612 19 8.47353 19 12C19 16.9706 14.9706 21 10 21C5.02944 21 1 16.9706 1 12C1 11.4477 1.44772 11 2 11C2.55228 11 3 11.4477 3 12C3 15.866 6.13401 19 10 19ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Hurricane02Icon = forwardRef(Hurricane02IconInner);
export { Hurricane02Icon };
