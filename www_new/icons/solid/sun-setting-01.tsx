import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function SunSetting01IconInner(
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
        d="M12 2C12.5523 2 13 2.44772 13 3V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3C11 2.44772 11.4477 2 12 2Z"
        fill="currentColor"
      />
      <path
        d="M4 19C4 18.4477 4.44772 18 5 18H19C19.5523 18 20 18.4477 20 19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19Z"
        fill="currentColor"
      />
      <path
        d="M4.60701 5.1928C4.21649 4.80227 3.58332 4.80227 3.1928 5.1928C2.80227 5.58332 2.80227 6.21649 3.1928 6.60701L4.60701 8.02122C4.99753 8.41175 5.6307 8.41175 6.02122 8.02122C6.41175 7.6307 6.41175 6.99753 6.02122 6.60701L4.60701 5.1928Z"
        fill="currentColor"
      />
      <path
        d="M20.8071 5.1928C21.1976 5.58332 21.1976 6.21649 20.8071 6.60701L19.3929 8.02122C19.0024 8.41175 18.3692 8.41175 17.9787 8.02122C17.5882 7.6307 17.5882 6.99753 17.9787 6.60701L19.3929 5.1928C19.7834 4.80227 20.4166 4.80227 20.8071 5.1928Z"
        fill="currentColor"
      />
      <path
        d="M5.07089 14C5.55612 10.6077 8.47353 8 12 8C15.5265 8 18.4439 10.6077 18.9291 14H22C22.5523 14 23 14.4477 23 15C23 15.5523 22.5523 16 22 16H2C1.44772 16 1 15.5523 1 15C1 14.4477 1.44772 14 2 14H5.07089Z"
        fill="currentColor"
      />
    </svg>
  );
}
const SunSetting01Icon = forwardRef(SunSetting01IconInner);
export { SunSetting01Icon };
