import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CircleCutIconInner(
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
        d="M5.83902 3.85751C5.58779 3.73886 5.46218 3.67953 5.27871 3.66532C5.1413 3.65468 4.93125 3.68973 4.80474 3.74441C4.63583 3.81742 4.53317 3.91735 4.32785 4.11722C2.27503 6.11552 1 8.90886 1 12C1 15.0911 2.27503 17.8845 4.32785 19.8828C4.53317 20.0826 4.63583 20.1826 4.80474 20.2556C4.93125 20.3103 5.1413 20.3453 5.27871 20.3347C5.46218 20.3205 5.58779 20.2611 5.83902 20.1425C8.88944 18.7017 11 15.5974 11 12C11 8.40265 8.88943 5.29825 5.83902 3.85751Z"
        fill="currentColor"
      />
      <path
        d="M8.43955 1.58899C8.00085 1.73899 7.7815 1.81398 7.68746 1.95684C7.60562 2.08116 7.58343 2.23564 7.62694 2.37796C7.67696 2.54152 7.89736 2.69717 8.33818 3.00848C11.1583 5.00006 13 8.28496 13 12C13 15.715 11.1583 18.9999 8.33818 20.9915C7.89737 21.3028 7.67696 21.4585 7.62695 21.622C7.58343 21.7644 7.60563 21.9188 7.68746 22.0432C7.7815 22.186 8.00085 22.261 8.43955 22.411C9.55626 22.7928 10.7539 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C10.7539 1 9.55626 1.20719 8.43955 1.58899Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CircleCutIcon = forwardRef(CircleCutIconInner);
export { CircleCutIcon };
