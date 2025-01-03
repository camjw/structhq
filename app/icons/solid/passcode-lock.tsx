import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function PasscodeLockIconInner(
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
        d="M5.16146 4H18.8385C19.3657 3.99998 19.8205 3.99997 20.195 4.03057C20.5904 4.06287 20.9836 4.13419 21.362 4.32698C21.9265 4.6146 22.3854 5.07354 22.673 5.63803C22.8658 6.01641 22.9371 6.40963 22.9694 6.80497C23 7.17954 23 7.6343 23 8.16144V11C23 11.5523 22.5523 12 22 12C21.4477 12 21 11.5523 21 11V8.2C21 7.62345 20.9992 7.25118 20.9761 6.96784C20.9539 6.69618 20.9162 6.59546 20.891 6.54601C20.7951 6.35785 20.6422 6.20487 20.454 6.109C20.4045 6.0838 20.3038 6.04613 20.0322 6.02393C19.7488 6.00078 19.3766 6 18.8 6H5.2C4.62345 6 4.25118 6.00078 3.96784 6.02393C3.69618 6.04613 3.59546 6.0838 3.54601 6.109C3.35785 6.20487 3.20487 6.35785 3.109 6.54601C3.0838 6.59546 3.04613 6.69618 3.02393 6.96784C3.00078 7.25118 3 7.62345 3 8.2V11.8C3 12.3766 3.00078 12.7488 3.02393 13.0322C3.04613 13.3038 3.0838 13.4045 3.109 13.454C3.20487 13.6422 3.35785 13.7951 3.54601 13.891C3.59546 13.9162 3.69618 13.9539 3.96784 13.9761C4.25118 13.9992 4.62345 14 5.2 14H11C11.5523 14 12 14.4477 12 15C12 15.5523 11.5523 16 11 16H5.16148C4.63433 16 4.17954 16 3.80497 15.9694C3.40963 15.9371 3.01641 15.8658 2.63803 15.673C2.07354 15.3854 1.6146 14.9265 1.32698 14.362C1.13419 13.9836 1.06287 13.5904 1.03057 13.195C0.999969 12.8205 0.999984 12.3657 1 11.8386V8.16146C0.999984 7.63433 0.999969 7.17954 1.03057 6.80497C1.06287 6.40963 1.13419 6.01641 1.32698 5.63803C1.6146 5.07354 2.07354 4.6146 2.63803 4.32698C3.01641 4.13419 3.40963 4.06287 3.80497 4.03057C4.17954 3.99997 4.63433 3.99998 5.16146 4Z"
        fill="currentColor"
      />
      <path
        d="M5.75 10C5.75 9.30965 6.30965 8.75 7 8.75C7.69036 8.75 8.25 9.30965 8.25 10C8.25 10.6904 7.69036 11.25 7 11.25C6.30965 11.25 5.75 10.6904 5.75 10Z"
        fill="currentColor"
      />
      <path
        d="M12 8.75C11.3096 8.75 10.75 9.30965 10.75 10C10.75 10.6904 11.3096 11.25 12 11.25C12.6904 11.25 13.25 10.6904 13.25 10C13.25 9.30965 12.6904 8.75 12 8.75Z"
        fill="currentColor"
      />
      <path
        d="M17 8.75C16.3096 8.75 15.75 9.30965 15.75 10C15.75 10.6904 16.3096 11.25 17 11.25C17.6904 11.25 18.25 10.6904 18.25 10C18.25 9.30965 17.6904 8.75 17 8.75Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.75 15.25C14.75 13.7312 15.9812 12.5 17.5 12.5C19.0188 12.5 20.25 13.7312 20.25 15.25V16.028C20.4525 16.052 20.6796 16.1016 20.908 16.218C21.2843 16.4097 21.5903 16.7157 21.782 17.092C21.9203 17.3634 21.9644 17.6332 21.9831 17.8618C22.0001 18.0699 22 18.3157 22 18.5681V19.4319C22 19.6843 22.0001 19.9301 21.9831 20.1382C21.9644 20.3668 21.9203 20.6366 21.782 20.908C21.5903 21.2843 21.2843 21.5903 20.908 21.782C20.6366 21.9203 20.3668 21.9644 20.1382 21.9831C19.9301 22.0001 19.6843 22 19.4319 22H15.5681C15.3157 22 15.0699 22.0001 14.8618 21.9831C14.6332 21.9644 14.3634 21.9203 14.092 21.782C13.7157 21.5903 13.4097 21.2843 13.218 20.908C13.0797 20.6366 13.0356 20.3668 13.017 20.1382C12.9999 19.9301 13 19.6843 13 19.4319V18.5681C13 18.3157 12.9999 18.0699 13.017 17.8618C13.0356 17.6332 13.0797 17.3634 13.218 17.092C13.4097 16.7157 13.7157 16.4097 14.092 16.218C14.3204 16.1016 14.5475 16.052 14.75 16.028V15.25ZM18.25 15.25V16H16.75V15.25C16.75 14.8358 17.0858 14.5 17.5 14.5C17.9142 14.5 18.25 14.8358 18.25 15.25Z"
        fill="currentColor"
      />
    </svg>
  );
}
const PasscodeLockIcon = forwardRef(PasscodeLockIconInner);
export { PasscodeLockIcon };
