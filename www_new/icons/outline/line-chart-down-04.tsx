import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function LineChartDown04IconInner(
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
        d="M3 9L9.65533 13.7538C9.85422 13.8959 10.1267 13.8733 10.2995 13.7005L13.7005 10.2995C13.8733 10.1267 14.1458 10.1041 14.3447 10.2462L21 15M6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21Z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const LineChartDown04Icon = forwardRef(LineChartDown04IconInner);
export { LineChartDown04Icon };
