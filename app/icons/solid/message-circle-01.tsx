import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MessageCircle01IconInner(
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
        d="M3.00005 11.5C3.00005 6.25329 7.25334 2 12.5 2C17.7467 2 22 6.25329 22 11.5C22 16.7467 17.7468 21 12.5 21C11.2984 21 10.1466 20.7764 9.0857 20.3677C8.99475 20.3326 8.94206 20.3124 8.90321 20.2984C8.89846 20.2967 8.89434 20.2953 8.89084 20.2941L8.88677 20.2944C8.85515 20.2968 8.81199 20.3012 8.72943 20.3097L3.57447 20.8426C3.3603 20.8648 3.13688 20.8879 2.95 20.8901C2.76426 20.8923 2.42947 20.8818 2.10846 20.6859C1.73218 20.4564 1.4759 20.073 1.40768 19.6376C1.34948 19.2661 1.46776 18.9527 1.54078 18.7819C1.61425 18.6101 1.72107 18.4125 1.82345 18.223L3.47533 15.1655C3.54679 15.0332 3.58499 14.962 3.61069 14.909C3.61204 14.9063 3.61329 14.9036 3.61444 14.9012C3.61251 14.8943 3.61018 14.8861 3.60736 14.8766C3.58571 14.8033 3.55239 14.7039 3.4958 14.536C3.17404 13.5814 3.00005 12.56 3.00005 11.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MessageCircle01Icon = forwardRef(MessageCircle01IconInner);
export { MessageCircle01Icon };
