import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Webcam01IconInner(
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
        d="M21 10C21 14.6326 17.5 18.4476 13 18.9451V21H17C17.5523 21 18 21.4477 18 22C18 22.5523 17.5523 23 17 23H7C6.44772 23 6 22.5523 6 22C6 21.4477 6.44772 21 7 21H11V18.9451C6.50005 18.4476 3 14.6326 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Webcam01Icon = forwardRef(Webcam01IconInner);
export { Webcam01Icon };
