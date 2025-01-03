import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowCircleBrokenDownLeftIconInner(
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
        d="M17.6114 2.53587C18.0543 2.79889 18.2758 2.9304 18.4073 3.17765C18.5122 3.37496 18.5488 3.66714 18.4959 3.88425C18.4295 4.1563 18.2201 4.36565 17.8015 4.78434L10.1716 12.4142V9.17157C10.1716 8.61929 9.72386 8.17157 9.17157 8.17157C8.61929 8.17157 8.17157 8.61929 8.17157 9.17157L8.17157 14.8284C8.17157 15.3807 8.61929 15.8284 9.17157 15.8284H14.8284C15.3807 15.8284 15.8284 15.3807 15.8284 14.8284C15.8284 14.2761 15.3807 13.8284 14.8284 13.8284L11.5858 13.8284L19.2157 6.19855C19.6344 5.77986 19.8437 5.57052 20.1158 5.50414C20.3329 5.45116 20.625 5.4878 20.8224 5.59274C21.0696 5.72423 21.2011 5.94567 21.4641 6.38856C23.971 10.6097 23.409 16.1473 19.7782 19.7782C15.4824 24.0739 8.51759 24.0739 4.22183 19.7782C-0.0739417 15.4824 -0.0739415 8.51759 4.22182 4.22183C7.85269 0.590958 13.3903 0.0289716 17.6114 2.53587Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowCircleBrokenDownLeftIcon = forwardRef(
  ArrowCircleBrokenDownLeftIconInner,
);
export { ArrowCircleBrokenDownLeftIcon };
