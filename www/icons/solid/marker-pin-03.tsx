import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MarkerPin03IconInner(
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
        d="M3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10C21 13.6785 18.9393 15.6862 17.0176 17.298C16.8145 17.4684 16.6153 17.6333 16.4208 17.7943C14.7005 19.2182 13.3531 20.3335 12.9806 22.1961C12.8871 22.6635 12.4767 23 12 23C11.5233 23 11.1129 22.6635 11.0194 22.1961C10.6469 20.3335 9.29947 19.2182 7.57915 17.7943C7.38469 17.6333 7.18547 17.4684 6.98236 17.298C5.06069 15.6862 3 13.6785 3 10ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MarkerPin03Icon = forwardRef(MarkerPin03IconInner);
export { MarkerPin03Icon };
