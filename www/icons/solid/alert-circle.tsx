import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function AlertCircleIconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V8ZM12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17H12.01C12.5623 17 13.01 16.5523 13.01 16C13.01 15.4477 12.5623 15 12.01 15H12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const AlertCircleIcon = forwardRef(AlertCircleIconInner);
export { AlertCircleIcon };
