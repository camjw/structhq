import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CurrencyRubleIconInner(
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
        d="M8.5 2.5C7.94772 2.5 7.5 2.94772 7.5 3.5V10.5H6.5C5.94772 10.5 5.5 10.9477 5.5 11.5C5.5 12.0523 5.94772 12.5 6.5 12.5H7.5V14.5H6.5C5.94772 14.5 5.5 14.9477 5.5 15.5C5.5 16.0523 5.94772 16.5 6.5 16.5H7.5V20.5C7.5 21.0523 7.94772 21.5 8.5 21.5C9.05228 21.5 9.5 21.0523 9.5 20.5V16.5H13.5C14.0523 16.5 14.5 16.0523 14.5 15.5C14.5 14.9477 14.0523 14.5 13.5 14.5H9.5V12.5H14.5C17.2614 12.5 19.5 10.2614 19.5 7.5C19.5 4.73858 17.2614 2.5 14.5 2.5H8.5ZM9.5 10.5H14.5C16.1569 10.5 17.5 9.15685 17.5 7.5C17.5 5.84315 16.1569 4.5 14.5 4.5H9.5V10.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CurrencyRubleIcon = forwardRef(CurrencyRubleIconInner);
export { CurrencyRubleIcon };
