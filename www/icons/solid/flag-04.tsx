import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Flag04IconInner(
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
        d="M4.56811 1.5C4.31573 1.49997 4.06993 1.49994 3.86178 1.51695C3.63318 1.53563 3.36345 1.57969 3.09203 1.71799C2.7157 1.90974 2.40974 2.2157 2.21799 2.59202C2.09647 2.83053 2.0477 3.06773 2.02499 3.27686C1.96962 3.51982 2 3.78519 2 4.03203C2 4.03504 2 4.03805 2 4.04106V21C2 21.5523 2.44772 22 3 22C3.55229 22 4 21.5523 4 21L4 12L9.50001 12L9.5 13.4319C9.49998 13.6843 9.49995 13.9301 9.51695 14.1382C9.53563 14.3668 9.5797 14.6366 9.71799 14.908C9.90974 15.2843 10.2157 15.5903 10.592 15.782C10.8635 15.9203 11.1332 15.9644 11.3618 15.9831C11.5699 16.0001 11.8157 16 12.0681 16L19.7998 16C19.9775 16.0001 20.1722 16.0001 20.3372 15.9851C20.5128 15.9691 20.7995 15.9269 21.0735 15.7408C21.407 15.5143 21.6352 15.163 21.7068 14.7663C21.7656 14.4403 21.6877 14.1612 21.631 13.9943C21.5777 13.8374 21.4986 13.6595 21.4264 13.4971L20.1055 10.5251L21.3297 8.0767C21.413 7.91017 21.5032 7.72985 21.5653 7.57086C21.6305 7.40416 21.7249 7.11909 21.6749 6.78077C21.6146 6.37261 21.3888 6.0073 21.0507 5.77083C20.7705 5.57482 20.4733 5.53177 20.295 5.51546C20.1251 5.4999 19.9234 5.49995 19.7372 5.50001L14.5 5.50001V4.06812C14.5 3.81574 14.5001 3.56994 14.4831 3.36178C14.4644 3.13318 14.4203 2.86345 14.282 2.59202C14.0903 2.2157 13.7843 1.90974 13.408 1.71799C13.1366 1.57969 12.8668 1.53563 12.6382 1.51695C12.4301 1.49994 12.1843 1.49997 11.9319 1.5L4.56811 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Flag04Icon = forwardRef(Flag04IconInner);
export { Flag04Icon };