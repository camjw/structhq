import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BluetoothOnIconInner(
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
        d="M11.5759 1.09442C11.9273 0.929843 12.3421 0.983388 12.6402 1.23179L18.6402 6.23179C18.8682 6.42178 19 6.70323 19 7.00001C19 7.29679 18.8682 7.57824 18.6402 7.76823L13.5621 12L18.6402 16.2318C18.8682 16.4218 19 16.7032 19 17C19 17.2968 18.8682 17.5782 18.6402 17.7682L12.6402 22.7682C12.3421 23.0166 11.9273 23.0702 11.5759 22.9056C11.2245 22.741 11 22.388 11 22V14.1351L6.64021 17.7682C6.21593 18.1218 5.58537 18.0645 5.2318 17.6402C4.87824 17.2159 4.93556 16.5854 5.35984 16.2318L10.438 12L5.35984 7.76823C4.93556 7.41467 4.87824 6.7841 5.2318 6.35983C5.58537 5.93555 6.21593 5.87823 6.64021 6.23179L11 9.86497V2.00001C11 1.61199 11.2245 1.259 11.5759 1.09442ZM13 14.1351L16.438 17L13 19.865V14.1351ZM13 9.86497V4.13505L16.438 7.00001L13 9.86497Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BluetoothOnIcon = forwardRef(BluetoothOnIconInner);
export { BluetoothOnIcon };
