import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Award01IconInner(
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
        d="M12 1C7.58172 1 4 4.58172 4 9C4 11.4797 5.1282 13.6959 6.89929 15.1633L6.00873 21.8683C5.95817 22.2489 6.13004 22.6249 6.45099 22.8358C6.77193 23.0466 7.18525 23.055 7.51452 22.8575L12 20.1661L16.4855 22.8575C16.8148 23.055 17.2281 23.0466 17.549 22.8358C17.8699 22.625 18.0418 22.2491 17.9913 21.8684L17.1016 15.1625C18.8722 13.6951 20 11.4793 20 9C20 4.58172 16.4183 1 12 1ZM8.76346 16.3183C9.75301 16.7565 10.8481 17 12 17C13.1523 17 14.2476 16.7564 15.2374 16.3179L15.7359 20.0753L12.9261 18.3894L12.8971 18.3717C12.7917 18.3071 12.5733 18.1732 12.3218 18.118C12.1098 18.0714 11.8903 18.0714 11.6783 18.118C11.4267 18.1732 11.2083 18.3071 11.103 18.3717L11.0739 18.3894L8.26447 20.0751L8.76346 16.3183Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Award01Icon = forwardRef(Award01IconInner);
export { Award01Icon };