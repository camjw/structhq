import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Microphone01IconInner(
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
        d="M12 1C9.79086 1 8 2.79086 8 5V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V5C16 2.79086 14.2091 1 12 1Z"
        fill="currentColor"
      />
      <path
        d="M6 10C6 9.44771 5.55228 9 5 9C4.44772 9 4 9.44771 4 10V12C4 16.0803 7.05466 19.4471 11.0019 19.9383C11.0006 19.9587 11 19.9793 11 20V21H8C7.44772 21 7 21.4477 7 22C7 22.5523 7.44772 23 8 23H16C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21H13V20C13 19.9793 12.9994 19.9587 12.9981 19.9383C16.9453 19.4471 20 16.0803 20 12V10C20 9.44771 19.5523 9 19 9C18.4477 9 18 9.44771 18 10V12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V10Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Microphone01Icon = forwardRef(Microphone01IconInner);
export { Microphone01Icon };
