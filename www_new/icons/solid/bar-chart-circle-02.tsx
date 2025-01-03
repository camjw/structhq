import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BarChartCircle02IconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM17 7C17 6.44772 16.5523 6 16 6C15.4477 6 15 6.44772 15 7V17C15 17.5523 15.4477 18 16 18C16.5523 18 17 17.5523 17 17V7ZM12 10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11C11 10.4477 11.4477 10 12 10ZM8 14C8.55228 14 9 14.4477 9 15V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V15C7 14.4477 7.44772 14 8 14Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BarChartCircle02Icon = forwardRef(BarChartCircle02IconInner);
export { BarChartCircle02Icon };
