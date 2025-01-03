import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function HeartsIconInner(
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
        d="M16.992 10.5455C16.1474 8.34649 14.001 6.79594 11.3332 7.29093C8.38395 7.83815 6.45048 10.5187 6.85272 13.4356C6.99665 14.4793 7.44964 16.151 7.91434 17.7148C8.38618 19.3026 8.89475 20.8594 9.17751 21.7096C9.17966 21.716 9.18184 21.7226 9.18407 21.7293C9.21643 21.8268 9.25669 21.948 9.30139 22.0536C9.35488 22.1799 9.43977 22.3476 9.59045 22.5072C9.79053 22.7191 10.051 22.8694 10.3345 22.9368C10.548 22.9875 10.7357 22.9771 10.8719 22.9603C10.9857 22.9462 11.1108 22.9205 11.2113 22.8998C11.2182 22.8984 11.2251 22.897 11.2317 22.8956C12.1094 22.7154 13.7119 22.3774 15.3229 21.9921C16.9096 21.6127 18.5838 21.1691 19.5596 20.7719C22.2735 19.6673 23.6887 16.6567 22.6362 13.8066C21.698 11.2661 19.3168 10.176 16.992 10.5455Z"
        fill="currentColor"
      />
      <path
        d="M14.5953 1.49282C12.1356 0.359819 9.68092 1.27275 8.29837 3.1779C6.14616 2.22022 3.53206 2.64153 1.99564 4.87797C0.297141 7.35035 0.825404 10.613 3.1724 12.3911C3.59199 12.709 4.17924 13.0846 4.84327 13.4791C4.42446 9.58226 7.05673 6.05027 10.9683 5.3245C13.7731 4.8041 16.1322 5.90788 17.6303 7.72748C18.2269 5.25389 17.0638 2.62986 14.5953 1.49282Z"
        fill="currentColor"
      />
    </svg>
  );
}
const HeartsIcon = forwardRef(HeartsIconInner);
export { HeartsIcon };
