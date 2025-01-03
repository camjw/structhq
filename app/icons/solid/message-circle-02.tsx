import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MessageCircle02IconInner(
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
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.6717 22 9.4015 21.7405 8.23921 21.2684C8.13423 21.2258 8.07362 21.2013 8.02887 21.1845C8.02358 21.1825 8.01898 21.1808 8.01505 21.1794L8.0103 21.18C7.97339 21.185 7.92309 21.1933 7.82705 21.2093L4.24049 21.8071C4.07985 21.8339 3.90013 21.8639 3.74404 21.8757C3.57386 21.8885 3.30312 21.893 3.017 21.7703C2.6633 21.6186 2.38144 21.3367 2.22973 20.983C2.10701 20.6969 2.11148 20.4261 2.12433 20.256C2.13611 20.0999 2.16612 19.9202 2.19294 19.7596C2.19455 19.7499 2.19615 19.7403 2.19773 19.7308L2.79071 16.173C2.80672 16.0769 2.815 16.0266 2.82 15.9897L2.82063 15.9849C2.8192 15.981 2.81751 15.9764 2.81552 15.9711C2.79872 15.9264 2.77419 15.8658 2.73156 15.7608C2.25952 14.5985 2 13.3283 2 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MessageCircle02Icon = forwardRef(MessageCircle02IconInner);
export { MessageCircle02Icon };
