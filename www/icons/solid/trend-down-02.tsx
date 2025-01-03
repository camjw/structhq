import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function TrendDown02IconInner(
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
        d="M7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L14.5858 16H7C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6C16.4477 6 16 6.44772 16 7V14.5858L7.70711 6.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}
const TrendDown02Icon = forwardRef(TrendDown02IconInner);
export { TrendDown02Icon };
