import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowDownIconInner(
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
        d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V16.5858L5.70711 11.2929C5.31658 10.9024 4.68342 10.9024 4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929C19.3166 10.9024 18.6834 10.9024 18.2929 11.2929L13 16.5858V5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowDownIcon = forwardRef(ArrowDownIconInner);
export { ArrowDownIcon };
