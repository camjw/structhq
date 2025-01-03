import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Lock04IconInner(
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
        d="M6 8V9.70835C4.75527 11.1186 4 12.9711 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 12.9711 19.2447 11.1186 18 9.70835V8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8ZM12 4C9.79086 4 8 5.79086 8 8V8.07026C9.17669 7.38958 10.5429 7 12 7C13.4571 7 14.8233 7.38958 16 8.07026V8C16 5.79086 14.2091 4 12 4ZM13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14L11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V14Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Lock04Icon = forwardRef(Lock04IconInner);
export { Lock04Icon };
