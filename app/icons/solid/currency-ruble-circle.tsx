import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CurrencyRubleCircleIconInner(
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
        d="M10.5 10.5V7.5H14C14.8284 7.5 15.5 8.17157 15.5 9C15.5 9.82843 14.8284 10.5 14 10.5H10.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM8.5 6.5C8.5 5.94772 8.94772 5.5 9.5 5.5H14C15.933 5.5 17.5 7.067 17.5 9C17.5 10.933 15.933 12.5 14 12.5H10.5V13.75H13C13.5523 13.75 14 14.1977 14 14.75C14 15.3023 13.5523 15.75 13 15.75H10.5V17.5C10.5 18.0523 10.0523 18.5 9.5 18.5C8.94772 18.5 8.5 18.0523 8.5 17.5V15.75H8C7.44772 15.75 7 15.3023 7 14.75C7 14.1977 7.44772 13.75 8 13.75H8.5V12.5H8C7.44772 12.5 7 12.0523 7 11.5C7 10.9477 7.44772 10.5 8 10.5H8.5V6.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CurrencyRubleCircleIcon = forwardRef(CurrencyRubleCircleIconInner);
export { CurrencyRubleCircleIcon };
