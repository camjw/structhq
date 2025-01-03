import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Download01AltIconInner(
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
        d="M7.22602 14.4687C7.05306 14.2957 6.96659 14.2092 6.86567 14.1474C6.7762 14.0926 6.67866 14.0522 6.57662 14.0277C6.46153 14 6.33924 14 6.09465 14H5.33289C5.02836 13.9998 4.76635 13.9997 4.53069 14.037C3.24701 14.2403 2.24024 15.2471 2.03693 16.5308C1.99961 16.7664 1.99977 17.0284 1.99997 17.3329L1.99998 17.4826C1.99982 17.9595 1.99971 18.313 2.04924 18.6258C2.32033 20.3374 3.66269 21.6797 5.37426 21.9508C5.68701 22.0003 6.0405 22.0002 6.51748 22.0001H17.4825C17.9595 22.0002 18.313 22.0003 18.6257 21.9508C20.3373 21.6797 21.6797 20.3374 21.9507 18.6258C22.0003 18.3131 22.0002 17.9596 22 17.4827L22 17.333C22.0002 17.0284 22.0004 16.7664 21.9631 16.5308C21.7597 15.2471 20.753 14.2403 19.4693 14.037C19.2336 13.9997 18.9716 13.9998 18.6671 14H17.9054C17.6608 14 17.5385 14 17.4234 14.0277C17.3213 14.0522 17.2238 14.0926 17.1343 14.1474C17.0334 14.2092 16.9469 14.2957 16.774 14.4687L14.1213 17.1213C12.9497 18.2929 11.0503 18.2929 9.87868 17.1213L7.22602 14.4687Z"
        fill="currentColor"
      />
      <path
        d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V12.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289C17.3166 8.90237 16.6834 8.90237 16.2929 9.29289L13 12.5858V3Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Download01AltIcon = forwardRef(Download01AltIconInner);
export { Download01AltIcon };