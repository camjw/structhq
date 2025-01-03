import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Toggle02RightIconInner(
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
        d="M17 6C20.3137 6 23 8.68629 23 12C23 15.3137 20.3137 18 17 18C15.7733 18 14.6325 17.6318 13.6822 17H6C3.23858 17 1 14.7614 1 12C1 9.23858 3.23857 7 6 7H13.6822C14.6325 6.36815 15.7733 6 17 6ZM11.8027 9C11.2922 9.88252 11 10.9071 11 12C11 13.0929 11.2922 14.1175 11.8027 15H6C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9H11.8027Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Toggle02RightIcon = forwardRef(Toggle02RightIconInner);
export { Toggle02RightIcon };
