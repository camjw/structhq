import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowNarrowUpRightIconInner(
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
        d="M10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7H15.5858L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L17 8.41421V14C17 14.5523 17.4477 15 18 15C18.5523 15 19 14.5523 19 14V6C19 5.44772 18.5523 5 18 5H10Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowNarrowUpRightIcon = forwardRef(ArrowNarrowUpRightIconInner);
export { ArrowNarrowUpRightIcon };
