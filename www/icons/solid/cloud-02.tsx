import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Cloud02IconInner(
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
        d="M12 3C7.78119 3 4.3251 6.26563 4.02165 10.407C2.24457 11.1735 1 12.9404 1 15C1 17.7614 3.23858 20 6 20H17.5C20.5376 20 23 17.5376 23 14.5C23 12.3081 21.7183 10.4177 19.8658 9.53369C19.1766 5.81531 15.9177 3 12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Cloud02Icon = forwardRef(Cloud02IconInner);
export { Cloud02Icon };
