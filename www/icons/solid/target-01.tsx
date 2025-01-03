import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Target01IconInner(
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
        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM15 12C15 11.4477 15.4477 11 16 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H16C15.4477 13 15 12.5523 15 12ZM4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H8C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11H4ZM12 3C12.5523 3 13 3.44772 13 4V8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8V4C11 3.44772 11.4477 3 12 3ZM13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V16Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Target01Icon = forwardRef(Target01IconInner);
export { Target01Icon };
