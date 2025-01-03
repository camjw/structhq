import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MessageSquare02IconInner(
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
        d="M7.7588 2H16.2414C17.0464 1.99999 17.7107 1.99998 18.2519 2.04419C18.814 2.09012 19.3307 2.18868 19.8161 2.43597C20.5687 2.81947 21.1806 3.43139 21.5641 4.18404C21.8114 4.66937 21.91 5.18608 21.9559 5.74817C22.0001 6.28936 22.0001 6.95372 22.0001 7.75868V13.2413C22.0001 14.0463 22.0001 14.7106 21.9559 15.2518C21.91 15.8139 21.8114 16.3306 21.5641 16.816C21.1806 17.5686 20.5687 18.1805 19.8161 18.564C19.3307 18.8113 18.814 18.9099 18.2519 18.9558C17.7107 19 17.0464 19 16.2414 19H13.6838C13.0197 19 12.8263 19.0047 12.6504 19.0408C12.4738 19.0771 12.303 19.137 12.1425 19.219C11.9826 19.3007 11.8286 19.4178 11.31 19.8327L8.89688 21.7632C8.7132 21.9102 8.52597 22.06 8.36137 22.1689C8.20394 22.273 7.8987 22.4593 7.50172 22.4597C7.0449 22.4602 6.61276 22.2525 6.32778 21.8955C6.08012 21.5852 6.03492 21.2305 6.01785 21.0425C6 20.846 6.00005 20.6062 6.00009 20.371L6.0001 18.9918C5.60829 18.9789 5.27229 18.9461 4.96482 18.8637C3.58445 18.4938 2.50626 17.4156 2.13639 16.0353C1.9993 15.5236 1.99962 14.933 2.00005 14.1376C2.00007 14.0924 2.0001 14.0465 2.0001 14L2.0001 7.7587C2.00008 6.95373 2.00007 6.28937 2.04429 5.74817C2.09022 5.18608 2.18878 4.66937 2.43607 4.18404C2.81956 3.43139 3.43149 2.81947 4.18413 2.43597C4.66947 2.18868 5.18617 2.09012 5.74827 2.04419C6.28947 1.99998 6.95383 1.99999 7.7588 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MessageSquare02Icon = forwardRef(MessageSquare02IconInner);
export { MessageSquare02Icon };