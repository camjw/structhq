import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MessageQuestionSquareIconInner(
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
        d="M16.2414 2H7.7588C6.95383 1.99999 6.28946 1.99998 5.74827 2.04419C5.18617 2.09012 4.66947 2.18868 4.18413 2.43598C3.43149 2.81947 2.81956 3.43139 2.43607 4.18404C2.18878 4.66937 2.09022 5.18608 2.04429 5.74818C2.00007 6.28937 2.00008 6.95373 2.0001 7.7587L2.00005 14.1376C1.99962 14.933 1.9993 15.5236 2.13639 16.0353C2.50626 17.4156 3.58445 18.4938 4.96482 18.8637C5.27229 18.9461 5.60829 18.9789 6.0001 18.9918L6.00009 20.371C6.00005 20.6062 6 20.846 6.01785 21.0425C6.03492 21.2305 6.08012 21.5852 6.32778 21.8955C6.61276 22.2525 7.0449 22.4602 7.50172 22.4597C7.8987 22.4593 8.20394 22.273 8.36137 22.1689C8.52597 22.06 8.7132 21.9102 8.89688 21.7632L11.31 19.8327C11.8286 19.4178 11.9826 19.3007 12.1425 19.219C12.303 19.137 12.4738 19.0771 12.6504 19.0408C12.8263 19.0047 13.0197 19 13.6838 19H16.2414C17.0464 19 17.7107 19 18.2519 18.9558C18.814 18.9099 19.3307 18.8113 19.8161 18.564C20.5687 18.1805 21.1806 17.5686 21.5641 16.816C21.8114 16.3306 21.91 15.8139 21.9559 15.2518C22.0001 14.7106 22.0001 14.0463 22.0001 13.2413V7.75868C22.0001 6.95372 22.0001 6.28936 21.9559 5.74818C21.91 5.18608 21.8114 4.66937 21.5641 4.18404C21.1806 3.43139 20.5687 2.81947 19.8161 2.43598C19.3307 2.18868 18.814 2.09012 18.2519 2.04419C17.7107 1.99998 17.0464 1.99999 16.2414 2ZM11.4887 7.67211C11.7428 7.52274 12.0417 7.46814 12.3322 7.51798C12.6228 7.56781 12.8863 7.71888 13.0762 7.94441C13.266 8.16994 13.37 8.45539 13.3695 8.75019V8.75168C13.3695 8.97025 13.1923 9.27142 12.6907 9.60587C12.4702 9.75281 12.2427 9.86729 12.0664 9.94567C11.9796 9.98423 11.9087 10.0125 11.8618 10.0304C11.8384 10.0393 11.8213 10.0455 11.8114 10.049L11.8023 10.0522L11.8038 10.0517C11.2806 10.2268 10.998 10.7927 11.1725 11.3162C11.3454 11.835 11.9218 12.1201 12.4386 11.9483C12.4841 11.933 12.529 11.9164 12.5738 11.8994C12.6499 11.8704 12.7546 11.8284 12.8786 11.7733C13.1238 11.6643 13.4584 11.4978 13.8001 11.27C14.4225 10.855 15.3693 10.0322 15.3695 8.75212C15.3704 7.98537 15.1 7.24301 14.6062 6.65641C14.1122 6.06954 13.4264 5.67645 12.6703 5.54676C11.9143 5.41708 11.1367 5.55916 10.4753 5.94785C9.81396 6.33653 9.3115 6.94674 9.05694 7.6704C8.87367 8.19138 9.14744 8.7623 9.66843 8.94557C10.1894 9.12885 10.7603 8.85507 10.9436 8.33408C11.0414 8.05598 11.2345 7.82148 11.4887 7.67211ZM12.1502 13C11.5979 13 11.1502 13.4477 11.1502 14C11.1502 14.5523 11.5979 15 12.1502 15H12.1602C12.7125 15 13.1602 14.5523 13.1602 14C13.1602 13.4477 12.7125 13 12.1602 13H12.1502Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MessageQuestionSquareIcon = forwardRef(MessageQuestionSquareIconInner);
export { MessageQuestionSquareIcon };
