import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Cloud03IconInner(
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
        d="M9.5 3C4.80558 3 1 6.80558 1 11.5C1 16.1944 4.80558 20 9.5 20H16.5C20.0898 20 23 17.0899 23 13.5C23 9.9819 20.205 7.11661 16.7144 7.00347C15.2141 4.6011 12.5447 3 9.5 3Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Cloud03Icon = forwardRef(Cloud03IconInner);
export { Cloud03Icon };