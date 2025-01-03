import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MessageDotsCircleIconInner(
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
        d="M12 2C6.47715 2 2 6.47715 2 12C2 13.3283 2.25952 14.5985 2.73156 15.7608C2.77419 15.8658 2.79872 15.9264 2.81552 15.9711L2.82063 15.9849L2.82 15.9897C2.815 16.0266 2.80672 16.0769 2.79071 16.173L2.19294 19.7596C2.16612 19.9202 2.13611 20.0999 2.12433 20.256C2.11148 20.4261 2.10701 20.6969 2.22973 20.983C2.38144 21.3367 2.6633 21.6186 3.017 21.7703C3.30312 21.893 3.57386 21.8885 3.74404 21.8757C3.90013 21.8639 4.07985 21.8339 4.24049 21.8071L7.82705 21.2093C7.92309 21.1933 7.97339 21.185 8.0103 21.18L8.01505 21.1794L8.02887 21.1845C8.07362 21.2013 8.13423 21.2258 8.23921 21.2684C9.4015 21.7405 10.6717 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM6 12C6 11.1716 6.67157 10.5 7.5 10.5C8.32843 10.5 9 11.1716 9 12C9 12.8284 8.32843 13.5 7.5 13.5C6.67157 13.5 6 12.8284 6 12ZM10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12ZM16.5 10.5C15.6716 10.5 15 11.1716 15 12C15 12.8284 15.6716 13.5 16.5 13.5C17.3284 13.5 18 12.8284 18 12C18 11.1716 17.3284 10.5 16.5 10.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MessageDotsCircleIcon = forwardRef(MessageDotsCircleIconInner);
export { MessageDotsCircleIcon };