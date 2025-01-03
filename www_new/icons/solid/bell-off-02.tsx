import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BellOff02IconInner(
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
        d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L5.14902 6.56323C5.05063 7.03229 4.99998 7.51361 4.99998 8.00011C4.99998 10.9128 4.26798 12.844 3.5006 14.0772L3.48876 14.0962C3.13146 14.6704 2.84899 15.1244 2.65857 15.4548C2.56315 15.6203 2.47622 15.7798 2.41186 15.9216C2.37973 15.9923 2.34379 16.0791 2.31569 16.1734C2.29239 16.2516 2.24799 16.4188 2.26463 16.6224C2.27582 16.7592 2.30372 16.9929 2.43787 17.2344C2.57202 17.4759 2.75575 17.6231 2.86599 17.7048C3.11628 17.8905 3.40371 17.933 3.49964 17.9471L3.50407 17.9478C3.65148 17.9696 3.81875 17.9805 3.98751 17.987C4.32272 18.0001 4.78679 18.0001 5.36391 18.0001H16.5859L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L6.99792 5.58371C6.97677 5.56045 6.95447 5.53814 6.93108 5.51687L3.70711 2.29289Z"
        fill="currentColor"
      />
      <path
        d="M10 22C9.44772 22 9 21.5523 9 21C9 20.4477 9.44772 20 10 20H14C14.5523 20 15 20.4477 15 21C15 21.5523 14.5523 22 14 22H10Z"
        fill="currentColor"
      />
      <path
        d="M21.5306 17.2879C21.5413 17.2706 21.5519 17.2527 21.5621 17.2343C21.6962 16.9928 21.7241 16.7591 21.7353 16.6223C21.752 16.4187 21.7076 16.2515 21.6843 16.1733C21.6562 16.079 21.6202 15.9922 21.5881 15.9215C21.5237 15.7797 21.4368 15.6202 21.3414 15.4547C21.151 15.1243 20.8686 14.6705 20.5114 14.0965L20.4994 14.0771C19.732 12.8439 19 10.9127 19 8C19 6.14349 18.2625 4.36301 16.9497 3.05025C15.637 1.7375 13.8565 1 12 1C10.2007 1 8.47291 1.6927 7.17305 2.93041L21.5306 17.2879Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BellOff02Icon = forwardRef(BellOff02IconInner);
export { BellOff02Icon };
