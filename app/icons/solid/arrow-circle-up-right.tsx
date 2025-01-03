import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowCircleUpRightIconInner(
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
        d="M4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22182C15.4824 -0.0739422 8.51759 -0.0739417 4.22182 4.22183C-0.0739422 8.51759 -0.0739417 15.4824 4.22183 19.7782ZM8.46447 15.5355C8.07394 15.145 8.07394 14.5118 8.46447 14.1213L12.4142 10.1716H9.17157C8.61929 10.1716 8.17157 9.72386 8.17157 9.17157C8.17157 8.61929 8.61929 8.17157 9.17157 8.17157L14.8284 8.17157C15.3807 8.17157 15.8284 8.61929 15.8284 9.17157L15.8284 14.8284C15.8284 15.3807 15.3807 15.8284 14.8284 15.8284C14.2761 15.8284 13.8284 15.3807 13.8284 14.8284V11.5858L9.87868 15.5355C9.48816 15.9261 8.85499 15.9261 8.46447 15.5355Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowCircleUpRightIcon = forwardRef(ArrowCircleUpRightIconInner);
export { ArrowCircleUpRightIcon };
