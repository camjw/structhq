import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Settings03IconInner(
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
        d="M14.6713 3H5.5C3.567 3 2 4.567 2 6.5C2 8.433 3.567 10 5.5 10H14.6713C15.4442 10.6254 16.4284 11 17.5 11C19.9853 11 22 8.98528 22 6.5C22 4.01472 19.9853 2 17.5 2C16.4284 2 15.4442 2.3746 14.6713 3ZM13.2561 5C13.0902 5.46917 13 5.97405 13 6.5C13 7.02595 13.0902 7.53083 13.2561 8H5.5C4.67157 8 4 7.32843 4 6.5C4 5.67157 4.67157 5 5.5 5H13.2561Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 13C7.57165 13 8.5558 13.3746 9.32867 14H18.5C20.433 14 22 15.567 22 17.5C22 19.433 20.433 21 18.5 21H9.32867C8.5558 21.6254 7.57165 22 6.5 22C4.01472 22 2 19.9853 2 17.5C2 15.0147 4.01472 13 6.5 13ZM11 17.5C11 16.974 10.9098 16.4692 10.7439 16H18.5C19.3284 16 20 16.6716 20 17.5C20 18.3284 19.3284 19 18.5 19H10.7439C10.9098 18.5308 11 18.026 11 17.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Settings03Icon = forwardRef(Settings03IconInner);
export { Settings03Icon };
