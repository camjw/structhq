import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function RefreshCw05IconInner(
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
        d="M21.4727 6.19278C21.6157 5.65932 21.2991 5.11098 20.7656 4.96804C20.2321 4.82509 19.6838 5.14168 19.5409 5.67514L19.4322 6.08068C16.5533 2.45671 11.3789 1.389 7.2501 3.77276C4.5146 5.3521 2.86232 8.08727 2.55214 11.0013C2.49368 11.5505 2.89149 12.0431 3.44068 12.1016C3.98986 12.16 4.48245 11.7622 4.5409 11.213C4.78633 8.90729 6.09163 6.751 8.2501 5.50481C11.4061 3.68271 15.3359 4.415 17.6454 7.06019L17.3015 6.96804C16.768 6.82509 16.2197 7.14168 16.0768 7.67514C15.9338 8.20861 16.2504 8.75695 16.7839 8.89989L19.5159 9.63194C20.0494 9.77488 20.5977 9.4583 20.7407 8.92483L21.4727 6.19278Z"
        fill="currentColor"
      />
      <path
        d="M21.448 12.9987C21.5065 12.4495 21.1087 11.9569 20.5595 11.8985C20.0103 11.84 19.5177 12.2378 19.4593 12.787C19.2138 15.0927 17.9085 17.249 15.7501 18.4952C12.5941 20.3173 8.66427 19.585 6.35471 16.9398L6.69869 17.032C7.23216 17.1749 7.7805 16.8583 7.92344 16.3249C8.06638 15.7914 7.7498 15.2431 7.21633 15.1001L4.48428 14.3681C3.95082 14.2251 3.40248 14.5417 3.25954 15.0752L2.52749 17.8072C2.38454 18.3407 2.70113 18.889 3.23459 19.032C3.76806 19.1749 4.3164 18.8583 4.45934 18.3249L4.56799 17.9194C7.44694 21.5433 12.6213 22.611 16.7501 20.2273C19.4856 18.6479 21.1378 15.9128 21.448 12.9987Z"
        fill="currentColor"
      />
    </svg>
  );
}
const RefreshCw05Icon = forwardRef(RefreshCw05IconInner);
export { RefreshCw05Icon };
