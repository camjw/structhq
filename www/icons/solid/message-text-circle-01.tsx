import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MessageTextCircle01IconInner(
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
        d="M12.5 2C7.25334 2 3.00005 6.25329 3.00005 11.5C3.00005 12.56 3.17404 13.5814 3.4958 14.536C3.55239 14.7039 3.58571 14.8033 3.60736 14.8766L3.61444 14.9012L3.61069 14.909C3.58499 14.962 3.54679 15.0332 3.47533 15.1655L1.82345 18.223C1.72107 18.4124 1.61425 18.6101 1.54078 18.7819C1.46776 18.9527 1.34948 19.2661 1.40768 19.6376C1.4759 20.073 1.73218 20.4564 2.10846 20.6859C2.42947 20.8818 2.76426 20.8923 2.95 20.8901C3.13688 20.8879 3.3603 20.8648 3.57447 20.8426L8.72943 20.3097C8.81199 20.3012 8.85515 20.2968 8.88677 20.2944L8.89084 20.2941L8.90321 20.2984C8.94206 20.3124 8.99475 20.3326 9.0857 20.3677C10.1466 20.7764 11.2984 21 12.5 21C17.7468 21 22 16.7467 22 11.5C22 6.25329 17.7468 2 12.5 2ZM8 8.5C7.44772 8.5 7 8.94772 7 9.5C7 10.0523 7.44772 10.5 8 10.5H12C12.5523 10.5 13 10.0523 13 9.5C13 8.94772 12.5523 8.5 12 8.5H8ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H8Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MessageTextCircle01Icon = forwardRef(MessageTextCircle01IconInner);
export { MessageTextCircle01Icon };
