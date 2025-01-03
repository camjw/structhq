import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MarkIconInner(
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
        d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V3.05493C6.82838 3.51608 3.51608 6.82838 3.05493 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H3.05493C3.51608 17.1716 6.82838 20.4839 11 20.9451V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V20.9451C17.1716 20.4839 20.4839 17.1716 20.9451 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H20.9451C20.4839 6.82838 17.1716 3.51608 13 3.05493V2ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MarkIcon = forwardRef(MarkIconInner);
export { MarkIcon };