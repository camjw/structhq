import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowBlockUpIconInner(
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
        d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L19.7071 9.29289C19.9931 9.57889 20.0787 10.009 19.9239 10.3827C19.7691 10.7564 19.4045 11 19 11H16L16 20.2231C16.0001 20.3422 16.0001 20.4845 15.9899 20.6098C15.978 20.755 15.9476 20.963 15.8365 21.181C15.6927 21.4632 15.4633 21.6927 15.181 21.8365C14.9631 21.9476 14.7551 21.978 14.6099 21.9899C14.4845 22.0001 14.3423 22.0001 14.2232 22C12.7411 21.9993 11.259 21.9993 9.77688 22C9.65777 22.0001 9.51551 22.0001 9.3902 21.9899C9.24498 21.978 9.03699 21.9476 8.81904 21.8365C8.5368 21.6927 8.30733 21.4632 8.16352 21.181C8.05247 20.963 8.02203 20.755 8.01016 20.6098C7.99992 20.4845 7.99998 20.3423 8.00002 20.2231L8.00003 11H5.00003C4.59557 11 4.23093 10.7564 4.07615 10.3827C3.92137 10.009 4.00692 9.57889 4.29292 9.29289L11.2929 2.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowBlockUpIcon = forwardRef(ArrowBlockUpIconInner);
export { ArrowBlockUpIcon };
