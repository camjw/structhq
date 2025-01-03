import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function AlignLeft01IconInner(
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
        d="M3 2C3.55229 2 4 2.44772 4 3L4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21V3C2 2.44772 2.44772 2 3 2Z"
        fill="currentColor"
      />
      <path
        d="M9.41421 11L14.7071 5.70711C15.0976 5.31658 15.0976 4.68342 14.7071 4.29289C14.3166 3.90237 13.6834 3.90237 13.2929 4.29289L6.29289 11.2929C5.90237 11.6834 5.90237 12.3166 6.29289 12.7071L13.2929 19.7071C13.6834 20.0976 14.3166 20.0976 14.7071 19.7071C15.0976 19.3166 15.0976 18.6834 14.7071 18.2929L9.41421 13L21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11L9.41421 11Z"
        fill="currentColor"
      />
    </svg>
  );
}
const AlignLeft01Icon = forwardRef(AlignLeft01IconInner);
export { AlignLeft01Icon };