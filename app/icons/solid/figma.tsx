import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function FigmaIconInner(
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
        d="M4 5C4 2.51472 6.01472 0.5 8.5 0.5H15.5C17.9853 0.5 20 2.51472 20 5C20 6.41363 19.3482 7.67502 18.3287 8.5C19.3482 9.32498 20 10.5864 20 12C20 14.4853 17.9853 16.5 15.5 16.5C14.5749 16.5 13.715 16.2209 13 15.7422V19C13 21.4853 10.9853 23.5 8.5 23.5C6.01472 23.5 4 21.4853 4 19C4 17.5864 4.65183 16.325 5.67134 15.5C4.65183 14.675 4 13.4136 4 12C4 10.5864 4.65183 9.32498 5.67134 8.5C4.65183 7.67502 4 6.41363 4 5ZM11 14.5H8.5C7.11929 14.5 6 13.3807 6 12C6 10.6193 7.11929 9.5 8.5 9.5H11V14.5ZM13 12C13 13.3807 14.1193 14.5 15.5 14.5C16.8807 14.5 18 13.3807 18 12C18 10.6193 16.8807 9.5 15.5 9.5C14.1193 9.5 13 10.6193 13 12ZM15.5 7.5C16.8807 7.5 18 6.38071 18 5C18 3.61929 16.8807 2.5 15.5 2.5H13V7.5H15.5ZM8.5 2.5H11V7.5H8.5C7.11929 7.5 6 6.38071 6 5C6 3.61929 7.11929 2.5 8.5 2.5ZM11 16.5H8.5C7.11929 16.5 6 17.6193 6 19C6 20.3807 7.11929 21.5 8.5 21.5C9.88071 21.5 11 20.3807 11 19V16.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const FigmaIcon = forwardRef(FigmaIconInner);
export { FigmaIcon };
