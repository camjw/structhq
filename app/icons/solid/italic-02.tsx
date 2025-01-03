import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Italic02IconInner(
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
        d="M6.55694 19L11.8069 5L9.5 5C8.94772 5 8.5 4.55228 8.5 4C8.5 3.44772 8.94772 3 9.5 3L19.5 3C20.0523 3 20.5 3.44772 20.5 4C20.5 4.55229 20.0523 5 19.5 5L17.4429 5L12.1929 19H14.5C15.0523 19 15.5 19.4477 15.5 20C15.5 20.5523 15.0523 21 14.5 21H4.5C3.94772 21 3.5 20.5523 3.5 20C3.5 19.4477 3.94772 19 4.5 19H6.55694Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Italic02Icon = forwardRef(Italic02IconInner);
export { Italic02Icon };
