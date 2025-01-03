import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BarLineChartIconInner(
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
        d="M10.2322 2.73223C11.2085 1.75592 12.7915 1.75592 13.7678 2.73223C14.2224 3.18685 14.4653 3.77298 14.4965 4.36816L18.2057 5.75911L18.2322 5.73223C19.2085 4.75592 20.7915 4.75592 21.7678 5.73223C22.7441 6.70854 22.7441 8.29146 21.7678 9.26777C20.7915 10.2441 19.2085 10.2441 18.2322 9.26777C17.7776 8.81313 17.5347 8.22696 17.5035 7.63175L13.7943 6.24082C13.7855 6.24986 13.7767 6.25884 13.7678 6.26777C12.9545 7.08104 11.7203 7.21685 10.7664 6.6752L6.43334 9.92503C6.62507 10.7399 6.40321 11.6323 5.76777 12.2678C4.79146 13.2441 3.20854 13.2441 2.23223 12.2678C1.25592 11.2915 1.25592 9.70854 2.23223 8.73223C3.04552 7.91894 4.27975 7.78314 5.23361 8.32483L9.56668 5.07503C9.37492 4.26013 9.59677 3.36769 10.2322 2.73223Z"
        fill="currentColor"
      />
      <path
        d="M20 12C20.5523 12 21 12.4477 21 13V20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20V13C19 12.4477 19.4477 12 20 12Z"
        fill="currentColor"
      />
      <path
        d="M13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10L11 20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20L13 10Z"
        fill="currentColor"
      />
      <path
        d="M4 15C4.55228 15 5 15.4477 5 16L5 20C5 20.5523 4.55228 21 4 21C3.44772 21 3 20.5523 3 20L3 16C3 15.4477 3.44772 15 4 15Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BarLineChartIcon = forwardRef(BarLineChartIconInner);
export { BarLineChartIcon };
