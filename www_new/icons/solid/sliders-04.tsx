import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Sliders04IconInner(
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
        d="M3 9L14.126 9C14.5701 10.7252 16.1362 12 18 12C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4C16.1362 4 14.5701 5.27477 14.126 7L3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 15L9.87398 15C9.42994 13.2748 7.86384 12 6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20C7.86384 20 9.42994 18.7252 9.87398 17L21 17C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Sliders04Icon = forwardRef(Sliders04IconInner);
export { Sliders04Icon };
