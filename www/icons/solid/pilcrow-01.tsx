import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Pilcrow01IconInner(
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
        d="M10.5 3C7.46243 3 5 5.46243 5 8.5C5 11.5376 7.46243 14 10.5 14H15V19H14C13.4477 19 13 19.4477 13 20C13 20.5523 13.4477 21 14 21H18C18.5523 21 19 20.5523 19 20C19 19.4477 18.5523 19 18 19H17V5H18C18.5523 5 19 4.55228 19 4C19 3.44772 18.5523 3 18 3H10.5ZM15 5H10.5C8.567 5 7 6.567 7 8.5C7 10.433 8.567 12 10.5 12H15V5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Pilcrow01Icon = forwardRef(Pilcrow01IconInner);
export { Pilcrow01Icon };
