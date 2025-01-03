import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowCircleBrokenUpIconInner(
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
        d="M14.7243 22.66C14.2251 22.7872 13.9755 22.8508 13.7077 22.769C13.494 22.7036 13.2615 22.523 13.1454 22.332C13 22.0927 13 21.7966 13 21.2045V10.4142L15.2929 12.7071C15.6834 13.0976 16.3166 13.0976 16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L11 10.4142V21.2045C11 21.7966 11 22.0927 10.8546 22.332C10.7385 22.523 10.506 22.7036 10.2923 22.769C10.0245 22.8508 9.77489 22.7872 9.27574 22.66C4.51831 21.4479 1 17.1348 1 12C1 5.92487 5.92487 0.999999 12 1C18.0751 1 23 5.92487 23 12C23 17.1348 19.4817 21.4479 14.7243 22.66Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowCircleBrokenUpIcon = forwardRef(ArrowCircleBrokenUpIconInner);
export { ArrowCircleBrokenUpIcon };
