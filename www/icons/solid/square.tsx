import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function SquareIconInner(
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
        d="M16.2413 2H7.7587C6.95374 1.99999 6.28937 1.99998 5.74818 2.04419C5.18608 2.09012 4.66937 2.18868 4.18404 2.43598C3.43139 2.81947 2.81947 3.43139 2.43598 4.18404C2.18868 4.66937 2.09012 5.18608 2.04419 5.74818C1.99998 6.28937 1.99999 6.95372 2 7.75869V16.2413C1.99999 17.0463 1.99998 17.7106 2.04419 18.2518C2.09012 18.8139 2.18868 19.3306 2.43598 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C4.66937 21.8113 5.18608 21.9099 5.74818 21.9558C6.28936 22 6.95372 22 7.75868 22H16.2413C17.0463 22 17.7106 22 18.2518 21.9558C18.8139 21.9099 19.3306 21.8113 19.816 21.564C20.5686 21.1805 21.1805 20.5686 21.564 19.816C21.8113 19.3306 21.9099 18.8139 21.9558 18.2518C22 17.7106 22 17.0463 22 16.2413V7.75868C22 6.95372 22 6.28937 21.9558 5.74818C21.9099 5.18608 21.8113 4.66937 21.564 4.18404C21.1805 3.43139 20.5686 2.81947 19.816 2.43598C19.3306 2.18868 18.8139 2.09012 18.2518 2.04419C17.7106 1.99998 17.0463 1.99999 16.2413 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
const SquareIcon = forwardRef(SquareIconInner);
export { SquareIcon };
