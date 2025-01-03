import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function TerminalCircleIconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM7.70711 8.29289C7.31658 7.90237 6.68342 7.90237 6.29289 8.29289C5.90237 8.68342 5.90237 9.31658 6.29289 9.70711L8.58579 12L6.29289 14.2929C5.90237 14.6834 5.90237 15.3166 6.29289 15.7071C6.68342 16.0976 7.31658 16.0976 7.70711 15.7071L10.7071 12.7071C11.0976 12.3166 11.0976 11.6834 10.7071 11.2929L7.70711 8.29289ZM13 14C12.4477 14 12 14.4477 12 15C12 15.5523 12.4477 16 13 16H17C17.5523 16 18 15.5523 18 15C18 14.4477 17.5523 14 17 14H13Z"
        fill="currentColor"
      />
    </svg>
  );
}
const TerminalCircleIcon = forwardRef(TerminalCircleIconInner);
export { TerminalCircleIcon };
