import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Wind02IconInner(
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
        d="M19 7C18.4078 7 17.8767 7.25615 17.5091 7.66691C17.1407 8.07844 16.5085 8.11346 16.097 7.74513C15.6855 7.37681 15.6505 6.74461 16.0188 6.33309C16.7498 5.51635 17.8153 5 19 5C21.2092 5 23 6.79086 23 9C23 11.2091 21.2092 13 19 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H19C20.1046 11 21 10.1046 21 9C21 7.89543 20.1046 7 19 7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 5C10.704 5 10.439 5.1274 10.2544 5.33358C9.8861 5.74511 9.2539 5.78013 8.84237 5.4118C8.43085 5.04348 8.39582 4.41128 8.76415 3.99975C9.31204 3.3876 10.1114 3 11 3C12.6569 3 14 4.34315 14 6C14 7.65685 12.6569 9 11 9H2.00002C1.44774 9 1.00002 8.55228 1.00002 8C1.00002 7.44772 1.44774 7 2.00002 7H11C11.5523 7 12 6.55229 12 6C12 5.44771 11.5523 5 11 5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 19C13.704 19 13.439 18.8726 13.2544 18.6664C12.8861 18.2549 12.2539 18.2199 11.8424 18.5882C11.4308 18.9565 11.3958 19.5887 11.7642 20.0002C12.312 20.6124 13.1114 21 14 21C15.6569 21 17 19.6569 17 18C17 16.3431 15.6569 15 14 15H2.00002C1.44774 15 1.00002 15.4477 1.00002 16C1.00002 16.5523 1.44774 17 2.00002 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Wind02Icon = forwardRef(Wind02IconInner);
export { Wind02Icon };