import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Monitor01IconInner(
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
        d="M17.2413 2H6.7587C5.95374 1.99999 5.28937 1.99998 4.74818 2.04419C4.18608 2.09012 3.66937 2.18868 3.18404 2.43598C2.43139 2.81947 1.81947 3.43139 1.43598 4.18404C1.18868 4.66937 1.09012 5.18608 1.04419 5.74818C0.999978 6.28937 0.999988 6.95372 1 7.75869V12.2413C0.999988 13.0463 0.999978 13.7106 1.04419 14.2518C1.09012 14.8139 1.18868 15.3306 1.43598 15.816C1.81947 16.5686 2.43139 17.1805 3.18404 17.564C3.66937 17.8113 4.18608 17.9099 4.74818 17.9558C5.28937 18 5.95373 18 6.7587 18H11V20H8C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22H16C16.5523 22 17 21.5523 17 21C17 20.4477 16.5523 20 16 20H13V18H17.2413C18.0462 18 18.7106 18 19.2518 17.9558C19.8139 17.9099 20.3306 17.8113 20.816 17.564C21.5686 17.1805 22.1805 16.5686 22.564 15.816C22.8113 15.3306 22.9099 14.8139 22.9558 14.2518C23 13.7106 23 13.0463 23 12.2413V7.75868C23 6.95372 23 6.28936 22.9558 5.74818C22.9099 5.18608 22.8113 4.66937 22.564 4.18404C22.1805 3.43139 21.5686 2.81947 20.816 2.43598C20.3306 2.18868 19.8139 2.09012 19.2518 2.04419C18.7106 1.99998 18.0463 1.99999 17.2413 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Monitor01Icon = forwardRef(Monitor01IconInner);
export { Monitor01Icon };