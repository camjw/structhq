import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ClipboardIconInner(
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
        d="M9.56811 1C9.31573 0.999973 9.06993 0.999943 8.86178 1.01695C8.63318 1.03563 8.36345 1.07969 8.09202 1.21799C7.7157 1.40974 7.40974 1.7157 7.21799 2.09202C7.07969 2.36345 7.03563 2.63318 7.01695 2.86178C7.01311 2.90874 7.01014 2.95762 7.00784 3.00806C6.61271 3.02082 6.27431 3.05347 5.96482 3.13639C4.58445 3.50626 3.50626 4.58445 3.13639 5.96482C2.9993 6.47647 2.99962 7.06713 3.00005 7.86252L3.0001 17.2414C3.00008 18.0464 3.00007 18.7107 3.04429 19.2519C3.09022 19.814 3.18878 20.3307 3.43607 20.8161C3.81956 21.5687 4.43149 22.1806 5.18413 22.5641C5.66947 22.8114 6.18617 22.91 6.74827 22.9559C7.28946 23.0001 7.95381 23.0001 8.75877 23.0001H15.2414C16.0464 23.0001 16.7107 23.0001 17.2519 22.9559C17.814 22.91 18.3307 22.8114 18.8161 22.5641C19.5687 22.1806 20.1806 21.5687 20.5641 20.8161C20.8114 20.3307 20.91 19.814 20.9559 19.2519C21.0001 18.7107 21.0001 18.0464 21.0001 17.2414L21.0001 7.86252C21.0006 7.06713 21.0009 6.47647 20.8638 5.96482C20.4939 4.58445 19.4157 3.50626 18.0354 3.13639C17.7258 3.05345 17.3874 3.02081 16.9922 3.00805C16.9899 2.95762 16.9869 2.90874 16.9831 2.86178C16.9644 2.63318 16.9203 2.36345 16.782 2.09202C16.5903 1.7157 16.2843 1.40974 15.908 1.21799C15.6366 1.07969 15.3668 1.03563 15.1382 1.01695C14.9301 0.999943 14.6843 0.999973 14.4319 1L9.56811 1ZM9 4.6C9 4.03995 9 3.75992 9.10899 3.54601C9.20487 3.35785 9.35785 3.20487 9.54601 3.10899C9.75992 3 10.0399 3 10.6 3H13.4C13.9601 3 14.2401 3 14.454 3.10899C14.6422 3.20487 14.7951 3.35785 14.891 3.54601C15 3.75992 15 4.03995 15 4.6V5H9V4.6Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ClipboardIcon = forwardRef(ClipboardIconInner);
export { ClipboardIcon };