import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Power03IconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V7Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Power03Icon = forwardRef(Power03IconInner);
export { Power03Icon };
