import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function LayerSingleIconInner(
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
        d="M11.7234 6.0848C11.9062 6.05051 12.0938 6.05051 12.2766 6.0848C12.493 6.12541 12.6861 6.22394 12.7794 6.27155C12.789 6.27646 12.7976 6.28082 12.805 6.28452L22.4472 11.1056C22.786 11.275 23 11.6213 23 12.0001C23 12.3788 22.786 12.7251 22.4472 12.8945L12.805 17.7156C12.7976 17.7193 12.789 17.7237 12.7794 17.7286C12.6861 17.7762 12.493 17.8747 12.2766 17.9153C12.0938 17.9496 11.9062 17.9496 11.7234 17.9153C11.507 17.8747 11.3139 17.7762 11.2206 17.7286C11.211 17.7237 11.2024 17.7193 11.195 17.7156L1.55279 12.8945C1.214 12.7251 1 12.3788 1 12.0001C1 11.6213 1.214 11.275 1.55279 11.1056L11.195 6.28452C11.2024 6.28082 11.211 6.27645 11.2206 6.27155C11.3139 6.22394 11.507 6.12541 11.7234 6.0848Z"
        fill="currentColor"
      />
    </svg>
  );
}
const LayerSingleIcon = forwardRef(LayerSingleIconInner);
export { LayerSingleIcon };
