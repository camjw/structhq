import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Webcam02IconInner(
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
        d="M12 1C6.75329 1 2.5 5.25329 2.5 10.5C2.5 15.7467 6.75329 20 12 20C17.2467 20 21.5 15.7467 21.5 10.5C21.5 5.25329 17.2467 1 12 1ZM15.1875 10.5C15.1875 12.2604 13.7604 13.6875 12 13.6875C10.2396 13.6875 8.8125 12.2604 8.8125 10.5C8.8125 8.73959 10.2396 7.3125 12 7.3125C13.7604 7.3125 15.1875 8.73959 15.1875 10.5Z"
        fill="currentColor"
      />
      <path
        d="M8 21C7.44772 21 7 21.4477 7 22C7 22.5523 7.44772 23 8 23H16C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21H8Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Webcam02Icon = forwardRef(Webcam02IconInner);
export { Webcam02Icon };
