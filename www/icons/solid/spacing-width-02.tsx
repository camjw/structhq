import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function SpacingWidth02IconInner(
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
        d="M21 2C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V3C20 2.44772 20.4477 2 21 2Z"
        fill="currentColor"
      />
      <path
        d="M7.5 13L7.5 15C7.5 15.5523 7.05229 16 6.5 16C5.94772 16 5.5 15.5523 5.5 15L5.5 9C5.5 8.44772 5.94772 8 6.5 8C7.05228 8 7.5 8.44771 7.5 9L7.5 11H16.5V9C16.5 8.44772 16.9477 8 17.5 8C18.0523 8 18.5 8.44771 18.5 9V15C18.5 15.5523 18.0523 16 17.5 16C16.9477 16 16.5 15.5523 16.5 15V13H7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const SpacingWidth02Icon = forwardRef(SpacingWidth02IconInner);
export { SpacingWidth02Icon };
