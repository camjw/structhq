import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ChartBreakoutCircleIconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 12.0992 1 12.1488 1.01014 12.2195C1.05559 12.5362 1.30639 12.8656 1.59956 12.9938C1.66497 13.0223 1.72287 13.0383 1.83866 13.0703C2.02017 13.1204 2.18381 13.1643 2.32042 13.1999C3.18106 13.3961 4.07777 13.5 4.99996 13.5C8.30564 13.5 11.2993 12.164 13.4706 10H12C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8H16C16.5523 8 17 8.44772 17 9V13C17 13.5523 16.5523 14 16 14C15.4477 14 15 13.5523 15 13V11.2978C12.4598 13.8899 8.91796 15.5 4.99996 15.5C4.73986 15.5 4.48086 15.4931 4.22292 15.4791C3.21076 15.4244 2.70468 15.3971 2.42612 15.5856C2.18892 15.7461 2.02431 16.0187 1.99267 16.3033C1.95552 16.6376 2.15315 16.9686 2.54839 17.6307C4.46824 20.8464 7.98262 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ChartBreakoutCircleIcon = forwardRef(ChartBreakoutCircleIconInner);
export { ChartBreakoutCircleIcon };
