import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function HorizontalBarChart01IconInner(
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
        d="M14.1382 1.51695C14.3668 1.53563 14.6366 1.57969 14.908 1.71799C15.2843 1.90974 15.5903 2.2157 15.782 2.59202C15.9203 2.86345 15.9644 3.13318 15.9831 3.36178C16.0001 3.56993 16 3.81571 16 4.06809V4.93192C16 5.1843 16.0001 5.43008 15.9831 5.63823C15.9644 5.86683 15.9203 6.13656 15.782 6.40799C15.5903 6.78431 15.2843 7.09027 14.908 7.28202C14.6366 7.42032 14.3668 7.46438 14.1382 7.48306C13.9301 7.50007 13.6843 7.50004 13.4319 7.50001L4 7.5V9.00001L19.4319 9.00001C19.6843 8.99998 19.9301 8.99995 20.1382 9.01696C20.3668 9.03564 20.6366 9.0797 20.908 9.218C21.2843 9.40975 21.5903 9.71571 21.782 10.092C21.9203 10.3635 21.9644 10.6332 21.9831 10.8618C22.0001 11.0699 22 11.3156 22 11.5679V12.4319C22 12.6842 22.0001 12.9302 21.9831 13.1382C21.9644 13.3668 21.9203 13.6366 21.782 13.908C21.5903 14.2843 21.2843 14.5903 20.908 14.782C20.6366 14.9203 20.3668 14.9644 20.1382 14.9831C19.9301 15.0001 19.6843 15 19.4319 15L4 15V16.5L9.4319 16.5C9.68427 16.5 9.93008 16.5 10.1382 16.517C10.3668 16.5356 10.6366 16.5797 10.908 16.718C11.2843 16.9098 11.5903 17.2157 11.782 17.592C11.9203 17.8635 11.9644 18.1332 11.9831 18.3618C12.0001 18.5699 12 18.8157 12 19.0681V19.9319C12 20.1843 12.0001 20.4301 11.9831 20.6383C11.9644 20.8668 11.9203 21.1366 11.782 21.408C11.5903 21.7843 11.2843 22.0903 10.908 22.282C10.6366 22.4203 10.3668 22.4644 10.1382 22.4831C9.93007 22.5001 9.68428 22.5001 9.4319 22.5L3 22.5C2.44772 22.5 2 22.0523 2 21.5V2.5C2 1.94772 2.44772 1.5 3 1.5L13.4319 1.5C13.6843 1.49997 13.9301 1.49994 14.1382 1.51695Z"
        fill="currentColor"
      />
    </svg>
  );
}
const HorizontalBarChart01Icon = forwardRef(HorizontalBarChart01IconInner);
export { HorizontalBarChart01Icon };
