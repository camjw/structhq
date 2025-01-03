import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Building08IconInner(
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
        d="M2 21C2 20.4477 2.44772 20 3 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 8.99998C6.55228 8.99998 7 9.44769 7 9.99998V18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18V9.99998C5 9.44769 5.44772 8.99998 6 8.99998Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 8.99998C10.5523 8.99998 11 9.44769 11 9.99998V18C11 18.5523 10.5523 19 10 19C9.44772 19 9 18.5523 9 18V9.99998C9 9.44769 9.44772 8.99998 10 8.99998Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8.99998C14.5523 8.99998 15 9.44769 15 9.99998V18C15 18.5523 14.5523 19 14 19C13.4477 19 13 18.5523 13 18V9.99998C13 9.44769 13.4477 8.99998 14 8.99998Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 8.99998C18.5523 8.99998 19 9.44769 19 9.99998V18C19 18.5523 18.5523 19 18 19C17.4477 19 17 18.5523 17 18V9.99998C17 9.44769 17.4477 8.99998 18 8.99998Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6676 1.12689C11.8864 1.07717 12.1136 1.07717 12.3324 1.12689C12.5922 1.18593 12.8162 1.32904 12.9242 1.39803C12.9354 1.40521 12.9454 1.41158 12.954 1.41698L20.53 6.15198C20.9083 6.38841 21.0842 6.84684 20.9612 7.27566C20.8383 7.70448 20.4461 7.99998 20 7.99998H4C3.55389 7.99998 3.16174 7.70448 3.03875 7.27566C2.91577 6.84684 3.0917 6.38841 3.47 6.15198L11.046 1.41698C11.0546 1.41158 11.0646 1.40521 11.0758 1.39803C11.1838 1.32904 11.4078 1.18593 11.6676 1.12689Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Building08Icon = forwardRef(Building08IconInner);
export { Building08Icon };