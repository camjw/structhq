import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function AlignRight01IconInner(
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
        d="M21 2C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V3C20 2.44772 20.4477 2 21 2Z"
        fill="currentColor"
      />
      <path
        d="M2 12C2 11.4477 2.44772 11 3 11H14.5858L9.29289 5.70711C8.90237 5.31658 8.90237 4.68342 9.29289 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.29289L17.7071 11.2929C17.8946 11.4804 18 11.7348 18 12C18 12.2652 17.8946 12.5196 17.7071 12.7071L10.7071 19.7071C10.3166 20.0976 9.68342 20.0976 9.29289 19.7071C8.90237 19.3166 8.90237 18.6834 9.29289 18.2929L14.5858 13H3C2.44772 13 2 12.5523 2 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const AlignRight01Icon = forwardRef(AlignRight01IconInner);
export { AlignRight01Icon };
