import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowCircleBrokenRightIconInner(
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
        d="M1.33989 14.7243C1.21271 14.2251 1.14912 13.9755 1.23096 13.7077C1.29628 13.494 1.47698 13.2615 1.66795 13.1454C1.90726 13 2.20332 13 2.79544 13L13.5857 13L11.2928 15.2929C10.9023 15.6834 10.9023 16.3166 11.2928 16.7071C11.6833 17.0976 12.3165 17.0976 12.707 16.7071L16.707 12.7071C17.0976 12.3166 17.0976 11.6834 16.707 11.2929L12.707 7.29289C12.3165 6.90237 11.6833 6.90237 11.2928 7.29289C10.9023 7.68342 10.9023 8.31658 11.2928 8.70711L13.5857 11L2.79544 11C2.20332 11 1.90726 11 1.66795 10.8546C1.47698 10.7385 1.29628 10.506 1.23096 10.2923C1.14912 10.0245 1.21271 9.77489 1.33989 9.27574C2.55203 4.51831 6.86511 1 11.9999 1C18.0751 1 22.9999 5.92487 22.9999 12C22.9999 18.0751 18.0751 23 11.9999 23C6.86511 23 2.55203 19.4817 1.33989 14.7243Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowCircleBrokenRightIcon = forwardRef(ArrowCircleBrokenRightIconInner);
export { ArrowCircleBrokenRightIcon };