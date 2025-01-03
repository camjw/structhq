import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Download04IconInner(
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
        d="M7.62116 1.90608C8.38354 1.57489 8.76473 1.4093 9.36666 1.52155C9.80604 1.6035 10.407 1.99764 10.6572 2.368C11 2.87535 11 3.43229 11 4.54617V13.5858L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929C16.3166 10.9024 15.6834 10.9024 15.2929 11.2929L13 13.5858L13.0001 4.65543C13.0011 3.39442 13.0019 2.39885 12.266 1.35804C12.1783 1.23405 12.0742 1.1142 11.9598 1.00007C11.9732 1.00002 11.9866 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 7.48111 3.72487 3.59865 7.62116 1.90608Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Download04Icon = forwardRef(Download04IconInner);
export { Download04Icon };
