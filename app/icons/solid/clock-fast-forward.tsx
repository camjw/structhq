import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ClockFastForwardIconInner(
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
        d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.5127 20 16.7544 18.8427 18.2226 17.0283C18.57 16.599 19.1997 16.5326 19.629 16.88C20.0584 17.2274 20.1248 17.8571 19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.1343 2 21.3648 5.86933 21.9347 10.851L21.9927 10.793C22.3832 10.4024 23.0164 10.4023 23.407 10.7928C23.7975 11.1833 23.7976 11.8164 23.4072 12.207L21.4078 14.207C21.2202 14.3946 20.9659 14.5 20.7007 14.5C20.4355 14.5 20.1811 14.3947 19.9935 14.2072L17.9929 12.2072C17.6024 11.8167 17.6023 11.1836 17.9927 10.793C18.3832 10.4024 19.0164 10.4023 19.407 10.7928L19.9748 11.3605C19.649 7.24121 16.203 4 12 4Z"
        fill="currentColor"
      />
      <path
        d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V12C11 12.3344 11.1671 12.6466 11.4453 12.8321L14.4453 14.8321C14.9048 15.1384 15.5257 15.0142 15.8321 14.5547C16.1384 14.0952 16.0142 13.4743 15.5547 13.1679L13 11.4648V7Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ClockFastForwardIcon = forwardRef(ClockFastForwardIconInner);
export { ClockFastForwardIcon };
