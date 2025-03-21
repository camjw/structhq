import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Bold01IconInner(
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
        d="M6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H15C17.7614 21 20 18.7614 20 16C20 14.123 18.9657 12.4875 17.4359 11.6325C18.3991 10.7211 19 9.43071 19 8C19 5.23858 16.7614 3 14 3H6ZM14 11C15.6569 11 17 9.65685 17 8C17 6.34315 15.6569 5 14 5H7V11H14ZM7 13V19H15C16.6569 19 18 17.6569 18 16C18 14.3431 16.6569 13 15 13H7Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Bold01Icon = forwardRef(Bold01IconInner);
export { Bold01Icon };
