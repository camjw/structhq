import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BarChartCircle01IconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V7ZM16 10C16.5523 10 17 10.4477 17 11V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V11C15 10.4477 15.4477 10 16 10ZM8 12C8.55228 12 9 12.4477 9 13V17C9 17.5523 8.55229 18 8 18C7.44772 18 7 17.5523 7 17V13C7 12.4477 7.44772 12 8 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BarChartCircle01Icon = forwardRef(BarChartCircle01IconInner);
export { BarChartCircle01Icon };
