import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ZoomOutIconInner(
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
        d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2928 21.707C20.6833 22.0975 21.3165 22.0975 21.707 21.707C22.0975 21.3165 22.0975 20.6833 21.707 20.2928L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2ZM8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12H14C14.5523 12 15 11.5523 15 11C15 10.4477 14.5523 10 14 10H8Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ZoomOutIcon = forwardRef(ZoomOutIconInner);
export { ZoomOutIcon };