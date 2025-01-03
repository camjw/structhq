import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function DistributeSpacingVerticalIconInner(
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
        d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H3C2.44772 4 2 3.55228 2 3Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 21C2 20.4477 2.44772 20 3 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.96802 8L16.032 8C16.4706 7.99999 16.8491 7.99998 17.1624 8.02135C17.4922 8.04385 17.8221 8.09336 18.1481 8.22836C18.8831 8.53284 19.4672 9.11687 19.7716 9.85195C19.9066 10.1779 19.9561 10.5078 19.9787 10.8376C20 11.1509 20 11.5294 20 11.968V12.032C20 12.4706 20 12.8491 19.9787 13.1624C19.9561 13.4922 19.9066 13.8221 19.7716 14.1481C19.4672 14.8831 18.8831 15.4672 18.1481 15.7716C17.8221 15.9066 17.4922 15.9561 17.1624 15.9787C16.8491 16 16.4706 16 16.032 16H7.96804C7.52938 16 7.15088 16 6.83762 15.9786C6.50779 15.9561 6.17788 15.9066 5.85195 15.7716C5.11687 15.4672 4.53284 14.8831 4.22836 14.148C4.09336 13.8221 4.04385 13.4922 4.02135 13.1624C3.99998 12.8491 3.99999 12.4706 4 12.032V11.968C3.99999 11.5294 3.99998 11.1509 4.02135 10.8376C4.04385 10.5078 4.09336 10.1779 4.22836 9.85195C4.53284 9.11687 5.11687 8.53284 5.85195 8.22836C6.17788 8.09336 6.50779 8.04385 6.83762 8.02135C7.15088 7.99998 7.52937 7.99999 7.96802 8Z"
        fill="currentColor"
      />
    </svg>
  );
}
const DistributeSpacingVerticalIcon = forwardRef(
  DistributeSpacingVerticalIconInner,
);
export { DistributeSpacingVerticalIcon };
