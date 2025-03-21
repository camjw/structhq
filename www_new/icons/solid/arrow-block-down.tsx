import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowBlockDownIconInner(
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
        d="M9.77689 2.00001C11.259 2.00057 12.7411 2.00057 14.2232 2.00001C14.3423 1.99996 14.4845 1.99991 14.6099 2.01015C14.7551 2.02201 14.9631 2.05245 15.181 2.1635C15.4633 2.30731 15.6927 2.53678 15.8365 2.81903C15.9476 3.03697 15.978 3.24496 15.9899 3.39018C16.0001 3.5155 16.0001 3.65777 16 3.77688C16 3.7847 16 3.79241 16 3.80001V13H19C19.4045 13 19.7691 13.2437 19.9239 13.6173C20.0787 13.991 19.9931 14.4211 19.7071 14.7071L12.7071 21.7071C12.3166 22.0976 11.6834 22.0976 11.2929 21.7071L4.29292 14.7071C4.00692 14.4211 3.92137 13.991 4.07615 13.6173C4.23093 13.2437 4.59557 13 5.00003 13H8.00003V3.80001C8.00003 3.79241 8.00003 3.78469 8.00002 3.77687C7.99998 3.65776 7.99992 3.5155 8.01016 3.39018C8.02203 3.24496 8.05247 3.03697 8.16352 2.81903C8.30733 2.53678 8.5368 2.30731 8.81904 2.1635C9.03699 2.05245 9.24498 2.02201 9.3902 2.01015C9.51552 1.99991 9.65777 1.99996 9.77689 2.00001Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowBlockDownIcon = forwardRef(ArrowBlockDownIconInner);
export { ArrowBlockDownIcon };
