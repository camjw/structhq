import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Brush03IconInner(
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
        d="M18.4319 1H5.56811C5.31573 0.999973 5.06993 0.999943 4.86178 1.01695C4.63318 1.03563 4.36345 1.07969 4.09202 1.21799C3.7157 1.40974 3.40974 1.7157 3.21799 2.09202C3.07969 2.36345 3.03563 2.63318 3.01695 2.86178C2.99994 3.06993 2.99997 3.31573 3 3.56811L3 7.4C3 7.96005 3 8.24008 3.109 8.45399C3.20487 8.64215 3.35785 8.79513 3.54601 8.89101C3.75993 9 4.03995 9 4.6 9H19.4C19.9601 9 20.2401 9 20.454 8.89101C20.6422 8.79513 20.7951 8.64215 20.891 8.45399C21 8.24008 21 7.96005 21 7.4L21 3.56794C21 3.31563 21.0001 3.06988 20.9831 2.86178C20.9644 2.63318 20.9203 2.36345 20.782 2.09202C20.5903 1.7157 20.2843 1.40974 19.908 1.21799C19.6366 1.07969 19.3668 1.03563 19.1382 1.01695C18.9301 0.999943 18.6843 0.999973 18.4319 1Z"
        fill="currentColor"
      />
      <path
        d="M20.9558 12.2518C20.9706 12.071 20.978 11.9805 20.9658 11.88C20.9167 11.4733 20.5748 11.1024 20.1735 11.0203C20.0743 11 19.9647 11 19.7455 11H4.25446C4.03529 11 3.92571 11 3.82653 11.0203C3.42519 11.1024 3.08332 11.4733 3.03417 11.88C3.02203 11.9805 3.02942 12.071 3.04419 12.2518C3.09012 12.8139 3.18868 13.3306 3.43597 13.816C3.81947 14.5686 4.43139 15.1805 5.18404 15.564C5.66937 15.8113 6.18608 15.9099 6.74817 15.9558C7.23027 15.9952 7.8101 15.9995 8.5 15.9999V19.5C8.5 21.433 10.067 23 12 23C13.933 23 15.5 21.433 15.5 19.5V15.9999C16.1899 15.9995 16.7697 15.9952 17.2518 15.9558C17.8139 15.9099 18.3306 15.8113 18.816 15.564C19.5686 15.1805 20.1805 14.5686 20.564 13.816C20.8113 13.3306 20.9099 12.8139 20.9558 12.2518Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Brush03Icon = forwardRef(Brush03IconInner);
export { Brush03Icon };
