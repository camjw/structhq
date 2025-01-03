import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Speedometer02IconInner(
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
        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 14.363 22.2549 16.552 20.9869 18.3448C20.8246 18.5742 20.7435 18.6889 20.6222 18.745C20.5207 18.7919 20.3902 18.803 20.2823 18.7739C20.1533 18.7391 20.0468 18.6326 19.8339 18.4197L19.5011 18.0869C18.887 17.4724 18.4619 17.047 17.9556 16.7368C17.5083 16.4627 17.0205 16.2607 16.5104 16.1382C15.9331 15.9996 15.3317 15.9998 14.463 16L9.53698 16C8.66824 15.9998 8.06691 15.9996 7.48961 16.1382C6.97944 16.2607 6.49172 16.4627 6.04437 16.7369C5.53816 17.0471 5.11307 17.4724 4.49895 18.0869L4.16609 18.4197C3.95317 18.6327 3.8467 18.7391 3.71771 18.7739C3.60978 18.803 3.47928 18.7919 3.37781 18.745C3.25654 18.6889 3.17541 18.5742 3.01315 18.3448C1.74509 16.552 1 14.363 1 12ZM13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V5.25C11 5.80228 11.4477 6.25 12 6.25C12.5523 6.25 13 5.80228 13 5.25V3ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H5.25C5.80228 13 6.25 12.5523 6.25 12C6.25 11.4477 5.80228 11 5.25 11H3ZM18.75 11C18.1977 11 17.75 11.4477 17.75 12C17.75 12.5523 18.1977 13 18.75 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H18.75ZM6.33656 4.99284C5.94604 4.60232 5.31287 4.60232 4.92235 4.99284C4.53182 5.38337 4.53182 6.01653 4.92235 6.40706L6.48515 7.96986C6.87568 8.36039 7.50884 8.36039 7.89937 7.96986C8.28989 7.57934 8.28989 6.94617 7.89937 6.55565L6.33656 4.99284ZM19.0727 6.41205C19.4659 6.02431 19.4704 5.39116 19.0827 4.99787C18.6949 4.60459 18.0618 4.6001 17.6685 4.98785L12.6478 9.93785C12.6052 9.97989 12.5671 10.0248 12.5336 10.072C12.3638 10.0251 12.1848 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 11.8151 13.9749 11.6361 13.928 11.4661C13.9714 11.4353 14.0129 11.4006 14.052 11.3621L19.0727 6.41205Z"
        fill="currentColor"
      />
      <path
        d="M18.1674 19.5817L18.4197 19.8339C18.6326 20.0469 18.7391 20.1533 18.7738 20.2823C18.8029 20.3903 18.7918 20.5208 18.7449 20.6222C18.6889 20.7435 18.5742 20.8246 18.3447 20.9869C16.5519 22.2549 14.363 23 12 23C9.63703 23 7.44808 22.2549 5.65527 20.9869C5.42586 20.8246 5.31115 20.7435 5.25509 20.6222C5.20819 20.5208 5.19708 20.3903 5.22617 20.2823C5.26093 20.1533 5.36739 20.0469 5.58032 19.834L5.8326 19.5817C6.55806 18.8562 6.81009 18.6133 7.08936 18.4421C7.35777 18.2777 7.6504 18.1565 7.95651 18.083C8.275 18.0065 8.62499 18.0001 9.65094 18.0001L14.349 18C15.375 18 15.725 18.0065 16.0435 18.0829C16.3496 18.1564 16.6422 18.2776 16.9106 18.4421C17.1899 18.6133 17.442 18.8562 18.1674 19.5817Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Speedometer02Icon = forwardRef(Speedometer02IconInner);
export { Speedometer02Icon };
