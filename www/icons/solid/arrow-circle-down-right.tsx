import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowCircleDownRightIconInner(
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
        d="M4.22183 4.22183C-0.0739419 8.51759 -0.0739419 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739419 8.51759 -0.0739419 4.22183 4.22183ZM8.46447 8.46447C8.85499 8.07394 9.48816 8.07394 9.87868 8.46447L13.8284 12.4142V9.17157C13.8284 8.61929 14.2761 8.17157 14.8284 8.17157C15.3807 8.17157 15.8284 8.61929 15.8284 9.17157V14.8284C15.8284 15.3807 15.3807 15.8284 14.8284 15.8284H9.17157C8.61929 15.8284 8.17157 15.3807 8.17157 14.8284C8.17157 14.2761 8.61929 13.8284 9.17157 13.8284H12.4142L8.46447 9.87868C8.07394 9.48816 8.07394 8.85499 8.46447 8.46447Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowCircleDownRightIcon = forwardRef(ArrowCircleDownRightIconInner);
export { ArrowCircleDownRightIcon };
