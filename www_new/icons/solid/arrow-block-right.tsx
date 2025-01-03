import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowBlockRightIconInner(
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
        d="M13.6173 4.07615C13.991 3.92137 14.4211 4.00692 14.7071 4.29292L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L14.7071 19.7071C14.4211 19.9931 13.991 20.0787 13.6173 19.9239C13.2437 19.7691 13 19.4045 13 19V16C9.92564 16 6.85126 15.9989 3.77688 16C3.65777 16.0001 3.5155 16.0001 3.39018 15.9899C3.24496 15.978 3.03697 15.9476 2.81903 15.8365C2.53678 15.6927 2.30731 15.4633 2.1635 15.181C2.05245 14.9631 2.02201 14.7551 2.01015 14.6099C1.99991 14.4845 1.99996 14.3423 2.00001 14.2232C2.00057 12.7411 2.00057 11.259 2.00001 9.77689C1.99996 9.65777 1.99991 9.51552 2.01015 9.3902C2.02201 9.24498 2.05245 9.03699 2.1635 8.81904C2.30731 8.5368 2.53678 8.30733 2.81903 8.16352C3.03697 8.05247 3.24496 8.02203 3.39018 8.01016C3.5155 7.99992 3.65776 7.99998 3.77687 8.00002C6.85125 8.00124 9.92563 8.00003 13 8.00003V5.00003C13 4.59557 13.2437 4.23093 13.6173 4.07615Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowBlockRightIcon = forwardRef(ArrowBlockRightIconInner);
export { ArrowBlockRightIcon };
