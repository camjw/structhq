import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Headphones01IconInner(
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
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V18.5C22 20.433 20.433 22 18.5 22C16.567 22 15 20.433 15 18.5V16.5C15 14.567 16.567 13 18.5 13C19.0368 13 19.5454 13.1208 20 13.3368V12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12V13.3368C4.45463 13.1208 4.9632 13 5.5 13C7.433 13 9 14.567 9 16.5V18.5C9 20.433 7.433 22 5.5 22C3.567 22 2 20.433 2 18.5V12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Headphones01Icon = forwardRef(Headphones01IconInner);
export { Headphones01Icon };
