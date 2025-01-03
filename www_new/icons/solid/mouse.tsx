import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MouseIconInner(
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
        d="M12 1C7.58172 1 4 4.58172 4 9V15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15V9C20 4.58172 16.4183 1 12 1ZM13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9V6Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MouseIcon = forwardRef(MouseIconInner);
export { MouseIcon };
