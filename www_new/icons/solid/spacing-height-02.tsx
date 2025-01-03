import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function SpacingHeight02IconInner(
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
        d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H3C2.44772 4 2 3.55228 2 3Z"
        fill="currentColor"
      />
      <path
        d="M2 21C2 20.4477 2.44772 20 3 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21Z"
        fill="currentColor"
      />
      <path
        d="M15.0001 7.50001L13 7.50001L13 16.5L15.0001 16.5C15.5524 16.5 16.0001 16.9477 16.0001 17.5C16.0001 18.0523 15.5524 18.5 15.0001 18.5L9 18.5C8.44771 18.5 8 18.0523 8 17.5C8 16.9477 8.44772 16.5 9 16.5L11 16.5L11 7.50001L9 7.5C8.44771 7.5 8 7.05228 8 6.5C8 5.94772 8.44772 5.5 9 5.5L15.0001 5.50001C15.5524 5.50001 16.0001 5.94773 16.0001 6.50001C16.0001 7.0523 15.5524 7.50001 15.0001 7.50001Z"
        fill="currentColor"
      />
    </svg>
  );
}
const SpacingHeight02Icon = forwardRef(SpacingHeight02IconInner);
export { SpacingHeight02Icon };
