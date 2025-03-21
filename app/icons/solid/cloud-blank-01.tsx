import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CloudBlank01IconInner(
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
        d="M5.24923 9.14303C6.0632 6.17816 8.7764 4 12 4C15.2236 4 17.9368 6.17816 18.7508 9.14303C21.1861 9.70961 23 11.8925 23 14.5C23 17.5376 20.5376 20 17.5 20H6.5C3.46243 20 1 17.5376 1 14.5C1 11.8925 2.8139 9.70961 5.24923 9.14303Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CloudBlank01Icon = forwardRef(CloudBlank01IconInner);
export { CloudBlank01Icon };
