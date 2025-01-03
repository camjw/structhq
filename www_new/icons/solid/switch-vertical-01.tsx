import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function SwitchVertical01IconInner(
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
        d="M7.70711 3.29289C7.31658 2.90237 6.68342 2.90237 6.29289 3.29289L2.29289 7.29289C1.90237 7.68342 1.90237 8.31658 2.29289 8.70711C2.68342 9.09763 3.31658 9.09763 3.70711 8.70711L6 6.41421L6 20C6 20.5523 6.44772 21 7 21C7.55229 21 8 20.5523 8 20L8 6.41421L10.2929 8.70711C10.6834 9.09763 11.3166 9.09763 11.7071 8.70711C12.0976 8.31658 12.0976 7.68342 11.7071 7.29289L7.70711 3.29289Z"
        fill="currentColor"
      />
      <path
        d="M18 17.5858V4C18 3.44772 17.5523 3 17 3C16.4477 3 16 3.44772 16 4V17.5858L13.7071 15.2929C13.3166 14.9024 12.6834 14.9024 12.2929 15.2929C11.9024 15.6834 11.9024 16.3166 12.2929 16.7071L16.2929 20.7071C16.6834 21.0976 17.3166 21.0976 17.7071 20.7071L21.7071 16.7071C22.0976 16.3166 22.0976 15.6834 21.7071 15.2929C21.3166 14.9024 20.6834 14.9024 20.2929 15.2929L18 17.5858Z"
        fill="currentColor"
      />
    </svg>
  );
}
const SwitchVertical01Icon = forwardRef(SwitchVertical01IconInner);
export { SwitchVertical01Icon };
