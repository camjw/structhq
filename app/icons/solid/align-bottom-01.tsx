import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function AlignBottom01IconInner(
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
        d="M12 2C12.5523 2 13 2.44772 13 3V14.5858L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L4.29289 10.7071C3.90237 10.3166 3.90237 9.68342 4.29289 9.29289C4.68342 8.90237 5.31658 8.90237 5.70711 9.29289L11 14.5858L11 3C11 2.44772 11.4477 2 12 2Z"
        fill="currentColor"
      />
      <path
        d="M2 21C2 20.4477 2.44772 20 3 20L21 20C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22L3 22C2.44772 22 2 21.5523 2 21Z"
        fill="currentColor"
      />
    </svg>
  );
}
const AlignBottom01Icon = forwardRef(AlignBottom01IconInner);
export { AlignBottom01Icon };
