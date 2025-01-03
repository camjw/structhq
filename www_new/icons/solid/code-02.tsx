import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Code02IconInner(
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
        d="M16.2929 6.29311C16.6834 5.90258 17.3166 5.90258 17.7071 6.29311L22.7071 11.2931C23.0976 11.6836 23.0976 12.3168 22.7071 12.7073L17.7071 17.7073C17.3166 18.0978 16.6834 18.0978 16.2929 17.7073C15.9024 17.3168 15.9024 16.6836 16.2929 16.2931L20.5858 12.0002L16.2929 7.70732C15.9024 7.3168 15.9024 6.68363 16.2929 6.29311Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.70711 6.29311C8.09763 6.68363 8.09763 7.3168 7.70711 7.70732L3.41421 12.0002L7.70711 16.2931C8.09763 16.6836 8.09763 17.3168 7.70711 17.7073C7.31658 18.0978 6.68342 18.0978 6.29289 17.7073L1.29289 12.7073C0.902369 12.3168 0.902369 11.6836 1.29289 11.2931L6.29289 6.29311C6.68342 5.90258 7.31658 5.90258 7.70711 6.29311Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2169 2.02403C14.7561 2.14383 15.096 2.67801 14.9762 3.21714L10.9762 21.2171C10.8564 21.7563 10.3222 22.0962 9.78307 21.9764C9.24394 21.8566 8.90401 21.3224 9.02381 20.7833L13.0238 2.78328C13.1436 2.24415 13.6778 1.90422 14.2169 2.02403Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Code02Icon = forwardRef(Code02IconInner);
export { Code02Icon };
