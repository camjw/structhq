import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowCircleBrokenUpRightIconInner(
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
        d="M6.38856 21.4641C5.94567 21.2011 5.72423 21.0696 5.59274 20.8224C5.4878 20.625 5.45116 20.3329 5.50414 20.1158C5.57052 19.8437 5.77986 19.6344 6.19855 19.2157L13.8284 11.5858V14.8284C13.8284 15.3807 14.2761 15.8284 14.8284 15.8284C15.3807 15.8284 15.8284 15.3807 15.8284 14.8284V9.17157C15.8284 8.61929 15.3807 8.17157 14.8284 8.17157L9.17157 8.17157C8.61929 8.17157 8.17157 8.61929 8.17157 9.17157C8.17157 9.72386 8.61929 10.1716 9.17157 10.1716L12.4142 10.1716L4.78434 17.8015C4.36565 18.2201 4.1563 18.4295 3.88425 18.4959C3.66714 18.5488 3.37496 18.5122 3.17765 18.4073C2.9304 18.2758 2.79889 18.0543 2.53587 17.6114C0.0289714 13.3903 0.590958 7.85269 4.22183 4.22183C8.51759 -0.0739412 15.4824 -0.0739419 19.7782 4.22182C24.0739 8.51759 24.0739 15.4824 19.7782 19.7782C16.1473 23.409 10.6097 23.971 6.38856 21.4641Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowCircleBrokenUpRightIcon = forwardRef(
  ArrowCircleBrokenUpRightIconInner,
);
export { ArrowCircleBrokenUpRightIcon };
