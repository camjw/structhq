import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Award02IconInner(
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
        d="M7 15.0903V22L11.7029 20.1188C11.8126 20.0749 11.8675 20.053 11.9242 20.0443C11.9744 20.0366 12.0256 20.0366 12.0758 20.0443C12.1325 20.053 12.1874 20.0749 12.2971 20.1188L17 22V15.0903M19.5 9.5C19.5 13.6421 16.1421 17 12 17C7.85786 17 4.5 13.6421 4.5 9.5C4.5 5.35786 7.85786 2 12 2C16.1421 2 19.5 5.35786 19.5 9.5Z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Award02Icon = forwardRef(Award02IconInner);
export { Award02Icon };
