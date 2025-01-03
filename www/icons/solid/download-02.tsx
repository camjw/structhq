import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Download02IconInner(
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
        d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V14.5858L6.70711 10.2929C6.31658 9.90237 5.68342 9.90237 5.29289 10.2929C4.90237 10.6834 4.90237 11.3166 5.29289 11.7071L11.2929 17.7071C11.6834 18.0976 12.3166 18.0976 12.7071 17.7071L18.7071 11.7071C19.0976 11.3166 19.0976 10.6834 18.7071 10.2929C18.3166 9.90237 17.6834 9.90237 17.2929 10.2929L13 14.5858V3Z"
        fill="currentColor"
      />
      <path
        d="M2 21C2 20.4477 2.44772 20 3 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Download02Icon = forwardRef(Download02IconInner);
export { Download02Icon };
