import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CloudSnowing01IconInner(
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
        d="M5.24923 6.14303C6.0632 3.17816 8.7764 1 12 1C15.2236 1 17.9368 3.17816 18.7508 6.14303C21.1861 6.70961 23 8.8925 23 11.5C23 14.5376 20.5376 17 17.5 17H6.5C3.46243 17 1 14.5376 1 11.5C1 8.8925 2.8139 6.70961 5.24923 6.14303Z"
        fill="currentColor"
      />
      <path
        d="M8 18.5C7.44772 18.5 7 18.9477 7 19.5C7 20.0523 7.44772 20.5 8 20.5H8.01C8.56228 20.5 9.01 20.0523 9.01 19.5C9.01 18.9477 8.56228 18.5 8.01 18.5H8Z"
        fill="currentColor"
      />
      <path
        d="M11 22C11 21.4477 11.4477 21 12 21H12.01C12.5623 21 13.01 21.4477 13.01 22C13.01 22.5523 12.5623 23 12.01 23H12C11.4477 23 11 22.5523 11 22Z"
        fill="currentColor"
      />
      <path
        d="M15 19.5C15 18.9477 15.4477 18.5 16 18.5H16.01C16.5623 18.5 17.01 18.9477 17.01 19.5C17.01 20.0523 16.5623 20.5 16.01 20.5H16C15.4477 20.5 15 20.0523 15 19.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CloudSnowing01Icon = forwardRef(CloudSnowing01IconInner);
export { CloudSnowing01Icon };
