import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CurrencyDollarIconInner(
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
        d="M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V3H10C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13H11V19H10C8.34315 19 7 17.6569 7 16C7 15.4477 6.55228 15 6 15C5.44772 15 5 15.4477 5 16C5 18.7614 7.23858 21 10 21H11V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V21H14C16.7614 21 19 18.7614 19 16C19 13.2386 16.7614 11 14 11H13V5H14C15.6569 5 17 6.34315 17 8C17 8.55228 17.4477 9 18 9C18.5523 9 19 8.55228 19 8C19 5.23858 16.7614 3 14 3H13V2ZM11 5H10C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11H11V5ZM13 13V19H14C15.6569 19 17 17.6569 17 16C17 14.3431 15.6569 13 14 13H13Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CurrencyDollarIcon = forwardRef(CurrencyDollarIconInner);
export { CurrencyDollarIcon };
