import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Trash01IconInner(
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
        d="M11.1615 1H12.8385C13.3657 0.999985 13.8205 0.999971 14.195 1.03057C14.5904 1.06287 14.9836 1.13419 15.362 1.32698C15.9265 1.6146 16.3854 2.07355 16.673 2.63803C16.8658 3.01641 16.9371 3.40963 16.9694 3.80498C16.9969 4.14075 16.9997 4.54097 17 5H21C21.5523 5 22 5.44772 22 6C22 6.55229 21.5523 7 21 7H20V17.2413C20 18.0462 20 18.7106 19.9558 19.2518C19.9099 19.8139 19.8113 20.3306 19.564 20.816C19.1805 21.5686 18.5686 22.1805 17.816 22.564C17.3306 22.8113 16.8139 22.9099 16.2518 22.9558C15.7106 23 15.0463 23 14.2413 23H9.75868C8.95372 23 8.28936 23 7.74818 22.9558C7.18608 22.9099 6.66937 22.8113 6.18404 22.564C5.43139 22.1805 4.81947 21.5686 4.43597 20.816C4.18868 20.3306 4.09012 19.8139 4.04419 19.2518C3.99998 18.7106 3.99999 18.0463 4 17.2413L4 7H3C2.44772 7 2 6.55229 2 6C2 5.44772 2.44772 5 3 5H7.00003C7.00031 4.54097 7.00314 4.14075 7.03057 3.80498C7.06287 3.40963 7.13419 3.01641 7.32698 2.63803C7.6146 2.07355 8.07354 1.6146 8.63803 1.32698C9.01641 1.13419 9.40963 1.06287 9.80497 1.03057C10.1795 0.999971 10.6343 0.999985 11.1615 1ZM10 10.5C10.5523 10.5 11 10.9477 11 11.5V16.5C11 17.0523 10.5523 17.5 10 17.5C9.44772 17.5 9 17.0523 9 16.5V11.5C9 10.9477 9.44772 10.5 10 10.5ZM15 11.5C15 10.9477 14.5523 10.5 14 10.5C13.4477 10.5 13 10.9477 13 11.5V16.5C13 17.0523 13.4477 17.5 14 17.5C14.5523 17.5 15 17.0523 15 16.5V11.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Trash01Icon = forwardRef(Trash01IconInner);
export { Trash01Icon };
