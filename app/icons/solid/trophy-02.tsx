import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Trophy02IconInner(
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
        d="M7.02608 2C6.79254 1.99998 6.56506 1.99995 6.372 2.01457C6.1604 2.03059 5.91015 2.0683 5.65477 2.18739C5.22862 2.38611 4.88611 2.72862 4.68739 3.15477C4.5683 3.41015 4.53059 3.6604 4.51457 3.872C4.49995 4.06505 4.49998 4.29253 4.5 4.52607L4.5 10.5C4.5 14.3031 7.33064 17.445 11 17.9339V20H7C6.44772 20 6 20.4477 6 21C6 21.5523 6.44772 22 7 22H17C17.5523 22 18 21.5523 18 21C18 20.4477 17.5523 20 17 20H13V17.9339C16.6694 17.445 19.5 14.3031 19.5 10.5L19.5 4.52608C19.5 4.29257 19.5001 4.06503 19.4854 3.872C19.4694 3.6604 19.4317 3.41015 19.3126 3.15477C19.1139 2.72862 18.7714 2.38611 18.3452 2.18739C18.0899 2.0683 17.8396 2.03059 17.628 2.01457C17.435 1.99995 17.2075 1.99998 16.9739 2H7.02608Z"
        fill="currentColor"
      />
      <path
        d="M2 4C2.55228 4 3 4.44772 3 5V10C3 10.5523 2.55228 11 2 11C1.44772 11 1 10.5523 1 10V5C1 4.44772 1.44772 4 2 4Z"
        fill="currentColor"
      />
      <path
        d="M22 4C22.5523 4 23 4.44772 23 5V10C23 10.5523 22.5523 11 22 11C21.4477 11 21 10.5523 21 10V5C21 4.44772 21.4477 4 22 4Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Trophy02Icon = forwardRef(Trophy02IconInner);
export { Trophy02Icon };
