import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Link05IconInner(
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
        d="M7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16H9C9.55228 16 10 16.4477 10 17C10 17.5523 9.55228 18 9 18H7C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6H9C9.55228 6 10 6.44772 10 7C10 7.55228 9.55228 8 9 8H7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12C7 11.4477 7.44772 11 8 11L14 11V7.77778C14 6.79594 14.7959 6 15.7778 6H17C20.3137 6 23 8.68629 23 12C23 15.3137 20.3137 18 17 18H15.7778C14.7959 18 14 17.2041 14 16.2222V13L8 13C7.44772 13 7 12.5523 7 12ZM16 13V16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8H16V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H16Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Link05Icon = forwardRef(Link05IconInner);
export { Link05Icon };
