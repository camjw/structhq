import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function DistributeSpacingHorizontalIconInner(
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
        d="M21 2C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V3C20 2.44772 20.4477 2 21 2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2C3.55229 2 4 2.44772 4 3L4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21L2 3C2 2.44772 2.44772 2 3 2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.968 4H12.032C12.4706 3.99999 12.8491 3.99998 13.1624 4.02135C13.4922 4.04385 13.8221 4.09336 14.1481 4.22836C14.8831 4.53284 15.4672 5.11687 15.7716 5.85195C15.9066 6.17788 15.9561 6.50779 15.9787 6.83762C16 7.15088 16 7.52936 16 7.96801V16.032C16 16.4706 16 16.8491 15.9787 17.1624C15.9561 17.4922 15.9066 17.8221 15.7716 18.1481C15.4672 18.8831 14.8831 19.4672 14.1481 19.7716C13.8221 19.9066 13.4922 19.9561 13.1624 19.9786C12.8491 20 12.4706 20 12.032 20H11.968C11.5294 20 11.1509 20 10.8376 19.9786C10.5078 19.9561 10.1779 19.9066 9.85195 19.7716C9.11687 19.4672 8.53284 18.8831 8.22836 18.148C8.09336 17.8221 8.04385 17.4922 8.02135 17.1624C7.99998 16.8491 7.99999 16.4706 8 16.032V7.96802C7.99999 7.52937 7.99998 7.15088 8.02135 6.83762C8.04385 6.50779 8.09336 6.17788 8.22836 5.85195C8.53284 5.11687 9.11687 4.53284 9.85195 4.22836C10.1779 4.09336 10.5078 4.04385 10.8376 4.02135C11.1509 3.99998 11.5294 3.99999 11.968 4Z"
        fill="currentColor"
      />
    </svg>
  );
}
const DistributeSpacingHorizontalIcon = forwardRef(
  DistributeSpacingHorizontalIconInner,
);
export { DistributeSpacingHorizontalIcon };
