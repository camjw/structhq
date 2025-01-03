import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Speedometer03IconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM6 12C6 8.68629 8.68629 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C7.58172 4 4 7.58172 4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12ZM17.207 8.20711C17.5975 7.81658 17.5975 7.18342 17.207 6.79289C16.8165 6.40237 16.1833 6.40237 15.7928 6.79289L12.5179 10.0677C12.3527 10.0235 12.1791 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 11.8208 13.9764 11.6471 13.9322 11.4819L17.207 8.20711Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Speedometer03Icon = forwardRef(Speedometer03IconInner);
export { Speedometer03Icon };