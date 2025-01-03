import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function SlashDividerIconInner(
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
        d="M17.4472 1.10555C17.9412 1.35254 18.1414 1.95321 17.8944 2.44719L7.8944 22.4472C7.64741 22.9412 7.04674 23.1414 6.55276 22.8944C6.05878 22.6474 5.85856 22.0467 6.10555 21.5528L16.1055 1.55276C16.3525 1.05878 16.9532 0.858558 17.4472 1.10555Z"
        fill="currentColor"
      />
    </svg>
  );
}
const SlashDividerIcon = forwardRef(SlashDividerIconInner);
export { SlashDividerIcon };
