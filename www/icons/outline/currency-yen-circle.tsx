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
        d="M12 18V12M12 12L16 7M12 12L8 7M16 12H8M15.5 15H8.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const CurrencyYenCircleIcon = forwardRef(CurrencyYenCircleIconInner);
export { CurrencyYenCircleIcon };
