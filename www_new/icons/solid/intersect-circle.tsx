import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function IntersectCircleIconInner(
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
        d="M1 9C1 4.58172 4.58172 1 9 1C12.8003 1 15.9817 3.64986 16.7973 7.2027C16.2196 7.07007 15.618 7 15 7C10.5817 7 7 10.5817 7 15C7 15.618 7.07007 16.2196 7.2027 16.7973C3.64986 15.9817 1 12.8003 1 9Z"
        fill="currentColor"
      />
      <path
        d="M7.2027 16.7973C7.78042 16.9299 8.38203 17 9 17C13.4183 17 17 13.4183 17 9C17 8.38203 16.9299 7.78042 16.7973 7.2027C20.3501 8.0183 23 11.1997 23 15C23 19.4183 19.4183 23 15 23C11.1997 23 8.0183 20.3501 7.2027 16.7973Z"
        fill="currentColor"
      />
    </svg>
  );
}
const IntersectCircleIcon = forwardRef(IntersectCircleIconInner);
export { IntersectCircleIcon };
