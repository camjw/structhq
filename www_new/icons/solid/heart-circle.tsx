import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function HeartCircleIconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM8.07735 8.65501C9.32987 7.58482 10.9969 7.8992 11.9966 9.06791C12.9963 7.8992 14.6417 7.59608 15.9158 8.65501C17.1899 9.71393 17.3447 11.5145 16.3611 12.7802C15.731 13.5909 14.1176 15.0942 13.0389 16.0704C12.6805 16.3947 12.5012 16.5569 12.2866 16.622C12.102 16.6779 11.8911 16.6779 11.7066 16.622C11.4919 16.5569 11.3127 16.3947 10.9542 16.0704C9.87558 15.0942 8.26211 13.5909 7.6321 12.7802C6.64848 11.5145 6.82482 9.72519 8.07735 8.65501Z"
        fill="currentColor"
      />
    </svg>
  );
}
const HeartCircleIcon = forwardRef(HeartCircleIconInner);
export { HeartCircleIcon };