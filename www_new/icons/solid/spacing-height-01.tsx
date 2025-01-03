import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function SpacingHeight01IconInner(
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
        d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H3C2.44772 4 2 3.55228 2 3Z"
        fill="currentColor"
      />
      <path
        d="M2 21C2 20.4477 2.44772 20 3 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21Z"
        fill="currentColor"
      />
      <path
        d="M14.4453 8.83205L13 7.86853L13 16.1316L14.4453 15.1681C14.9048 14.8617 15.5257 14.9859 15.832 15.4454C16.1384 15.9049 16.0142 16.5258 15.5547 16.8322L12.5547 18.8322C12.2188 19.0561 11.7812 19.0561 11.4453 18.8322L8.44528 16.8322C7.98576 16.5258 7.86158 15.9049 8.16793 15.4454C8.47429 14.9859 9.09516 14.8617 9.55468 15.1681L11 16.1316L11 7.86851L9.55468 8.83205C9.09516 9.1384 8.47429 9.01423 8.16793 8.5547C7.86158 8.09517 7.98576 7.4743 8.44528 7.16795L11.4453 5.16795C11.7812 4.94402 12.2188 4.94402 12.5547 5.16795L15.5547 7.16795C16.0142 7.4743 16.1384 8.09517 15.832 8.5547C15.5257 9.01423 14.9048 9.1384 14.4453 8.83205Z"
        fill="currentColor"
      />
    </svg>
  );
}
const SpacingHeight01Icon = forwardRef(SpacingHeight01IconInner);
export { SpacingHeight01Icon };