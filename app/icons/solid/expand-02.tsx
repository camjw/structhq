import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Expand02IconInner(
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
        d="M14 3C14 2.44772 14.4477 2 15 2H21C21.5523 2 22 2.44772 22 3V9C22 9.55229 21.5523 10 21 10C20.4477 10 20 9.55229 20 9V5.41421L5.41421 20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H3C2.44772 22 2 21.5523 2 21V15C2 14.4477 2.44772 14 3 14C3.55229 14 4 14.4477 4 15L4 18.5858L18.5858 4H15C14.4477 4 14 3.55228 14 3Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Expand02Icon = forwardRef(Expand02IconInner);
export { Expand02Icon };
