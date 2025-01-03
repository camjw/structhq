import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowNarrowUpLeftIconInner(
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
        d="M6 5C5.44772 5 5 5.44772 5 6V14C5 14.5523 5.44772 15 6 15C6.55228 15 7 14.5523 7 14V8.41421L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L8.41421 7H14C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5H6Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowNarrowUpLeftIcon = forwardRef(ArrowNarrowUpLeftIconInner);
export { ArrowNarrowUpLeftIcon };
