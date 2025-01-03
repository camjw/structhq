import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MarkerPin01IconInner(
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
        d="M3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10C21 12.5262 19.8532 14.7402 18.2923 16.767C16.988 18.4606 15.3183 20.1158 13.6506 21.769L13.6495 21.7702C13.3345 22.0825 13.0195 22.3947 12.7071 22.7071C12.3166 23.0976 11.6834 23.0976 11.2929 22.7071C10.9803 22.3945 10.6644 22.0813 10.3492 21.7688C8.68146 20.1156 7.01205 18.4606 5.70772 16.767C4.14683 14.7402 3 12.5262 3 10ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MarkerPin01Icon = forwardRef(MarkerPin01IconInner);
export { MarkerPin01Icon };
