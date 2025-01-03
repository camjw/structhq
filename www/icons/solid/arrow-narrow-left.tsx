import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowNarrowLeftIconInner(
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
        d="M10.7071 6.70711C11.0976 6.31658 11.0976 5.68342 10.7071 5.29289C10.3166 4.90237 9.68342 4.90237 9.29289 5.29289L3.29289 11.2929C2.90237 11.6834 2.90237 12.3166 3.29289 12.7071L9.29289 18.7071C9.68342 19.0976 10.3166 19.0976 10.7071 18.7071C11.0976 18.3166 11.0976 17.6834 10.7071 17.2929L6.41421 13L20 13C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L6.41421 11L10.7071 6.70711Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowNarrowLeftIcon = forwardRef(ArrowNarrowLeftIconInner);
export { ArrowNarrowLeftIcon };