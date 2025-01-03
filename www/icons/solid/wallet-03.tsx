import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Wallet03IconInner(
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
        d="M5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6L19 6C20.6569 6 22 7.34315 22 9V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H17C17.5523 2 18 2.44772 18 3C18 3.55228 17.5523 4 17 4H5ZM16.5 12.5C15.6716 12.5 15 13.1716 15 14C15 14.8284 15.6716 15.5 16.5 15.5C17.3284 15.5 18 14.8284 18 14C18 13.1716 17.3284 12.5 16.5 12.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Wallet03Icon = forwardRef(Wallet03IconInner);
export { Wallet03Icon };
