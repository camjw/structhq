import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Settings04IconInner(
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
        d="M14.126 9L3 9C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7L14.126 7C14.5701 5.27477 16.1362 4 18 4C20.2091 4 22 5.79086 22 8C22 10.2091 20.2091 12 18 12C16.1362 12 14.5701 10.7252 14.126 9Z"
        fill="currentColor"
      />
      <path
        d="M6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20C7.86384 20 9.42994 18.7252 9.87398 17L21 17C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15L9.87398 15C9.42994 13.2748 7.86384 12 6 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Settings04Icon = forwardRef(Settings04IconInner);
export { Settings04Icon };
