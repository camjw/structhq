import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowBlockLeftIconInner(
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
        d="M10.3827 4.07615C10.7564 4.23093 11 4.59557 11 5.00003V8.00003L20.2231 8.00002C20.3423 7.99998 20.4845 7.99992 20.6098 8.01016C20.755 8.02203 20.963 8.05247 21.181 8.16352C21.4632 8.30733 21.6927 8.5368 21.8365 8.81904C21.9476 9.03699 21.978 9.24498 21.9899 9.3902C22.0001 9.51551 22.0001 9.65777 22 9.77688C21.9993 11.259 21.9993 12.7411 22 14.2232C22.0001 14.3423 22.0001 14.4845 21.9899 14.6099C21.978 14.7551 21.9476 14.9631 21.8365 15.181C21.6927 15.4633 21.4632 15.6927 21.181 15.8365C20.963 15.9476 20.755 15.978 20.6098 15.9899C20.4845 16.0001 20.3422 16.0001 20.2231 16L11 16V19C11 19.4045 10.7564 19.7691 10.3827 19.9239C10.009 20.0787 9.57889 19.9931 9.29289 19.7071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L9.29289 4.29292C9.57889 4.00692 10.009 3.92137 10.3827 4.07615Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowBlockLeftIcon = forwardRef(ArrowBlockLeftIconInner);
export { ArrowBlockLeftIcon };