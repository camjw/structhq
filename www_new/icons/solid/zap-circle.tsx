import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ZapCircleIconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM7.36156 12.2468L12 5.5V10.5H15.9791C16.472 10.5 16.7185 10.5 16.8528 10.6025C16.9698 10.6918 17.0415 10.8282 17.0488 10.9752C17.0572 11.144 16.9176 11.3471 16.6384 11.7532L12 18.5V13.5H8.02079C7.52792 13.5 7.28148 13.5 7.14713 13.3975C7.03012 13.3082 6.9584 13.1718 6.9511 13.0248C6.94272 12.856 7.08233 12.6529 7.36156 12.2468Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ZapCircleIcon = forwardRef(ZapCircleIconInner);
export { ZapCircleIcon };
