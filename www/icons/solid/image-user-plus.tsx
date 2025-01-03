import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ImageUserPlusIconInner(
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
        d="M6.7587 1H12C12.5523 1 13 1.44772 13 2C13 2.55229 12.5523 3 12 3H6.8C5.94342 3 5.36113 3.00078 4.91104 3.03755C4.47262 3.07337 4.24842 3.1383 4.09202 3.21799C3.7157 3.40973 3.40973 3.7157 3.21799 4.09202C3.1383 4.24842 3.07337 4.47262 3.03755 4.91104C3.00078 5.36113 3 5.94342 3 6.8V16.9996C3.83529 16.3721 4.87374 16 5.9998 16L13.5577 16C13.9665 16 14.2448 15.9999 14.4903 16.0241C16.8639 16.258 18.7419 18.1358 18.9759 20.5095C18.9894 20.6468 18.9954 20.7943 18.998 20.9693C19.0289 20.9671 19.0592 20.9649 19.089 20.9624C19.5274 20.9266 19.7516 20.8617 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C20.8617 19.7516 20.9266 19.5274 20.9624 19.089C20.9992 18.6389 21 18.0566 21 17.2V12C21 11.4477 21.4477 11 22 11C22.5523 11 23 11.4477 23 12V17.2413C23 18.0463 23 18.7106 22.9558 19.2518C22.9099 19.8139 22.8113 20.3306 22.564 20.816C22.1805 21.5686 21.5686 22.1805 20.816 22.564C20.3306 22.8113 19.8139 22.9099 19.2518 22.9558C18.7106 23 18.0463 23 17.2413 23H6.75868C5.95372 23 5.28937 23 4.74818 22.9558C4.18608 22.9099 3.66937 22.8113 3.18404 22.564C2.43139 22.1805 1.81947 21.5686 1.43598 20.816C1.18868 20.3306 1.09012 19.8139 1.04419 19.2518C0.999978 18.7106 0.999988 18.0463 1 17.2413V6.7587C0.999988 5.95374 0.999978 5.28937 1.04419 4.74818C1.09012 4.18608 1.18868 3.66937 1.43598 3.18404C1.81947 2.43139 2.43139 1.81947 3.18404 1.43598C3.66937 1.18868 4.18608 1.09012 4.74818 1.04419C5.28937 0.999978 5.95374 0.999988 6.7587 1Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4.5C7.23858 4.5 5 6.73858 5 9.5C5 12.2614 7.23858 14.5 10 14.5C12.7614 14.5 15 12.2614 15 9.5C15 6.73858 12.7614 4.5 10 4.5Z"
        fill="currentColor"
      />
      <path
        d="M20 2C20 1.44772 19.5523 1 19 1C18.4477 1 18 1.44772 18 2V4H16C15.4477 4 15 4.44772 15 5C15 5.55228 15.4477 6 16 6H18V8C18 8.55228 18.4477 9 19 9C19.5523 9 20 8.55228 20 8V6H22C22.5523 6 23 5.55228 23 5C23 4.44772 22.5523 4 22 4H20V2Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ImageUserPlusIcon = forwardRef(ImageUserPlusIconInner);
export { ImageUserPlusIcon };
