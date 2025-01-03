import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Headphones02IconInner(
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
        d="M1 13C1 6.92487 5.92487 2 12 2C18.0751 2 23 6.92487 23 13V17C23 17.5523 22.5523 18 22 18C21.4477 18 21 17.5523 21 17V13C21 8.02944 16.9706 4 12 4C7.02944 4 3 8.02944 3 13V17C3 17.5523 2.55228 18 2 18C1.44772 18 1 17.5523 1 17V13Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 15.5C4 13.567 5.567 12 7.5 12C9.433 12 11 13.567 11 15.5V18.5C11 20.433 9.433 22 7.5 22C5.567 22 4 20.433 4 18.5V15.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 12C14.567 12 13 13.567 13 15.5V18.5C13 20.433 14.567 22 16.5 22C18.433 22 20 20.433 20 18.5V15.5C20 13.567 18.433 12 16.5 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Headphones02Icon = forwardRef(Headphones02IconInner);
export { Headphones02Icon };
