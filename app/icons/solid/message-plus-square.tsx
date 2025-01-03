import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MessagePlusSquareIconInner(
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
        d="M16.2414 2H7.7588C6.95383 1.99999 6.28946 1.99998 5.74827 2.04419C5.18617 2.09012 4.66947 2.18868 4.18413 2.43598C3.43149 2.81947 2.81956 3.43139 2.43607 4.18404C2.18878 4.66937 2.09022 5.18608 2.04429 5.74818C2.00007 6.28937 2.00008 6.95373 2.0001 7.7587L2.00005 14.1376C1.99962 14.933 1.9993 15.5236 2.13639 16.0353C2.50626 17.4156 3.58445 18.4938 4.96482 18.8637C5.27229 18.9461 5.60829 18.9789 6.0001 18.9918L6.00009 20.371C6.00005 20.6062 6 20.846 6.01785 21.0425C6.03492 21.2305 6.08012 21.5852 6.32778 21.8955C6.61276 22.2525 7.0449 22.4602 7.50172 22.4597C7.8987 22.4593 8.20394 22.273 8.36137 22.1689C8.52597 22.06 8.7132 21.9102 8.89688 21.7632L11.31 19.8327C11.8286 19.4178 11.9826 19.3007 12.1425 19.219C12.303 19.137 12.4738 19.0771 12.6504 19.0408C12.8263 19.0047 13.0197 19 13.6838 19H16.2414C17.0464 19 17.7107 19 18.2519 18.9558C18.814 18.9099 19.3307 18.8113 19.8161 18.564C20.5687 18.1805 21.1806 17.5686 21.5641 16.816C21.8114 16.3306 21.91 15.8139 21.9559 15.2518C22.0001 14.7106 22.0001 14.0463 22.0001 13.2413V7.75868C22.0001 6.95372 22.0001 6.28936 21.9559 5.74818C21.91 5.18608 21.8114 4.66937 21.5641 4.18404C21.1806 3.43139 20.5687 2.81947 19.8161 2.43598C19.3307 2.18868 18.814 2.09012 18.2519 2.04419C17.7107 1.99998 17.0464 1.99999 16.2414 2ZM12 6.5C12.5523 6.5 13 6.94772 13 7.5V9.5H15C15.5523 9.5 16 9.94772 16 10.5C16 11.0523 15.5523 11.5 15 11.5H13V13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5V11.5H9C8.44772 11.5 8 11.0523 8 10.5C8 9.94772 8.44772 9.5 9 9.5H11V7.5C11 6.94772 11.4477 6.5 12 6.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MessagePlusSquareIcon = forwardRef(MessagePlusSquareIconInner);
export { MessagePlusSquareIcon };
