import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Camera02IconInner(
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
        d="M8.55772 1C8.44752 0.999977 8.35165 0.999953 8.26016 1.00549C7.10333 1.07556 6.09031 1.80569 5.65802 2.88101C5.62384 2.96605 5.59354 3.05701 5.55872 3.16155L5.46185 3.45218C5.3528 3.77934 5.04663 4.00001 4.70178 4.00001C2.65734 4.00001 1 5.65735 1 7.70179V16.2413C0.999988 17.0463 0.999978 17.7106 1.04419 18.2518C1.09012 18.8139 1.18868 19.3306 1.43598 19.816C1.81947 20.5686 2.43139 21.1805 3.18404 21.564C3.66937 21.8113 4.18608 21.9099 4.74818 21.9558C5.28937 22 5.95372 22 6.75868 22H17.2413C18.0463 22 18.7106 22 19.2518 21.9558C19.8139 21.9099 20.3306 21.8113 20.816 21.564C21.5686 21.1805 22.1805 20.5686 22.564 19.816C22.8113 19.3306 22.9099 18.8139 22.9558 18.2518C23 17.7106 23 17.0463 23 16.2413V7.70179C23 5.65735 21.3427 4.00001 19.2982 4.00001C18.9534 4.00001 18.6472 3.77934 18.5381 3.45218L18.4413 3.16148C18.4064 3.05698 18.3762 2.96602 18.342 2.88101C17.9097 1.80569 16.8967 1.07556 15.7398 1.00549C15.6484 0.999953 15.5525 0.999977 15.4423 1H8.55772ZM16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Camera02Icon = forwardRef(Camera02IconInner);
export { Camera02Icon };
