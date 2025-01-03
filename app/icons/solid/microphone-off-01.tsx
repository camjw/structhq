import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MicrophoneOff01IconInner(
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
        d="M2.70711 1.29289C2.31658 0.902369 1.68342 0.902369 1.29289 1.29289C0.902369 1.68342 0.902369 2.31658 1.29289 2.70711L8 9.41421V12C8 14.2092 9.79086 16 12 16C12.7414 16 13.4364 15.7977 14.0318 15.4461L15.4765 16.8907C14.4957 17.5892 13.2958 18 12 18C8.68629 18 6 15.3137 6 12V10C6 9.44771 5.55228 9 5 9C4.44772 9 4 9.44771 4 10V12C4 16.0796 7.05369 19.446 11 19.9381V21H8C7.44772 21 7 21.4477 7 22C7 22.5523 7.44772 23 8 23H16C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21H13V19.9381C14.4607 19.756 15.7991 19.18 16.9056 18.3199L21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L18.3199 16.9056C19.3729 15.551 20 13.8487 20 12V10C20 9.44771 19.5523 9 19 9C18.4477 9 18 9.44771 18 10V12C18 13.2958 17.5892 14.4957 16.8907 15.4765L12.1547 10.7403C9.00565 7.59099 5.8566 4.44172 2.70711 1.29289Z"
        fill="currentColor"
      />
      <path
        d="M16 11.7574V5C16 2.79086 14.2091 1 12 1C10.1694 1 8.62598 2.22974 8.15083 3.90819L16 11.7574Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MicrophoneOff01Icon = forwardRef(MicrophoneOff01IconInner);
export { MicrophoneOff01Icon };
