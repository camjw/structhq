import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Building03IconInner(
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
        d="M7.16146 2H16.8385C17.3657 1.99998 17.8205 1.99997 18.195 2.03057C18.5904 2.06287 18.9836 2.13419 19.362 2.32698C19.9265 2.6146 20.3854 3.07355 20.673 3.63803C20.8658 4.01641 20.9371 4.40963 20.9694 4.80498C21 5.17954 21 5.6343 21 6.16144V20H22C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H2C1.44772 22 1 21.5523 1 21C1 20.4477 1.44772 20 2 20H3L3 6.16146C2.99998 5.63431 2.99997 5.17955 3.03057 4.80498C3.06287 4.40963 3.13419 4.01641 3.32698 3.63803C3.6146 3.07355 4.07354 2.6146 4.63803 2.32698C5.01641 2.13419 5.40963 2.06287 5.80497 2.03057C6.17953 1.99997 6.63434 1.99998 7.16146 2ZM7.25 6C6.69772 6 6.25 6.44772 6.25 7C6.25 7.55229 6.69772 8 7.25 8H10C10.5523 8 11 7.55229 11 7C11 6.44772 10.5523 6 10 6H7.25ZM7.25 10C6.69772 10 6.25 10.4477 6.25 11C6.25 11.5523 6.69772 12 7.25 12H10C10.5523 12 11 11.5523 11 11C11 10.4477 10.5523 10 10 10H7.25ZM6.25 15C6.25 14.4477 6.69772 14 7.25 14H10C10.5523 14 11 14.4477 11 15C11 15.5523 10.5523 16 10 16H7.25C6.69772 16 6.25 15.5523 6.25 15ZM14 6C13.4477 6 13 6.44772 13 7C13 7.55229 13.4477 8 14 8H16.75C17.3023 8 17.75 7.55229 17.75 7C17.75 6.44772 17.3023 6 16.75 6H14ZM13 11C13 10.4477 13.4477 10 14 10H16.75C17.3023 10 17.75 10.4477 17.75 11C17.75 11.5523 17.3023 12 16.75 12H14C13.4477 12 13 11.5523 13 11ZM14 14C13.4477 14 13 14.4477 13 15C13 15.5523 13.4477 16 14 16H16.75C17.3023 16 17.75 15.5523 17.75 15C17.75 14.4477 17.3023 14 16.75 14H14Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Building03Icon = forwardRef(Building03IconInner);
export { Building03Icon };
