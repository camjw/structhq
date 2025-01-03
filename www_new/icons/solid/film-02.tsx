import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Film02IconInner(
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
        d="M23 6.7587C23 5.95374 23 5.28937 22.9558 4.74818C22.9099 4.18608 22.8113 3.66938 22.564 3.18404C22.1805 2.43139 21.5686 1.81947 20.816 1.43598C20.3306 1.18869 19.8139 1.09012 19.2518 1.0442C18.7106 0.999978 18.0463 0.999989 17.2413 1L6.7587 1C5.95374 0.999988 5.28937 0.999978 4.74818 1.04419C4.18608 1.09012 3.66937 1.18868 3.18404 1.43598C2.43139 1.81947 1.81947 2.43139 1.43598 3.18404C1.18868 3.66937 1.09012 4.18608 1.04419 4.74818C0.999978 5.28936 0.999988 5.95372 1 6.75868L1 17.2413C0.999987 18.0463 0.999978 18.7106 1.04419 19.2518C1.09012 19.8139 1.18868 20.3306 1.43597 20.816C1.81947 21.5686 2.43139 22.1805 3.18404 22.564C3.66937 22.8113 4.18608 22.9099 4.74817 22.9558C5.28936 23 5.95372 23 6.75867 23H17.2413C18.0463 23 18.7106 23 19.2518 22.9558C19.8139 22.9099 20.3306 22.8113 20.816 22.564C21.5686 22.1805 22.1805 21.5686 22.564 20.816C22.8113 20.3306 22.9099 19.8139 22.9558 19.2518C23 18.7106 23 18.0463 23 17.2413V6.7587ZM18 18H20.9982C20.9951 18.4455 20.9864 18.7954 20.9624 19.089C20.9266 19.5274 20.8617 19.7516 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.7516 20.8617 19.5274 20.9266 19.089 20.9624C18.7954 20.9864 18.4455 20.9951 18 20.9982V18ZM16 18H13V21H16V18ZM8 18H11V21H8V18ZM6 18H3.00176C3.00489 18.4455 3.01357 18.7954 3.03755 19.089C3.07337 19.5274 3.1383 19.7516 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.24842 20.8617 4.47262 20.9266 4.91104 20.9624C5.20463 20.9864 5.55447 20.9951 6 20.9982V18ZM20.9624 4.91104C20.9864 5.20463 20.9951 5.55447 20.9982 6H18V3.00176C18.4455 3.00489 18.7954 3.01357 19.089 3.03755C19.5274 3.07337 19.7516 3.1383 19.908 3.21799C20.2843 3.40974 20.5903 3.7157 20.782 4.09202C20.8617 4.24842 20.9266 4.47262 20.9624 4.91104ZM16 3V6H13V3L16 3ZM11 3V6H8V3L11 3ZM6 3.00176V6H3.00176C3.00489 5.55447 3.01357 5.20463 3.03755 4.91104C3.07337 4.47262 3.1383 4.24842 3.21799 4.09202C3.40973 3.7157 3.7157 3.40973 4.09202 3.21799C4.24842 3.1383 4.47262 3.07337 4.91104 3.03755C5.20463 3.01357 5.55447 3.00489 6 3.00176Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Film02Icon = forwardRef(Film02IconInner);
export { Film02Icon };