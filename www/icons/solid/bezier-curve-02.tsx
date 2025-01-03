import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BezierCurve02IconInner(
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
        d="M11.5681 1C11.3157 0.999973 11.0699 0.999943 10.8618 1.01695C10.6332 1.03563 10.3634 1.07969 10.092 1.21799C9.7157 1.40974 9.40974 1.7157 9.21799 2.09202C9.07969 2.36345 9.03563 2.63318 9.01695 2.86178C9.01381 2.90018 9.01126 2.93986 9.00917 2.98063C6.16771 3.92242 3.92251 6.16767 2.9808 9.00916C2.93997 9.01125 2.90023 9.01381 2.86178 9.01695C2.63318 9.03563 2.36345 9.07969 2.09202 9.21799C1.7157 9.40974 1.40974 9.7157 1.21799 10.092C1.07969 10.3634 1.03563 10.6332 1.01695 10.8618C0.999943 11.0699 0.999973 11.3157 1 11.5681L1 12.4319C0.999973 12.6843 0.999943 12.9301 1.01695 13.1382C1.03563 13.3668 1.07969 13.6366 1.21799 13.908C1.40974 14.2843 1.7157 14.5903 2.09202 14.782C2.36345 14.9203 2.63318 14.9644 2.86178 14.9831C2.90018 14.9862 2.93987 14.9888 2.98065 14.9908C3.92244 17.8323 6.16768 20.0775 9.00916 21.0192C9.01125 21.06 9.01381 21.0998 9.01695 21.1382C9.03563 21.3668 9.07969 21.6366 9.21799 21.908C9.40974 22.2843 9.7157 22.5903 10.092 22.782C10.3634 22.9203 10.6332 22.9644 10.8618 22.9831C11.0699 23.0001 11.3157 23 11.5681 23H12.4319C12.6843 23 12.9301 23.0001 13.1382 22.9831C13.3668 22.9644 13.6366 22.9203 13.908 22.782C14.2843 22.5903 14.5903 22.2843 14.782 21.908C14.9203 21.6366 14.9644 21.3668 14.9831 21.1382C14.9862 21.0999 14.9887 21.0603 14.9908 21.0196C17.8325 20.0779 20.078 17.8325 21.0197 14.9908C21.0604 14.9887 21.0999 14.9862 21.1382 14.9831C21.3668 14.9644 21.6366 14.9203 21.908 14.782C22.2843 14.5903 22.5903 14.2843 22.782 13.908C22.9203 13.6366 22.9644 13.3668 22.9831 13.1382C23.0001 12.9301 23 12.6843 23 12.4319V11.5681C23 11.3157 23.0001 11.0699 22.9831 10.8618C22.9644 10.6332 22.9203 10.3634 22.782 10.092C22.5903 9.7157 22.2843 9.40974 21.908 9.21799C21.6366 9.07969 21.3668 9.03563 21.1382 9.01695C21.0999 9.01382 21.0603 9.01127 21.0196 9.00918C20.0779 6.16754 17.8325 3.9222 14.9908 2.98049C14.9887 2.93977 14.9862 2.90013 14.9831 2.86178C14.9644 2.63318 14.9203 2.36345 14.782 2.09202C14.5903 1.7157 14.2843 1.40974 13.908 1.21799C13.6366 1.07969 13.3668 1.03563 13.1382 1.01695C12.9301 0.999943 12.6843 0.999973 12.4319 1L11.5681 1ZM14.9847 18.8831C16.7269 18.1265 18.1265 16.7269 18.8832 14.9847L18.8618 14.9831C18.6332 14.9644 18.3634 14.9203 18.092 14.782C17.7157 14.5903 17.4097 14.2843 17.218 13.908C17.0797 13.6366 17.0356 13.3668 17.017 13.1382C16.9999 12.9301 17 12.6843 17 12.4319V11.5681C17 11.3157 16.9999 11.0699 17.017 10.8618C17.0356 10.6332 17.0797 10.3634 17.218 10.092C17.4097 9.7157 17.7157 9.40974 18.092 9.21799C18.3634 9.07969 18.6332 9.03563 18.8618 9.01695L18.8831 9.01528C18.1264 7.27314 16.7269 5.87362 14.9847 5.117L14.9831 5.13824C14.9644 5.36683 14.9203 5.63656 14.782 5.90799C14.5903 6.28431 14.2843 6.59027 13.908 6.78202C13.6366 6.92032 13.3668 6.96438 13.1382 6.98306C12.9301 7.00007 12.6843 7.00004 12.4319 7.00001H11.5681C11.3157 7.00004 11.0699 7.00007 10.8618 6.98306C10.6332 6.96438 10.3634 6.92032 10.092 6.78202C9.7157 6.59027 9.40974 6.28431 9.21799 5.90799C9.07969 5.63656 9.03563 5.36683 9.01695 5.13824L9.0153 5.11717C7.27331 5.87384 5.87391 7.27329 5.11731 9.01531L5.13824 9.01695C5.36683 9.03563 5.63656 9.07969 5.90799 9.21799C6.28431 9.40974 6.59027 9.7157 6.78202 10.092C6.92032 10.3634 6.96438 10.6332 6.98306 10.8618C7.00007 11.0699 7.00004 11.3157 7.00001 11.5681V12.4319C7.00004 12.6843 7.00007 12.9301 6.98306 13.1382C6.96438 13.3668 6.92032 13.6366 6.78202 13.908C6.59027 14.2843 6.28431 14.5903 5.90799 14.782C5.63656 14.9203 5.36683 14.9644 5.13824 14.9831L5.11719 14.9847C5.87386 16.7267 7.2733 18.1261 9.01531 18.8827C9.01584 18.8757 9.01639 18.8687 9.01695 18.8618C9.03563 18.6332 9.07969 18.3634 9.21799 18.092C9.40974 17.7157 9.7157 17.4097 10.092 17.218C10.3634 17.0797 10.6332 17.0356 10.8618 17.017C11.0699 16.9999 11.3157 17 11.5681 17H12.4319C12.6843 17 12.9301 16.9999 13.1382 17.017C13.3668 17.0356 13.6366 17.0797 13.908 17.218C14.2843 17.4097 14.5903 17.7157 14.782 18.092C14.9203 18.3634 14.9644 18.6332 14.9831 18.8618C14.9836 18.8688 14.9842 18.876 14.9847 18.8831Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BezierCurve02Icon = forwardRef(BezierCurve02IconInner);
export { BezierCurve02Icon };
