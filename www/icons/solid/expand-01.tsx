import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Expand01IconInner(
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
        d="M14 3C14 2.44772 14.4477 2 15 2H21C21.5523 2 22 2.44772 22 3V9C22 9.55229 21.5523 10 21 10C20.4477 10 20 9.55229 20 9V5.41421L14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289L18.5858 4H15C14.4477 4 14 3.55228 14 3Z"
        fill="currentColor"
      />
      <path
        d="M5.41421 20L10.7071 14.7071C11.0976 14.3166 11.0976 13.6834 10.7071 13.2929C10.3166 12.9024 9.68342 12.9024 9.29289 13.2929L4 18.5858L4 15C4 14.4477 3.55229 14 3 14C2.44772 14 2 14.4477 2 15V21C2 21.5523 2.44772 22 3 22H9C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20H5.41421Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Expand01Icon = forwardRef(Expand01IconInner);
export { Expand01Icon };
