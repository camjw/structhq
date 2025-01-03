import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Heading02IconInner(
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
        d="M4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5H5V19H4C3.44772 19 3 19.4477 3 20C3 20.5523 3.44772 21 4 21H11.5C12.0523 21 12.5 20.5523 12.5 20C12.5 19.4477 12.0523 19 11.5 19H10.5V13H17V19H16C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21H20C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19H19V5H20C20.5523 5 21 4.55228 21 4C21 3.44772 20.5523 3 20 3H16C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17V11H10.5V5H11.5C12.0523 5 12.5 4.55228 12.5 4C12.5 3.44772 12.0523 3 11.5 3H4Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Heading02Icon = forwardRef(Heading02IconInner);
export { Heading02Icon };
