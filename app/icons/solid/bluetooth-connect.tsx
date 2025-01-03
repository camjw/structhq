import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BluetoothConnectIconInner(
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
        d="M17 12C17 11.4477 17.4477 11 18 11H18.01C18.5623 11 19.01 11.4477 19.01 12C19.01 12.5523 18.5623 13 18.01 13H18C17.4477 13 17 12.5523 17 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 12C14 11.4477 14.4477 11 15 11H15.01C15.5623 11 16.01 11.4477 16.01 12C16.01 12.5523 15.5623 13 15.01 13H15C14.4477 13 14 12.5523 14 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 12C20 11.4477 20.4477 11 21 11H21.01C21.5623 11 22.01 11.4477 22.01 12C22.01 12.5523 21.5623 13 21.01 13H21C20.4477 13 20 12.5523 20 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.57587 1.09442C8.92725 0.929843 9.34213 0.983388 9.64021 1.23179L15.6402 6.23179C15.8682 6.42178 16 6.70323 16 7.00001C16 7.29679 15.8682 7.57824 15.6402 7.76823L10.5621 12L15.6402 16.2318C15.8682 16.4218 16 16.7032 16 17C16 17.2968 15.8682 17.5782 15.6402 17.7682L9.64021 22.7682C9.34213 23.0166 8.92725 23.0702 8.57587 22.9056C8.22449 22.741 8.00003 22.388 8.00003 22V14.1351L3.64021 17.7682C3.21593 18.1218 2.58537 18.0645 2.2318 17.6402C1.87824 17.2159 1.93556 16.5854 2.35984 16.2318L7.43798 12L2.35984 7.76823C1.93556 7.41467 1.87824 6.7841 2.2318 6.35983C2.58537 5.93555 3.21593 5.87823 3.64021 6.23179L8.00003 9.86497V2.00001C8.00003 1.61199 8.22449 1.259 8.57587 1.09442ZM10 14.1351L13.438 17L10 19.865V14.1351ZM10 9.86497V4.13505L13.438 7.00001L10 9.86497Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BluetoothConnectIcon = forwardRef(BluetoothConnectIconInner);
export { BluetoothConnectIcon };
