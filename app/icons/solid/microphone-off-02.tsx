import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MicrophoneOff02IconInner(
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
        d="M2.70711 1.29289C2.31658 0.902369 1.68342 0.902369 1.29289 1.29289C0.902369 1.68342 0.902369 2.31658 1.29289 2.70711L7 8.41421V13C7 15.7615 9.23858 18 12 18C13.2758 18 14.4397 17.5217 15.3223 16.7365L16.7384 18.1526C15.4909 19.3006 13.8275 20 12 20C8.13401 20 5 16.866 5 13V12C5 11.4477 4.55228 11 4 11C3.44772 11 3 11.4477 3 12V13C3 17.9706 7.02944 22 12 22C14.3801 22 16.5449 21.0752 18.1535 19.5677L21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L2.70711 1.29289Z"
        fill="currentColor"
      />
      <path
        d="M17 12.7574L8.106 3.86336C9.02254 2.72696 10.4264 2 12 2C14.7614 2 17 4.23858 17 7V12.7574Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MicrophoneOff02Icon = forwardRef(MicrophoneOff02IconInner);
export { MicrophoneOff02Icon };