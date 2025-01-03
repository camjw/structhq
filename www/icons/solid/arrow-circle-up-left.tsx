import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowCircleUpLeftIconInner(
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
        d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739419 8.51759 -0.0739419 4.22183 4.22183C-0.0739419 8.51759 -0.0739419 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM15.5355 15.5355C15.145 15.9261 14.5118 15.9261 14.1213 15.5355L10.1716 11.5858V14.8284C10.1716 15.3807 9.72386 15.8284 9.17157 15.8284C8.61929 15.8284 8.17157 15.3807 8.17157 14.8284V9.17157C8.17157 8.61929 8.61929 8.17157 9.17157 8.17157H14.8284C15.3807 8.17157 15.8284 8.61929 15.8284 9.17157C15.8284 9.72386 15.3807 10.1716 14.8284 10.1716H11.5858L15.5355 14.1213C15.9261 14.5118 15.9261 15.145 15.5355 15.5355Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowCircleUpLeftIcon = forwardRef(ArrowCircleUpLeftIconInner);
export { ArrowCircleUpLeftIcon };
