import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Disc02IconInner(
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
        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15ZM15.4291 4.77031C14.9302 4.53333 14.3337 4.74562 14.0967 5.24448C13.8598 5.74334 14.0721 6.33985 14.5709 6.57683C16.6003 7.54091 18 9.60796 18 11.9999C18 12.5522 18.4477 12.9999 19 12.9999C19.5523 12.9999 20 12.5522 20 11.9999C20 8.80713 18.1296 6.05317 15.4291 4.77031ZM6 11.9999C6 11.4476 5.55228 10.9999 5 10.9999C4.44772 10.9999 4 11.4476 4 11.9999C4 14.9112 5.55568 17.4581 7.87631 18.8564C8.34935 19.1415 8.9639 18.989 9.24894 18.516C9.53398 18.043 9.38157 17.4284 8.90852 17.1434C7.16348 16.0919 6 14.1813 6 11.9999Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Disc02Icon = forwardRef(Disc02IconInner);
export { Disc02Icon };