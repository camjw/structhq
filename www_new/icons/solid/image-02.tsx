import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Image02IconInner(
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
        d="M5.5 8.5C5.5 6.84315 6.84315 5.5 8.5 5.5C10.1569 5.5 11.5 6.84315 11.5 8.5C11.5 10.1569 10.1569 11.5 8.5 11.5C6.84315 11.5 5.5 10.1569 5.5 8.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 12.4994 20.9593 12.9894 20.8811 13.4667L17.816 10.4016C17.6376 10.2231 17.4637 10.0492 17.3045 9.91409C17.1297 9.76565 16.9078 9.60608 16.6181 9.51195C16.2164 9.38143 15.7837 9.38143 15.382 9.51195C15.0923 9.60608 14.8704 9.76565 14.6956 9.91409C14.5364 10.0492 14.3626 10.2231 14.1841 10.4015L5.93558 18.6501C4.13177 17.0042 3 14.6343 3 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Image02Icon = forwardRef(Image02IconInner);
export { Image02Icon };
