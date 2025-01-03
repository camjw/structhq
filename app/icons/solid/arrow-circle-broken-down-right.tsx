import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowCircleBrokenDownRightIconInner(
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
        d="M2.53587 6.38856C2.79889 5.94567 2.9304 5.72423 3.17765 5.59274C3.37496 5.4878 3.66714 5.45116 3.88425 5.50414C4.1563 5.57051 4.36565 5.77986 4.78434 6.19855L12.4142 13.8284H9.17157C8.61929 13.8284 8.17157 14.2761 8.17157 14.8284C8.17157 15.3807 8.61929 15.8284 9.17157 15.8284H14.8284C15.3807 15.8284 15.8284 15.3807 15.8284 14.8284V9.17157C15.8284 8.61929 15.3807 8.17157 14.8284 8.17157C14.2761 8.17157 13.8284 8.61929 13.8284 9.17157L13.8284 12.4142L6.19855 4.78434C5.77986 4.36565 5.57052 4.1563 5.50414 3.88425C5.45116 3.66714 5.4878 3.37496 5.59274 3.17765C5.72423 2.9304 5.94567 2.79889 6.38856 2.53587C10.6097 0.0289712 16.1473 0.590958 19.7782 4.22183C24.0739 8.51759 24.0739 15.4824 19.7782 19.7782C15.4824 24.0739 8.51759 24.0739 4.22183 19.7782C0.590958 16.1473 0.0289716 10.6097 2.53587 6.38856Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowCircleBrokenDownRightIcon = forwardRef(
  ArrowCircleBrokenDownRightIconInner,
);
export { ArrowCircleBrokenDownRightIcon };
