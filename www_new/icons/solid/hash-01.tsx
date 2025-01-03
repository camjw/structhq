import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Hash01IconInner(
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
        d="M8 2C8.55228 2 9 2.44772 9 3V7H15V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H17V15H20C20.5523 15 21 15.4477 21 16C21 16.5523 20.5523 17 20 17H17V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V17H9V21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21V17H4C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15H7V9H4C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7H7V3C7 2.44772 7.44772 2 8 2ZM15 15V9H9V15H15Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Hash01Icon = forwardRef(Hash01IconInner);
export { Hash01Icon };
