import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowCircleBrokenDownIconInner(
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
        d="M9.27574 1.33995C9.77489 1.21277 10.0245 1.14918 10.2923 1.23102C10.506 1.29634 10.7385 1.47704 10.8546 1.66802C11 1.90732 11 2.20338 11 2.7955L11 13.5858L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929C16.3166 10.9024 15.6834 10.9024 15.2929 11.2929L13 13.5858L13 2.7955C13 2.20338 13 1.90732 13.1454 1.66802C13.2615 1.47704 13.494 1.29634 13.7077 1.23102C13.9755 1.14918 14.2251 1.21277 14.7243 1.33995C19.4817 2.55209 23 6.86517 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 6.86517 4.51831 2.55209 9.27574 1.33995Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowCircleBrokenDownIcon = forwardRef(ArrowCircleBrokenDownIconInner);
export { ArrowCircleBrokenDownIcon };
