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
        d="M6 3V15M6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18M6 15C7.65685 15 9 16.3431 9 18M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9ZM18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const GitBranch02Icon = forwardRef(GitBranch02IconInner);
export { GitBranch02Icon };