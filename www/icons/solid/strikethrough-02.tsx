import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Strikethrough02IconInner(
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
        d="M10 3C7.23858 3 5 5.23858 5 8C5 8.55228 5.44772 9 6 9H9.5C10.0523 9 10.5 8.55228 10.5 8C10.5 6.34315 11.8431 5 13.5 5H14C15.6569 5 17 6.34315 17 8C17 8.55228 17.4477 9 18 9C18.5523 9 19 8.55228 19 8C19 5.23858 16.7614 3 14 3H10Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 16C13.5 17.6569 12.1569 19 10.5 19H10C8.34315 19 7 17.6569 7 16C7 15.4477 6.55228 15 6 15C5.44772 15 5 15.4477 5 16C5 18.7614 7.23858 21 10 21H14C16.7614 21 19 18.7614 19 16C19 14.8744 18.6281 13.8357 18.0004 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H10.5C12.1569 13 13.5 14.3431 13.5 16Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Strikethrough02Icon = forwardRef(Strikethrough02IconInner);
export { Strikethrough02Icon };