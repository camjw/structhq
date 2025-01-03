import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Toggle02LeftIconInner(
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
        d="M7 6C3.68629 6 1 8.68629 1 12C1 15.3137 3.68629 18 7 18C8.22674 18 9.36749 17.6318 10.3178 17H18C20.7614 17 23 14.7614 23 12C23 9.23858 20.7614 7 18 7H10.3178C9.36749 6.36815 8.22674 6 7 6ZM12.1973 9C12.7078 9.88252 13 10.9071 13 12C13 13.0929 12.7078 14.1175 12.1973 15H18C19.6569 15 21 13.6569 21 12C21 10.3431 19.6569 9 18 9H12.1973Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Toggle02LeftIcon = forwardRef(Toggle02LeftIconInner);
export { Toggle02LeftIcon };
