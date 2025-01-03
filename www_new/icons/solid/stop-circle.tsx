import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function StopCircleIconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM8.10899 8.54601C8 8.75992 8 9.03995 8 9.6V14.4C8 14.9601 8 15.2401 8.10899 15.454C8.20487 15.6422 8.35785 15.7951 8.54601 15.891C8.75992 16 9.03995 16 9.6 16H14.4C14.9601 16 15.2401 16 15.454 15.891C15.6422 15.7951 15.7951 15.6422 15.891 15.454C16 15.2401 16 14.9601 16 14.4V9.6C16 9.03995 16 8.75992 15.891 8.54601C15.7951 8.35785 15.6422 8.20487 15.454 8.10899C15.2401 8 14.9601 8 14.4 8H9.6C9.03995 8 8.75992 8 8.54601 8.10899C8.35785 8.20487 8.20487 8.35785 8.10899 8.54601Z"
        fill="currentColor"
      />
    </svg>
  );
}
const StopCircleIcon = forwardRef(StopCircleIconInner);
export { StopCircleIcon };
