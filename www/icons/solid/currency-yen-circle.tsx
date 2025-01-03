import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CurrencyYenCircleIconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM7.37528 6.21917C7.80654 5.87416 8.43583 5.94408 8.78084 6.37534L12 10.3993L15.2191 6.37534C15.5641 5.94408 16.1934 5.87416 16.6247 6.21917C17.0559 6.56418 17.1259 7.19347 16.7808 7.62473L14.0806 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V14H15.5C16.0523 14 16.5 14.4477 16.5 15C16.5 15.5523 16.0523 16 15.5 16H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V16H8.5C7.94772 16 7.5 15.5523 7.5 15C7.5 14.4477 7.94772 14 8.5 14H11V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H9.91932L7.21911 7.62473C6.8741 7.19347 6.94402 6.56418 7.37528 6.21917Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CurrencyYenCircleIcon = forwardRef(CurrencyYenCircleIconInner);
export { CurrencyYenCircleIcon };
