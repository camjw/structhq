import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ClockIconInner(
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
        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.3788 11.214 12.725 11.5528 12.8944L15.5528 14.8944C16.0468 15.1414 16.6474 14.9412 16.8944 14.4472C17.1414 13.9532 16.9412 13.3526 16.4472 13.1056L13 11.382V6Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ClockIcon = forwardRef(ClockIconInner);
export { ClockIcon };
