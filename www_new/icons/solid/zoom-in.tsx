import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ZoomInIconInner(
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
        d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2928 21.707C20.6833 22.0975 21.3165 22.0975 21.707 21.707C22.0975 21.3165 22.0975 20.6833 21.707 20.2928L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2ZM11 7C11.5523 7 12 7.44772 12 8V10H14C14.5523 10 15 10.4477 15 11C15 11.5523 14.5523 12 14 12H12V14C12 14.5523 11.5523 15 11 15C10.4477 15 10 14.5523 10 14V12H8C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10H10V8C10 7.44772 10.4477 7 11 7Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ZoomInIcon = forwardRef(ZoomInIconInner);
export { ZoomInIcon };
