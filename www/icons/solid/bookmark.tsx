import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BookmarkIconInner(
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
        d="M9.7587 2H14.2413C15.0463 1.99999 15.7106 1.99998 16.2518 2.04419C16.8139 2.09012 17.3306 2.18868 17.816 2.43597C18.5686 2.81947 19.1805 3.43139 19.564 4.18404C19.8113 4.66937 19.9099 5.18608 19.9558 5.74817C20 6.28938 20 6.95374 20 7.75873V21C20 21.3565 19.8102 21.686 19.5019 21.8649C19.1936 22.0438 18.8134 22.0451 18.5039 21.8682L12 18.1518L5.49614 21.8682C5.18664 22.0451 4.80639 22.0438 4.49807 21.8649C4.18976 21.686 4 21.3565 4 21L4 7.7587C3.99999 6.95373 3.99998 6.28937 4.04419 5.74817C4.09012 5.18608 4.18868 4.66937 4.43597 4.18404C4.81947 3.43139 5.43139 2.81947 6.18404 2.43597C6.66937 2.18868 7.18608 2.09012 7.74817 2.04419C8.28937 1.99998 8.95373 1.99999 9.7587 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BookmarkIcon = forwardRef(BookmarkIconInner);
export { BookmarkIcon };
