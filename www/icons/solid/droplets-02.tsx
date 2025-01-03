import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Droplets02IconInner(
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
        d="M12.9806 2.30388C12.8871 1.83646 12.4767 1.5 12 1.5C11.5233 1.5 11.1129 1.83646 11.0194 2.30388C10.5674 4.56378 9.19919 6.76002 7.3753 8.21913C5.19568 9.96283 4 12.1294 4 14.5C4 16.6217 4.84285 18.6566 6.34315 20.1569C7.84344 21.6571 9.87827 22.5 12 22.5C14.1217 22.5 16.1566 21.6571 17.6569 20.1569C19.1571 18.6566 20 16.6217 20 14.5C20 12.1294 18.8043 9.96283 16.6247 8.21913C14.8008 6.76002 13.4326 4.56378 12.9806 2.30388Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Droplets02Icon = forwardRef(Droplets02IconInner);
export { Droplets02Icon };
