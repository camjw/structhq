import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowCircleDownLeftIconInner(
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
        d="M19.7782 4.22183C15.4824 -0.0739419 8.51759 -0.0739419 4.22183 4.22183C-0.0739419 8.51759 -0.0739419 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183ZM15.5355 8.46447C15.9261 8.85499 15.9261 9.48816 15.5355 9.87868L11.5858 13.8284H14.8284C15.3807 13.8284 15.8284 14.2761 15.8284 14.8284C15.8284 15.3807 15.3807 15.8284 14.8284 15.8284H9.17157C8.61929 15.8284 8.17157 15.3807 8.17157 14.8284V9.17157C8.17157 8.61929 8.61929 8.17157 9.17157 8.17157C9.72386 8.17157 10.1716 8.61929 10.1716 9.17157V12.4142L14.1213 8.46447C14.5118 8.07394 15.145 8.07394 15.5355 8.46447Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowCircleDownLeftIcon = forwardRef(ArrowCircleDownLeftIconInner);
export { ArrowCircleDownLeftIcon };
