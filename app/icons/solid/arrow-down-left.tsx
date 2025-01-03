import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowDownLeftIconInner(
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
        d="M9.41421 16L17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L8 14.5858V7C8 6.44772 7.55228 6 7 6C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16H9.41421Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowDownLeftIcon = forwardRef(ArrowDownLeftIconInner);
export { ArrowDownLeftIcon };
