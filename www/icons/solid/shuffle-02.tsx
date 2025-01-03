import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Shuffle02IconInner(
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
        d="M16 2H21C21.5523 2 22 2.44772 22 3V8C22 8.55228 21.5523 9 21 9C20.4477 9 20 8.55228 20 8V5.41421L3.70711 21.7071C3.31658 22.0976 2.68342 22.0976 2.29289 21.7071C1.90237 21.3166 1.90237 20.6834 2.29289 20.2929L18.5858 4H16C15.4477 4 15 3.55228 15 3C15 2.44772 15.4477 2 16 2Z"
        fill="currentColor"
      />
      <path
        d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L3.70711 2.29289Z"
        fill="currentColor"
      />
      <path
        d="M15.7071 14.2929L20 18.5858V16C20 15.4477 20.4477 15 21 15C21.5523 15 22 15.4477 22 16V21C22 21.5523 21.5523 22 21 22H16C15.4477 22 15 21.5523 15 21C15 20.4477 15.4477 20 16 20H18.5858L14.2929 15.7071C13.9024 15.3166 13.9024 14.6834 14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Shuffle02Icon = forwardRef(Shuffle02IconInner);
export { Shuffle02Icon };
