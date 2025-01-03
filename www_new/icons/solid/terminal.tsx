import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function TerminalIconInner(
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
        d="M3.29289 4.29289C3.68342 3.90237 4.31658 3.90237 4.70711 4.29289L10.7071 10.2929C11.0976 10.6834 11.0976 11.3166 10.7071 11.7071L4.70711 17.7071C4.31658 18.0976 3.68342 18.0976 3.29289 17.7071C2.90237 17.3166 2.90237 16.6834 3.29289 16.2929L8.58579 11L3.29289 5.70711C2.90237 5.31658 2.90237 4.68342 3.29289 4.29289Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 19C11 18.4477 11.4477 18 12 18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H12C11.4477 20 11 19.5523 11 19Z"
        fill="currentColor"
      />
    </svg>
  );
}
const TerminalIcon = forwardRef(TerminalIconInner);
export { TerminalIcon };
