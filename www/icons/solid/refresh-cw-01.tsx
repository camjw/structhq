import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function RefreshCw01IconInner(
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
        d="M17.6589 6.34511C16.21 4.89514 14.2105 4 12.0001 4C7.58183 4 4.0001 7.58172 4.0001 12C4.0001 16.4183 7.58183 20 12.0001 20C15.6458 20 18.7244 17.5605 19.6875 14.2227C19.8407 13.6921 20.395 13.3861 20.9256 13.5392C21.4562 13.6923 21.7623 14.2466 21.6091 14.7773C20.4056 18.9481 16.5606 22 12.0001 22C6.47726 22 2.0001 17.5228 2.0001 12C2.0001 6.47715 6.47726 2 12.0001 2C14.7625 2 17.2649 3.12139 19.0736 4.93138C19.7097 5.56789 20.3942 6.35772 21 7.09434V4C21 3.44772 21.4477 3 22 3C22.5523 3 23 3.44772 23 4V10C23 10.5523 22.5523 11 22 11H16C15.4477 11 15 10.5523 15 10C15 9.44772 15.4477 9 16 9H19.9693C19.2852 8.14144 18.4232 7.10987 17.6589 6.34511Z"
        fill="currentColor"
      />
    </svg>
  );
}
const RefreshCw01Icon = forwardRef(RefreshCw01IconInner);
export { RefreshCw01Icon };
