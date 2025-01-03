import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ParagraphSpacingIconInner(
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
        d="M5.29289 3.29289C5.68342 2.90237 6.31658 2.90237 6.70711 3.29289L9.70711 6.29289C10.0976 6.68342 10.0976 7.31658 9.70711 7.70711C9.31658 8.09763 8.68342 8.09763 8.29289 7.70711L7 6.41421L7 17.5858L8.29289 16.2929C8.68342 15.9024 9.31658 15.9024 9.70711 16.2929C10.0976 16.6834 10.0976 17.3166 9.70711 17.7071L6.70711 20.7071C6.31658 21.0976 5.68342 21.0976 5.29289 20.7071L2.29289 17.7071C1.90237 17.3166 1.90237 16.6834 2.29289 16.2929C2.68342 15.9024 3.31658 15.9024 3.70711 16.2929L5 17.5858L5 6.41421L3.70711 7.70711C3.31658 8.09763 2.68342 8.09763 2.29289 7.70711C1.90237 7.31658 1.90237 6.68342 2.29289 6.29289L5.29289 3.29289Z"
        fill="currentColor"
      />
      <path
        d="M12 6C12 5.44772 12.4477 5 13 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H13C12.4477 7 12 6.55228 12 6Z"
        fill="currentColor"
      />
      <path
        d="M12 10C12 9.44772 12.4477 9 13 9H21C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H13C12.4477 11 12 10.5523 12 10Z"
        fill="currentColor"
      />
      <path
        d="M13 13C12.4477 13 12 13.4477 12 14C12 14.5523 12.4477 15 13 15H21C21.5523 15 22 14.5523 22 14C22 13.4477 21.5523 13 21 13H13Z"
        fill="currentColor"
      />
      <path
        d="M12 18C12 17.4477 12.4477 17 13 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H13C12.4477 19 12 18.5523 12 18Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ParagraphSpacingIcon = forwardRef(ParagraphSpacingIconInner);
export { ParagraphSpacingIcon };
