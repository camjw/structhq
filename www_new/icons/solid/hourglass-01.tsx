import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Hourglass01IconInner(
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
        d="M3 2C3 1.44772 3.44772 1 4 1H20C20.5523 1 21 1.44772 21 2C21 2.55228 20.5523 3 20 3H19.0001L19.0001 4.8671C19.0005 5.58144 19.0008 6.12093 18.8627 6.63408C18.741 7.08643 18.5408 7.51388 18.2712 7.89696C17.9654 8.33153 17.5508 8.67669 17.0017 9.13371L13.5621 12L17.0018 14.8663C17.5508 15.3233 17.9654 15.6685 18.2712 16.103C18.5408 16.4861 18.741 16.9136 18.8627 17.3659C19.0008 17.8791 19.0005 18.4186 19.0001 19.1329L19.0001 21H20C20.5523 21 21 21.4477 21 22C21 22.5523 20.5523 23 20 23H4C3.44772 23 3 22.5523 3 22C3 21.4477 3.44772 21 4 21H5.00008L5.00004 19.1329C4.99966 18.4186 4.99937 17.8791 5.13743 17.3659C5.25913 16.9136 5.45934 16.4861 5.72893 16.103C6.03477 15.6685 6.4494 15.3233 6.99842 14.8663L10.438 12L6.99841 9.13371C6.4494 8.67669 6.03476 8.33153 5.72893 7.89696C5.45934 7.51388 5.25913 7.08643 5.13743 6.63408C4.99937 6.12093 4.99966 5.58144 5.00004 4.86709L5.00008 3H4C3.44772 3 3 2.55228 3 2ZM7.00008 4.7518V3H17.0001V4.7518C17.0001 5.63231 16.992 5.88909 16.9314 6.11448C16.8706 6.34065 16.7704 6.55438 16.6357 6.74592C16.5013 6.93679 16.3092 7.10735 15.6328 7.67104L12.0001 10.6983L8.36738 7.67104C7.69095 7.10735 7.49883 6.93679 7.3645 6.74592C7.22971 6.55438 7.12961 6.34065 7.06876 6.11448C7.00812 5.88909 7.00008 5.63231 7.00008 4.7518Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Hourglass01Icon = forwardRef(Hourglass01IconInner);
export { Hourglass01Icon };
