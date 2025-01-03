import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function LockUnlocked02IconInner(
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
        d="M12 2C8.68629 2 6 4.68629 6 8V10.0271C5.91325 10.0319 5.82933 10.0376 5.74818 10.0442C5.18608 10.0901 4.66937 10.1887 4.18404 10.436C3.43139 10.8195 2.81947 11.4314 2.43598 12.184C2.18868 12.6694 2.09012 13.1861 2.04419 13.7482C1.99998 14.2894 1.99999 14.9537 2 15.7587V16.2413C1.99999 17.0463 1.99998 17.7106 2.04419 18.2518C2.09012 18.8139 2.18868 19.3306 2.43598 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C4.66937 21.8113 5.18608 21.9099 5.74818 21.9558C6.28938 22 6.95374 22 7.75873 22H16.2413C17.0463 22 17.7106 22 18.2518 21.9558C18.8139 21.9099 19.3306 21.8113 19.816 21.564C20.5686 21.1805 21.1805 20.5686 21.564 19.816C21.8113 19.3306 21.9099 18.8139 21.9558 18.2518C22 17.7106 22 17.0463 22 16.2413V15.7587C22 14.9537 22 14.2894 21.9558 13.7482C21.9099 13.1861 21.8113 12.6694 21.564 12.184C21.1805 11.4314 20.5686 10.8195 19.816 10.436C19.3306 10.1887 18.8139 10.0901 18.2518 10.0442C17.7106 9.99998 17.0463 9.99999 16.2413 10H8V8C8 5.79086 9.79086 4 12 4C13.934 4 15.5494 5.37356 15.92 7.19893C16.0298 7.74018 16.5577 8.08988 17.0989 7.98001C17.6402 7.87015 17.9899 7.34231 17.88 6.80107C17.324 4.06196 14.9039 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
const LockUnlocked02Icon = forwardRef(LockUnlocked02IconInner);
export { LockUnlocked02Icon };
