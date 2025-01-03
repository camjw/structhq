import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BoxIconInner(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d="M1 5C1 3.34315 2.34315 2 4 2H20C21.6569 2 23 3.34315 23 5C23 6.65685 21.6569 8 20 8H4C2.34315 8 1 6.65685 1 5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10C3.44772 10 3 10.4477 3 11V16.2413C2.99999 17.0463 2.99998 17.7106 3.04419 18.2518C3.09012 18.8139 3.18868 19.3306 3.43597 19.816C3.81947 20.5686 4.43139 21.1805 5.18404 21.564C5.66937 21.8113 6.18608 21.9099 6.74817 21.9558C7.28936 22 7.95372 22 8.75868 22H15.2413C16.0463 22 16.7106 22 17.2518 21.9558C17.8139 21.9099 18.3306 21.8113 18.816 21.564C19.5686 21.1805 20.1805 20.5686 20.564 19.816C20.8113 19.3306 20.9099 18.8139 20.9558 18.2518C21 17.7106 21 17.0463 21 16.2413V11C21 10.4477 20.5523 10 20 10H4ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H14C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13H10Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BoxIcon = forwardRef(BoxIconInner);
export { BoxIcon };
