import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MessageNotificationSquareIconInner(
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
        d="M21.1213 2.87868C22.2929 4.05025 22.2929 5.94975 21.1213 7.12132C19.9497 8.29289 18.0503 8.29289 16.8787 7.12132C15.7071 5.94975 15.7071 4.05025 16.8787 2.87868C18.0503 1.70711 19.9497 1.70711 21.1213 2.87868Z"
        fill="currentColor"
      />
      <path
        d="M22.0001 10.6031C22.0001 10.0804 22.0001 9.81898 21.9216 9.69597C21.8408 9.56938 21.7674 9.51644 21.6217 9.47992C21.4802 9.44443 21.1826 9.54378 20.5874 9.74249C18.8469 10.3236 16.8502 9.92125 15.4645 8.53553C14.0788 7.14984 13.6764 5.15316 14.2575 3.41267C14.4562 2.81751 14.5555 2.51992 14.52 2.37839C14.4835 2.23273 14.4306 2.15925 14.304 2.07848C14.181 2 13.9196 2 13.3969 2H7.7588C6.95383 1.99999 6.28946 1.99998 5.74827 2.04419C5.18617 2.09012 4.66947 2.18868 4.18413 2.43598C3.43149 2.81947 2.81956 3.43139 2.43607 4.18404C2.18878 4.66937 2.09022 5.18608 2.04429 5.74818C2.00007 6.28937 2.00008 6.95373 2.0001 7.7587L2.00005 14.1376C1.99962 14.933 1.9993 15.5236 2.13639 16.0353C2.50626 17.4156 3.58445 18.4938 4.96482 18.8637C5.27229 18.9461 5.60829 18.9789 6.0001 18.9918L6.00009 20.371C6.00005 20.6062 6 20.846 6.01785 21.0425C6.03492 21.2305 6.08012 21.5852 6.32778 21.8955C6.61276 22.2525 7.0449 22.4602 7.50172 22.4597C7.8987 22.4593 8.20394 22.273 8.36137 22.1689C8.52597 22.06 8.7132 21.9102 8.89688 21.7632L11.31 19.8327C11.8286 19.4178 11.9826 19.3007 12.1425 19.219C12.303 19.137 12.4738 19.0771 12.6504 19.0408C12.8263 19.0047 13.0197 19 13.6838 19H16.2414C17.0464 19 17.7107 19 18.2519 18.9558C18.814 18.9099 19.3307 18.8113 19.8161 18.564C20.5687 18.1805 21.1806 17.5686 21.5641 16.816C21.8114 16.3306 21.91 15.8139 21.9559 15.2518C22.0001 14.7106 22.0001 14.0463 22.0001 13.2413V10.6031Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MessageNotificationSquareIcon = forwardRef(
  MessageNotificationSquareIconInner,
);
export { MessageNotificationSquareIcon };
