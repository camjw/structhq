import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function AlignHorizontalCentre01IconInner(
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
        d="M12 2C12.5523 2 13 2.44772 13 3L13 21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21L11 3C11 2.44772 11.4477 2 12 2Z"
        fill="currentColor"
      />
      <path
        d="M17.9142 11L20.2071 8.70711C20.5976 8.31658 20.5976 7.68342 20.2071 7.29289C19.8166 6.90237 19.1834 6.90237 18.7929 7.29289L14.7929 11.2929C14.4024 11.6834 14.4024 12.3166 14.7929 12.7071L18.7929 16.7071C19.1834 17.0976 19.8166 17.0976 20.2071 16.7071C20.5976 16.3166 20.5976 15.6834 20.2071 15.2929L17.9142 13L22 13C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11L17.9142 11Z"
        fill="currentColor"
      />
      <path
        d="M1 12C1 11.4477 1.44772 11 2 11H6.08579L3.79289 8.70711C3.40237 8.31658 3.40237 7.68342 3.79289 7.29289C4.18342 6.90237 4.81658 6.90237 5.20711 7.29289L9.20711 11.2929C9.59763 11.6834 9.59763 12.3166 9.20711 12.7071L5.20711 16.7071C4.81658 17.0976 4.18342 17.0976 3.79289 16.7071C3.40237 16.3166 3.40237 15.6834 3.79289 15.2929L6.08579 13H2C1.44772 13 1 12.5523 1 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const AlignHorizontalCentre01Icon = forwardRef(
  AlignHorizontalCentre01IconInner,
);
export { AlignHorizontalCentre01Icon };
