import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function PresentationChart02IconInner(
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
        d="M12 16V21M18 21L14.0486 17.7072C13.3198 17.0998 12.9554 16.7962 12.5487 16.6801C12.19 16.5778 11.81 16.5778 11.4513 16.6801C11.0446 16.7962 10.6802 17.0998 9.95141 17.7072L6 21M8 11V12M12 9V12M16 7V12M22 3H2M3 3H21V11.2C21 12.8802 21 13.7202 20.673 14.362C20.3854 14.9265 19.9265 15.3854 19.362 15.673C18.7202 16 17.8802 16 16.2 16H7.8C6.11984 16 5.27976 16 4.63803 15.673C4.07354 15.3854 3.6146 14.9265 3.32698 14.362C3 13.7202 3 12.8802 3 11.2V3Z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const PresentationChart02Icon = forwardRef(PresentationChart02IconInner);
export { PresentationChart02Icon };
