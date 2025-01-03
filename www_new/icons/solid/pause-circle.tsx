import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function PauseCircleIconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM10.5 9C10.5 8.44772 10.0523 8 9.5 8C8.94772 8 8.5 8.44772 8.5 9V15C8.5 15.5523 8.94772 16 9.5 16C10.0523 16 10.5 15.5523 10.5 15V9ZM15.5 9C15.5 8.44772 15.0523 8 14.5 8C13.9477 8 13.5 8.44772 13.5 9V15C13.5 15.5523 13.9477 16 14.5 16C15.0523 16 15.5 15.5523 15.5 15V9Z"
        fill="currentColor"
      />
    </svg>
  );
}
const PauseCircleIcon = forwardRef(PauseCircleIconInner);
export { PauseCircleIcon };
