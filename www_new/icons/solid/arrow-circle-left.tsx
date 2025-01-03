import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowCircleLeftIconInner(
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
        d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM17 12C17 12.5523 16.5523 13 16 13H10.4142L12.7071 15.2929C13.0976 15.6834 13.0976 16.3166 12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289C13.0976 7.68342 13.0976 8.31658 12.7071 8.70711L10.4142 11H16C16.5523 11 17 11.4477 17 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowCircleLeftIcon = forwardRef(ArrowCircleLeftIconInner);
export { ArrowCircleLeftIcon };
