import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Dotpoints02IconInner(
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
        d="M4.5 2.5C3.11929 2.5 2 3.61929 2 5C2 6.38071 3.11929 7.5 4.5 7.5C5.88071 7.5 7 6.38071 7 5C7 3.61929 5.88071 2.5 4.5 2.5Z"
        fill="currentColor"
      />
      <path
        d="M10 4L21 4C21.5523 4 22 4.44772 22 5C22 5.55229 21.5523 6 21 6H10C9.44772 6 9 5.55229 9 5C9 4.44772 9.44772 4 10 4Z"
        fill="currentColor"
      />
      <path
        d="M10 18H21C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20H10C9.44772 20 9 19.5523 9 19C9 18.4477 9.44772 18 10 18Z"
        fill="currentColor"
      />
      <path
        d="M21 11H10C9.44772 11 9 11.4477 9 12C9 12.5523 9.44772 13 10 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11Z"
        fill="currentColor"
      />
      <path
        d="M4.5 16.5C3.11929 16.5 2 17.6193 2 19C2 20.3807 3.11929 21.5 4.5 21.5C5.88071 21.5 7 20.3807 7 19C7 17.6193 5.88071 16.5 4.5 16.5Z"
        fill="currentColor"
      />
      <path
        d="M4.5 9.5C3.11929 9.5 2 10.6193 2 12C2 13.3807 3.11929 14.5 4.5 14.5C5.88071 14.5 7 13.3807 7 12C7 10.6193 5.88071 9.5 4.5 9.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Dotpoints02Icon = forwardRef(Dotpoints02IconInner);
export { Dotpoints02Icon };
