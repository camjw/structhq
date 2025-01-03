import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Coins04IconInner(
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
        d="M9 5C8.67767 5 8.3589 5.01525 8.04438 5.04507C9.42109 2.62903 12.0203 1 15 1C19.4183 1 23 4.58172 23 9C23 11.9797 21.371 14.5789 18.9549 15.9556C18.9847 15.6411 19 15.3223 19 15C19 9.47715 14.5228 5 9 5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 15C1 11.1997 3.64986 8.0183 7.20269 7.2027C7.78042 7.07007 8.38203 7 9 7C13.4183 7 17 10.5817 17 15C17 15.618 16.9299 16.2196 16.7973 16.7973C15.9817 20.3501 12.8003 23 9 23C4.58172 23 1 19.4183 1 15ZM9.47186 11.1183C9.79702 11.2923 10 11.6312 10 12V16.5H10.5C11.0523 16.5 11.5 16.9477 11.5 17.5C11.5 18.0523 11.0523 18.5 10.5 18.5H7.5C6.94772 18.5 6.5 18.0523 6.5 17.5C6.5 16.9477 6.94772 16.5 7.5 16.5H8V13.8661C7.54703 14.1282 6.9623 13.9962 6.66795 13.5547C6.3616 13.0952 6.48577 12.4743 6.9453 12.168L8.4453 11.168C8.75216 10.9634 9.1467 10.9443 9.47186 11.1183Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Coins04Icon = forwardRef(Coins04IconInner);
export { Coins04Icon };
