import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MoonEclipseIconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C13.7264 23 15.3625 22.6016 16.8189 21.8908C17.2443 21.6832 17.4659 21.2057 17.3498 20.7468C17.2337 20.2879 16.8117 19.9733 16.3388 19.993C16.2265 19.9976 16.1135 20 16 20C11.5817 20 8 16.4183 8 12C8 7.58172 11.5817 4 16 4C16.1136 4 16.2265 4.00236 16.3388 4.00703C16.8117 4.02669 17.2337 3.71205 17.3498 3.25315C17.4659 2.79426 17.2443 2.31682 16.8189 2.10921C15.3625 1.3984 13.7264 1 12 1Z"
        fill="currentColor"
      />
      <path
        d="M19.4008 5.20101C19.8423 4.86914 20.4692 4.95797 20.801 5.39942C23.7336 9.30025 23.7329 14.7031 20.7991 18.6033C20.4672 19.0447 19.8402 19.1333 19.3989 18.8013C18.9575 18.4693 18.8689 17.8424 19.2009 17.401C21.5991 14.2127 21.5997 9.79007 19.2024 6.60123C18.8705 6.15978 18.9594 5.53288 19.4008 5.20101Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MoonEclipseIcon = forwardRef(MoonEclipseIconInner);
export { MoonEclipseIcon };
