import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Link02IconInner(
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
        d="M6 12C6 11.4477 6.44772 11 7 11L17 11C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13L7 13C6.44772 13 6 12.5523 6 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16H9C9.55228 16 10 16.4477 10 17C10 17.5523 9.55228 18 9 18H7C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6H9C9.55228 6 10 6.44772 10 7C10 7.55228 9.55228 8 9 8H7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 7C14 6.44772 14.4477 6 15 6H17C20.3137 6 23 8.68629 23 12C23 15.3137 20.3137 18 17 18H15C14.4477 18 14 17.5523 14 17C14 16.4477 14.4477 16 15 16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8H15C14.4477 8 14 7.55228 14 7Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Link02Icon = forwardRef(Link02IconInner);
export { Link02Icon };
