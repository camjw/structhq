import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CreditCardLockIconInner(
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
        d="M20.25 17.5V15.75C20.25 14.7835 19.4665 14 18.5 14C17.5335 14 16.75 14.7835 16.75 15.75V17.5M22 10H2M22 11V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5H5.2C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.0799 2 8.2V15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.0799 19 5.2 19H11M16.6 21.5H20.4C20.9601 21.5 21.2401 21.5 21.454 21.391C21.6422 21.2951 21.7951 21.1422 21.891 20.954C22 20.7401 22 20.4601 22 19.9V19.1C22 18.5399 22 18.2599 21.891 18.046C21.7951 17.8578 21.6422 17.7049 21.454 17.609C21.2401 17.5 20.9601 17.5 20.4 17.5H16.6C16.0399 17.5 15.7599 17.5 15.546 17.609C15.3578 17.7049 15.2049 17.8578 15.109 18.046C15 18.2599 15 18.5399 15 19.1V19.9C15 20.4601 15 20.7401 15.109 20.954C15.2049 21.1422 15.3578 21.2951 15.546 21.391C15.7599 21.5 16.0399 21.5 16.6 21.5Z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const CreditCardLockIcon = forwardRef(CreditCardLockIconInner);
export { CreditCardLockIcon };
