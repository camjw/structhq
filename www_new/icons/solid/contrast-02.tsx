import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Contrast02IconInner(
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
        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM21 12C21 16.4272 17.8034 20.1078 13.5924 20.8596C13.1385 20.9406 12.9116 20.9811 12.6594 20.8897C12.4608 20.8178 12.24 20.6329 12.1343 20.4501C12 20.2178 12 19.9452 12 19.4V4.6C12 4.0548 12 3.78219 12.1343 3.54993C12.24 3.36711 12.4608 3.18221 12.6594 3.11028C12.9116 3.0189 13.1385 3.05941 13.5924 3.14043C17.8034 3.89223 21 7.57281 21 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Contrast02Icon = forwardRef(Contrast02IconInner);
export { Contrast02Icon };