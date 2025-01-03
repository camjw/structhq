import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Coins03IconInner(
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
        d="M7.20269 7.2027C3.64986 8.0183 1 11.1997 1 15C1 19.4183 4.58172 23 9 23C12.8003 23 15.9817 20.3501 16.7973 16.7973C16.9299 16.2196 17 15.618 17 15C17 10.5817 13.4183 7 9 7C8.38203 7 7.78042 7.07007 7.20269 7.2027Z"
        fill="currentColor"
      />
      <path
        d="M8.04438 5.04507C8.3589 5.01525 8.67767 5 9 5C14.5228 5 19 9.47715 19 15C19 15.3223 18.9847 15.6411 18.9549 15.9556C21.371 14.5789 23 11.9797 23 9C23 4.58172 19.4183 1 15 1C12.0203 1 9.42109 2.62903 8.04438 5.04507Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Coins03Icon = forwardRef(Coins03IconInner);
export { Coins03Icon };
