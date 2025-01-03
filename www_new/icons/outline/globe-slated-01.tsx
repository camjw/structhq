import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function GlobeSlated01IconInner(
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
        d="M18.6317 2.36816C23.1227 6.85919 23.1227 14.1406 18.6317 18.6316C14.3308 22.9325 7.47094 23.1146 2.95335 19.178C2.75634 19.0064 2.65783 18.9205 2.61336 18.8032C2.57595 18.7044 2.57176 18.5824 2.60232 18.4813C2.63863 18.3612 2.73705 18.2628 2.93388 18.0659L5.14913 15.8507M17.9999 10.4999C17.9999 14.642 14.6421 17.9999 10.4999 17.9999C6.35779 17.9999 2.99992 14.642 2.99992 10.4999C2.99992 6.35776 6.35779 2.99989 10.4999 2.99989C14.6421 2.99989 17.9999 6.35776 17.9999 10.4999Z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const GlobeSlated01Icon = forwardRef(GlobeSlated01IconInner);
export { GlobeSlated01Icon };
