import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CloudSun01IconInner(
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
        d="M11.0723 7.06571C11.521 4.19574 14.0041 2 17 2C20.3137 2 23 4.68629 23 8C23 9.71848 22.2773 11.2673 21.1214 12.3604C22.2728 13.3685 23 14.8493 23 16.5C23 19.5376 20.5376 22 17.5 22H7C3.68629 22 1 19.3137 1 16C1 12.8515 3.42516 10.2694 6.50941 10.0198C7.50426 8.45337 9.15253 7.3401 11.0723 7.06571ZM19.273 11.292C18.8713 11.1553 18.4487 11.0638 18.0112 11.0234C17.1724 8.98978 15.332 7.47421 13.1032 7.09322C13.514 5.32089 15.1027 4 17 4C19.2091 4 21 5.79086 21 8C21 9.3636 20.318 10.5691 19.273 11.292Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CloudSun01Icon = forwardRef(CloudSun01IconInner);
export { CloudSun01Icon };
