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
        d="M8.5 11.5H14.5C16.7091 11.5 18.5 9.70914 18.5 7.5C18.5 5.29086 16.7091 3.5 14.5 3.5H8.5V11.5ZM8.5 11.5H6.5M13.5 15.5H6.5M8.5 4V20.5"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const CurrencyRubleIcon = forwardRef(CurrencyRubleIconInner);
export { CurrencyRubleIcon };
