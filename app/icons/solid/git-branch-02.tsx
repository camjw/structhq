import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function GitBranch02IconInner(
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
        d="M7 3C7 2.44772 6.55228 2 6 2C5.44772 2 5 2.44772 5 3V14.126C3.27477 14.5701 2 16.1362 2 18C2 20.2091 3.79086 22 6 22C7.8779 22 9.45354 20.7059 9.88383 18.9609C12.212 18.7544 14.4052 17.737 16.0711 16.0711C17.737 14.4052 18.7544 12.212 18.9609 9.88383C20.7059 9.45354 22 7.8779 22 6C22 3.79086 20.2091 2 18 2C15.7909 2 14 3.79086 14 6C14 7.84705 15.2519 9.4017 16.9535 9.86171C16.758 11.6666 15.9526 13.3611 14.6569 14.6569C13.3611 15.9526 11.6666 16.758 9.86171 16.9535C9.48769 15.57 8.39006 14.4838 7 14.126V3Z"
        fill="currentColor"
      />
    </svg>
  );
}
const GitBranch02Icon = forwardRef(GitBranch02IconInner);
export { GitBranch02Icon };