import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function UnderlineSquareIconInner(
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
        d="M7.7587 2H16.2413C17.0463 1.99999 17.7106 1.99998 18.2518 2.0442C18.8139 2.09012 19.3306 2.18868 19.816 2.43598C20.5686 2.81947 21.1805 3.43139 21.564 4.18404C21.8113 4.66938 21.9099 5.18608 21.9558 5.74818C22 6.28937 22 6.95372 22 7.75868V16.2413C22 17.0463 22 17.7106 21.9558 18.2518C21.9099 18.8139 21.8113 19.3306 21.564 19.816C21.1805 20.5686 20.5686 21.1805 19.816 21.564C19.3306 21.8113 18.8139 21.9099 18.2518 21.9558C17.7106 22 17.0463 22 16.2413 22H7.75868C6.95372 22 6.28937 22 5.74818 21.9558C5.18608 21.9099 4.66938 21.8113 4.18404 21.564C3.43139 21.1805 2.81947 20.5686 2.43598 19.816C2.18868 19.3306 2.09012 18.8139 2.0442 18.2518C1.99998 17.7106 1.99999 17.0463 2 16.2413V7.75869C1.99999 6.95373 1.99998 6.28936 2.0442 5.74818C2.09012 5.18608 2.18868 4.66938 2.43598 4.18404C2.81947 3.43139 3.43139 2.81947 4.18404 2.43598C4.66938 2.18868 5.18608 2.09012 5.74818 2.0442C6.28936 1.99998 6.95375 1.99999 7.7587 2ZM9.5 7C9.5 6.44772 9.05229 6 8.5 6C7.94772 6 7.5 6.44772 7.5 7V10.5C7.5 12.9853 9.51472 15 12 15C14.4853 15 16.5 12.9853 16.5 10.5V7C16.5 6.44772 16.0523 6 15.5 6C14.9477 6 14.5 6.44772 14.5 7V10.5C14.5 11.8807 13.3807 13 12 13C10.6193 13 9.5 11.8807 9.5 10.5V7ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H16C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16H8Z"
        fill="currentColor"
      />
    </svg>
  );
}
const UnderlineSquareIcon = forwardRef(UnderlineSquareIconInner);
export { UnderlineSquareIcon };
