import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CurrencyDollarCircleIconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM13 5.5C13 4.94772 12.5523 4.5 12 4.5C11.4477 4.5 11 4.94772 11 5.5V6C9.067 6 7.5 7.567 7.5 9.5C7.5 11.433 9.067 13 11 13H13C13.8284 13 14.5 13.6716 14.5 14.5C14.5 15.3284 13.8284 16 13 16H10.8333C10.097 16 9.5 15.403 9.5 14.6667C9.5 14.1144 9.05229 13.6667 8.5 13.6667C7.94772 13.6667 7.5 14.1144 7.5 14.6667C7.5 16.5076 8.99238 18 10.8333 18H11V18.5C11 19.0523 11.4477 19.5 12 19.5C12.5523 19.5 13 19.0523 13 18.5V18C14.933 18 16.5 16.433 16.5 14.5C16.5 12.567 14.933 11 13 11H11C10.1716 11 9.5 10.3284 9.5 9.5C9.5 8.67157 10.1716 8 11 8H13.1667C13.903 8 14.5 8.59695 14.5 9.33333C14.5 9.88562 14.9477 10.3333 15.5 10.3333C16.0523 10.3333 16.5 9.88562 16.5 9.33333C16.5 7.49238 15.0076 6 13.1667 6H13V5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CurrencyDollarCircleIcon = forwardRef(CurrencyDollarCircleIconInner);
export { CurrencyDollarCircleIcon };
