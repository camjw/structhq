import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Recording03IconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM14 6C14.5523 6 15 6.44772 15 7V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V7C13 6.44772 13.4477 6 14 6ZM11 9C11 8.44772 10.5523 8 10 8C9.44771 8 9 8.44772 9 9V15C9 15.5523 9.44772 16 10 16C10.5523 16 11 15.5523 11 15V9ZM7 11C7 10.4477 6.55228 10 6 10C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14C6.55228 14 7 13.5523 7 13V11ZM19 11C19 10.4477 18.5523 10 18 10C17.4477 10 17 10.4477 17 11V13C17 13.5523 17.4477 14 18 14C18.5523 14 19 13.5523 19 13V11Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Recording03Icon = forwardRef(Recording03IconInner);
export { Recording03Icon };