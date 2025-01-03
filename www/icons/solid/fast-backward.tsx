import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function FastBackwardIconInner(
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
        d="M9.92512 4.22821C10.5483 4.20488 11.1468 4.47362 11.5434 4.95492C11.8625 5.34215 11.9361 5.81929 11.9674 6.1674C12 6.52981 12 6.99146 11.9999 7.51783V16.4821C12 17.0085 12 17.4701 11.9674 17.8325C11.9361 18.1806 11.8625 18.6578 11.5434 19.045C11.1468 19.5263 10.5483 19.795 9.92512 19.7717C9.4237 19.753 9.01822 19.4909 8.73724 19.2831C8.4447 19.0667 8.09966 18.7599 7.70626 18.4102L2.65526 13.9204C2.44481 13.7334 2.24248 13.5536 2.0856 13.3882C1.91531 13.2087 1.72798 12.9756 1.61806 12.6625C1.46748 12.2337 1.46748 11.7663 1.61806 11.3374C1.72798 11.0243 1.91531 10.7912 2.0856 10.6117C2.24247 10.4463 2.44479 10.2665 2.65523 10.0795C2.66378 10.0719 2.67233 10.0643 2.6809 10.0567L7.70628 5.5897C8.09968 5.23998 8.4447 4.93325 8.73724 4.71685C9.01822 4.50899 9.4237 4.24698 9.92512 4.22821Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.9251 4.22821C21.5483 4.20488 22.1468 4.47362 22.5434 4.95492C22.8625 5.34215 22.9361 5.81929 22.9674 6.1674C23 6.52981 23 6.99146 22.9999 7.51783V16.4821C23 17.0085 23 17.4701 22.9674 17.8325C22.9361 18.1806 22.8625 18.6578 22.5434 19.045C22.1468 19.5263 21.5483 19.795 20.9251 19.7717C20.4237 19.753 20.0182 19.4909 19.7372 19.2831C19.4447 19.0667 19.0997 18.7599 18.7063 18.4102L13.6553 13.9204C13.4448 13.7334 13.2425 13.5536 13.0856 13.3882C12.9153 13.2087 12.728 12.9756 12.6181 12.6625C12.4675 12.2337 12.4675 11.7663 12.6181 11.3374C12.728 11.0243 12.9153 10.7912 13.0856 10.6117C13.2425 10.4463 13.4448 10.2665 13.6552 10.0795C13.6638 10.0719 13.6723 10.0643 13.6809 10.0567L18.7063 5.5897C19.0997 5.23998 19.4447 4.93325 19.7372 4.71685C20.0182 4.50899 20.4237 4.24698 20.9251 4.22821Z"
        fill="currentColor"
      />
    </svg>
  );
}
const FastBackwardIcon = forwardRef(FastBackwardIconInner);
export { FastBackwardIcon };