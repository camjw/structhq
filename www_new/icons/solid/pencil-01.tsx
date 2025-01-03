import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Pencil01IconInner(
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
        d="M21.7072 2.29271C20.2121 0.797615 17.788 0.797613 16.2929 2.2927L4.97637 13.6093C4.74284 13.8427 4.56618 14.0192 4.41139 14.2187C4.27456 14.395 4.15273 14.5825 4.04718 14.7791C3.92775 15.0016 3.83815 15.2348 3.7197 15.543L1.56668 21.1408C1.52179 21.2576 1.49998 21.3792 1.5 21.4998C1.50002 21.7603 1.60189 22.016 1.79292 22.207C2.07236 22.4864 2.49016 22.5751 2.85901 22.4332L8.23875 20.3641C8.2693 20.3524 8.30046 20.3404 8.33177 20.3283L8.45687 20.2801C8.76504 20.1617 8.99825 20.0721 9.2207 19.9527C9.41735 19.8471 9.60481 19.7253 9.78113 19.5885C9.98061 19.4337 10.1572 19.257 10.3906 19.0235L21.7072 7.70692C23.2023 6.21183 23.2023 3.7878 21.7072 2.29271ZM5.38099 16.7951L4.24108 19.7588L7.20481 18.6189L5.38099 16.7951Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Pencil01Icon = forwardRef(Pencil01IconInner);
export { Pencil01Icon };
