import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Toggle03LeftIconInner(
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
        d="M8 5C4.13401 5 1 8.13401 1 12C1 15.866 4.13401 19 8 19H16C19.866 19 23 15.866 23 12C23 8.13401 19.866 5 16 5H8ZM12 12C12 14.2091 10.2091 16 8 16C5.79086 16 4 14.2091 4 12C4 9.79086 5.79086 8 8 8C10.2091 8 12 9.79086 12 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Toggle03LeftIcon = forwardRef(Toggle03LeftIconInner);
export { Toggle03LeftIcon };
