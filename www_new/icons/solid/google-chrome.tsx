import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function GoogleChromeIconInner(
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
        d="M7.3758 10.0948L4.62601 5.48294C4.40582 5.11364 4.29572 4.929 4.27091 4.7166C4.25075 4.54412 4.28692 4.32636 4.36174 4.16966C4.45389 3.97668 4.5973 3.85491 4.88412 3.61137C6.80233 1.98258 9.28642 1 12 1C15.8074 1 19.1629 2.93434 21.1376 5.87389C21.3556 6.19845 21.4646 6.36074 21.455 6.52857C21.4471 6.6665 21.368 6.81497 21.2579 6.89844C21.124 7 20.9137 7 20.4932 7H12C9.9132 7 8.12499 8.2784 7.3758 10.0948Z"
        fill="currentColor"
      />
      <path
        d="M1 12C1 10.3114 1.38049 8.71163 2.06042 7.2818C2.22799 6.92942 2.31178 6.75323 2.46081 6.67585C2.58329 6.61226 2.75115 6.60438 2.87904 6.65623C3.03467 6.71931 3.14217 6.89961 3.35717 7.26021L7.59531 14.3682C8.43952 15.9351 10.0954 17 12 17C12.2053 17 12.4076 16.9876 12.6064 16.9636L9.93148 21.625C9.71771 21.9975 9.61083 22.1838 9.43776 22.3095C9.29737 22.4115 9.08939 22.4868 8.91624 22.4983C8.70278 22.5125 8.52682 22.4472 8.1749 22.3167C3.98549 20.7628 1 16.7301 1 12Z"
        fill="currentColor"
      />
      <path
        d="M11.7268 22.5147C11.6029 22.7306 11.7511 23 12 23C18.0751 23 23 18.0751 23 12C23 11.3802 22.9487 10.7723 22.8502 10.1804C22.7885 9.80989 22.7577 9.62464 22.6392 9.44638C22.543 9.30176 22.3742 9.15872 22.2158 9.08763C22.0205 9 21.8056 9 21.3757 9H16.0004C16.6281 9.83566 17 10.8744 17 12C17 12.9795 16.7183 13.8933 16.2315 14.6647L11.7268 22.5147Z"
        fill="currentColor"
      />
      <path
        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const GoogleChromeIcon = forwardRef(GoogleChromeIconInner);
export { GoogleChromeIcon };
