import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function AlignVerticalCenter01IconInner(
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
        d="M12 1C12.5523 1 13 1.44772 13 2V6.08579L15.2929 3.79289C15.6834 3.40237 16.3166 3.40237 16.7071 3.79289C17.0976 4.18342 17.0976 4.81658 16.7071 5.20711L12.7071 9.20711C12.3166 9.59763 11.6834 9.59763 11.2929 9.20711L7.29289 5.20711C6.90237 4.81658 6.90237 4.18342 7.29289 3.79289C7.68342 3.40237 8.31658 3.40237 8.70711 3.79289L11 6.08579V2C11 1.44772 11.4477 1 12 1Z"
        fill="currentColor"
      />
      <path
        d="M2 12C2 11.4477 2.44772 11 3 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13L3 13C2.44772 13 2 12.5523 2 12Z"
        fill="currentColor"
      />
      <path
        d="M12 23C11.4477 23 11 22.5523 11 22V17.9142L8.70711 20.2071C8.31658 20.5976 7.68342 20.5976 7.29289 20.2071C6.90237 19.8166 6.90237 19.1834 7.29289 18.7929L11.2929 14.7929C11.6834 14.4024 12.3166 14.4024 12.7071 14.7929L16.7071 18.7929C17.0976 19.1834 17.0976 19.8166 16.7071 20.2071C16.3166 20.5976 15.6834 20.5976 15.2929 20.2071L13 17.9142V22C13 22.5523 12.5523 23 12 23Z"
        fill="currentColor"
      />
    </svg>
  );
}
const AlignVerticalCenter01Icon = forwardRef(AlignVerticalCenter01IconInner);
export { AlignVerticalCenter01Icon };
