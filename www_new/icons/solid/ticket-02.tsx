import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Ticket02IconInner(
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
        d="M6.7587 3H17.2413C18.0463 2.99999 18.7106 2.99998 19.2518 3.0442C19.8139 3.09012 20.3306 3.18868 20.816 3.43598C21.5686 3.81947 22.1805 4.43139 22.564 5.18404C22.8113 5.66938 22.9099 6.18608 22.9558 6.74818C23 7.28937 23 7.95372 23 8.75868V15.2413C23 16.0463 23 16.7106 22.9558 17.2518C22.9099 17.8139 22.8113 18.3306 22.564 18.816C22.1805 19.5686 21.5686 20.1805 20.816 20.564C20.3306 20.8113 19.8139 20.9099 19.2518 20.9558C18.7106 21 18.0463 21 17.2413 21H6.75868C5.95372 21 5.28937 21 4.74818 20.9558C4.18608 20.9099 3.66938 20.8113 3.18404 20.564C2.43139 20.1805 1.81947 19.5686 1.43598 18.816C1.18868 18.3306 1.09012 17.8139 1.0442 17.2518C0.999979 16.7106 0.999988 16.0463 1 15.2413V8.75869C0.999988 7.95373 0.999979 7.28936 1.0442 6.74818C1.09012 6.18608 1.18868 5.66938 1.43598 5.18404C1.81947 4.43139 2.43139 3.81947 3.18404 3.43598C3.66938 3.18868 4.18608 3.09012 4.74818 3.0442C5.28936 2.99998 5.95375 2.99999 6.7587 3ZM9 6.5C9 5.94772 8.55229 5.5 8 5.5C7.44772 5.5 7 5.94772 7 6.5V7.5C7 8.05229 7.44772 8.5 8 8.5C8.55229 8.5 9 8.05229 9 7.5V6.5ZM8 10.5C8.55229 10.5 9 10.9477 9 11.5V12.5C9 13.0523 8.55229 13.5 8 13.5C7.44772 13.5 7 13.0523 7 12.5V11.5C7 10.9477 7.44772 10.5 8 10.5ZM9 16.5C9 15.9477 8.55229 15.5 8 15.5C7.44772 15.5 7 15.9477 7 16.5V17.5C7 18.0523 7.44772 18.5 8 18.5C8.55229 18.5 9 18.0523 9 17.5V16.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Ticket02Icon = forwardRef(Ticket02IconInner);
export { Ticket02Icon };