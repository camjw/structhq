import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ReverseLeftIconInner(
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
        d="M8.70711 3.70711C9.09763 3.31658 9.09763 2.68342 8.70711 2.29289C8.31658 1.90237 7.68342 1.90237 7.29289 2.29289L3.29289 6.29289C2.90237 6.68342 2.90237 7.31658 3.29289 7.70711L7.29289 11.7071C7.68342 12.0976 8.31658 12.0976 8.70711 11.7071C9.09763 11.3166 9.09763 10.6834 8.70711 10.2929L6.41421 8L14 8C16.7614 8 19 10.2386 19 13C19 15.7614 16.7614 18 14 18H4C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H14C17.866 20 21 16.866 21 13C21 9.13401 17.866 6 14 6L6.41421 6L8.70711 3.70711Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ReverseLeftIcon = forwardRef(ReverseLeftIconInner);
export { ReverseLeftIcon };