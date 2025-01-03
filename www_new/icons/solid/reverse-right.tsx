import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ReverseRightIconInner(
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
        d="M16.7071 2.29289C16.3166 1.90237 15.6834 1.90237 15.2929 2.29289C14.9024 2.68342 14.9024 3.31658 15.2929 3.70711L17.5858 6H10C6.13401 6 3 9.13401 3 13C3 16.866 6.13401 20 10 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H10C7.23858 18 5 15.7614 5 13C5 10.2386 7.23858 8 10 8H17.5858L15.2929 10.2929C14.9024 10.6834 14.9024 11.3166 15.2929 11.7071C15.6834 12.0976 16.3166 12.0976 16.7071 11.7071L20.7071 7.70711C21.0976 7.31658 21.0976 6.68342 20.7071 6.29289L16.7071 2.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ReverseRightIcon = forwardRef(ReverseRightIconInner);
export { ReverseRightIcon };