import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CurrencyBitcoinCircleIconInner(
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
        d="M15.5 14.25C15.5 14.9404 14.9404 15.5 14.25 15.5H10.5V13H14.25C14.9404 13 15.5 13.5596 15.5 14.25Z"
        fill="currentColor"
      />
      <path
        d="M13.75 8.5H10.5V11H13.75C14.4404 11 15 10.4404 15 9.75C15 9.05964 14.4404 8.5 13.75 8.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM10 5C10.5523 5 11 5.44772 11 6V6.5H12V6C12 5.44772 12.4477 5 13 5C13.5523 5 14 5.44772 14 6V6.50947C15.6781 6.63713 17 8.03919 17 9.75C17 10.5009 16.7454 11.1922 16.3178 11.7425C17.0398 12.3386 17.5 13.2406 17.5 14.25C17.5 16.0449 16.0449 17.5 14.25 17.5H14V18C14 18.5523 13.5523 19 13 19C12.4477 19 12 18.5523 12 18V17.5H11V18C11 18.5523 10.5523 19 10 19C9.44772 19 9 18.5523 9 18V17.5H8C7.44772 17.5 7 17.0523 7 16.5C7 15.9477 7.44772 15.5 8 15.5H8.5V8.5H8C7.44772 8.5 7 8.05228 7 7.5C7 6.94772 7.44772 6.5 8 6.5H9V6C9 5.44772 9.44772 5 10 5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CurrencyBitcoinCircleIcon = forwardRef(CurrencyBitcoinCircleIconInner);
export { CurrencyBitcoinCircleIcon };
