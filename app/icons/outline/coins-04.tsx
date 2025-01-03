import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Coins04IconInner(
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
        d="M10.101 4C11.3636 2.76281 13.0927 2 15 2C18.866 2 22 5.13401 22 9C22 10.9073 21.2372 12.6365 19.9999 13.899M7.5 13L9 12V17.5M7.5 17.5H10.5M16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8C12.866 8 16 11.134 16 15Z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Coins04Icon = forwardRef(Coins04IconInner);
export { Coins04Icon };
