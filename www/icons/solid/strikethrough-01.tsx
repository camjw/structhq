import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Strikethrough01IconInner(
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
        d="M5 8C5 5.23858 7.23858 3 10 3H14C16.7614 3 19 5.23858 19 8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8C17 6.34315 15.6569 5 14 5H10C8.34315 5 7 6.34315 7 8C7 8.55228 6.55228 9 6 9C5.44772 9 5 8.55228 5 8Z"
        fill="currentColor"
      />
      <path
        d="M18.0004 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H14C15.6569 13 17 14.3431 17 16C17 17.6569 15.6569 19 14 19H10C8.34315 19 7 17.6569 7 16C7 15.4477 6.55228 15 6 15C5.44772 15 5 15.4477 5 16C5 18.7614 7.23858 21 10 21H14C16.7614 21 19 18.7614 19 16C19 14.8744 18.6281 13.8357 18.0004 13Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Strikethrough01Icon = forwardRef(Strikethrough01IconInner);
export { Strikethrough01Icon };
