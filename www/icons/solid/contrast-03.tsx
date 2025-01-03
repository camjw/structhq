import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Contrast03IconInner(
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
        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM6.57337 17.3933C12.5491 17.3933 17.3933 12.5491 17.3933 6.57337C17.3933 5.68662 17.2867 4.82479 17.0855 4C19.4559 5.70179 21 8.48192 21 11.6227C21 16.8016 16.8016 21 11.6227 21C8.48192 21 5.70179 19.4559 4 17.0855C4.82479 17.2867 5.68662 17.3933 6.57337 17.3933Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Contrast03Icon = forwardRef(Contrast03IconInner);
export { Contrast03Icon };
