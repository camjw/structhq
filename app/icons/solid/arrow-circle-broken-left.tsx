import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowCircleBrokenLeftIconInner(
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
        d="M22.66 9.27574C22.7872 9.77489 22.8508 10.0245 22.769 10.2923C22.7036 10.506 22.523 10.7385 22.332 10.8546C22.0927 11 21.7966 11 21.2045 11L10.4142 11L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071C13.0976 16.3166 13.0976 15.6834 12.7071 15.2929L10.4142 13L21.2045 13C21.7966 13 22.0927 13 22.332 13.1454C22.523 13.2615 22.7036 13.494 22.769 13.7077C22.8508 13.9755 22.7872 14.2251 22.66 14.7243C21.4479 19.4817 17.1348 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C17.1348 1 21.4479 4.51831 22.66 9.27574Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowCircleBrokenLeftIcon = forwardRef(ArrowCircleBrokenLeftIconInner);
export { ArrowCircleBrokenLeftIcon };
