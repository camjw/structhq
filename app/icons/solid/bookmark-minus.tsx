import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BookmarkMinusIconInner(
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
        d="M14.2413 2H9.7587C8.95374 1.99999 8.28937 1.99998 7.74818 2.04419C7.18608 2.09012 6.66937 2.18868 6.18404 2.43598C5.43139 2.81947 4.81947 3.43139 4.43598 4.18404C4.18868 4.66937 4.09012 5.18608 4.04419 5.74818C3.99998 6.28937 3.99999 6.95372 4 7.75869V21C4 21.3565 4.18976 21.686 4.49807 21.8649C4.80639 22.0438 5.18664 22.0451 5.49614 21.8682L12 18.1518L18.5039 21.8682C18.8134 22.0451 19.1936 22.0438 19.5019 21.8649C19.8102 21.686 20 21.3565 20 21V7.75873C20 6.95376 20 6.28937 19.9558 5.74818C19.9099 5.18608 19.8113 4.66937 19.564 4.18404C19.1805 3.43139 18.5686 2.81947 17.816 2.43598C17.3306 2.18868 16.8139 2.09012 16.2518 2.04419C15.7106 1.99998 15.0463 1.99999 14.2413 2ZM9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11H15C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9H9Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BookmarkMinusIcon = forwardRef(BookmarkMinusIconInner);
export { BookmarkMinusIcon };
