import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Sale02IconInner(
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
        d="M8.86585 2.1543C10.6719 0.615232 13.3281 0.615232 15.1341 2.1543C15.5877 2.54085 16.1517 2.77446 16.7458 2.82186C19.1111 3.01062 20.9894 4.88889 21.1781 7.25422C21.2255 7.84829 21.4591 8.41226 21.8457 8.86585C23.3848 10.6719 23.3848 13.3281 21.8457 15.1341C21.4591 15.5877 21.2255 16.1517 21.1781 16.7458C20.9894 19.1111 19.1111 20.9894 16.7458 21.1781C16.1517 21.2255 15.5877 21.4591 15.1341 21.8457C13.3281 23.3848 10.6719 23.3848 8.86585 21.8457C8.41226 21.4591 7.84829 21.2255 7.25422 21.1781C4.88889 20.9894 3.01062 19.1111 2.82186 16.7458C2.77446 16.1517 2.54085 15.5877 2.1543 15.1341C0.615232 13.3281 0.615232 10.6719 2.1543 8.86585C2.54085 8.41226 2.77446 7.84829 2.82186 7.25422C3.01062 4.88889 4.88889 3.01062 7.25422 2.82186C7.84829 2.77446 8.41226 2.54085 8.86585 2.1543ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L16.7071 8.70711ZM7.5 9C7.5 8.17157 8.17157 7.5 9 7.5C9.82843 7.5 10.5 8.17157 10.5 9C10.5 9.82843 9.82843 10.5 9 10.5C8.17157 10.5 7.5 9.82843 7.5 9ZM13.5 15C13.5 14.1716 14.1716 13.5 15 13.5C15.8284 13.5 16.5 14.1716 16.5 15C16.5 15.8284 15.8284 16.5 15 16.5C14.1716 16.5 13.5 15.8284 13.5 15Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Sale02Icon = forwardRef(Sale02IconInner);
export { Sale02Icon };
