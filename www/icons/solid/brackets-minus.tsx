import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BracketsMinusIconInner(
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
        d="M17.5708 4C17.5708 3.44772 18.0185 3 18.5708 3C20.3861 3 21.8568 4.47071 21.8568 6.286V10.4428L22.7069 11.2929C23.0974 11.6834 23.0974 12.3166 22.7069 12.7071L21.8568 13.5572V17.714C21.8568 19.5296 20.3848 21 18.5708 21C18.0185 21 17.5708 20.5523 17.5708 20C17.5708 19.4477 18.0185 19 18.5708 19C19.2808 19 19.8568 18.4244 19.8568 17.714V13.143C19.8568 12.8778 19.9622 12.6234 20.1497 12.4359L20.5856 12L20.1497 11.5641C19.9622 11.3766 19.8568 11.1222 19.8568 10.857V6.286C19.8568 5.57529 19.2815 5 18.5708 5C18.0185 5 17.5708 4.55228 17.5708 4Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.143 6.286C2.143 4.47071 3.61372 3 5.429 3C5.98128 3 6.429 3.44772 6.429 4C6.429 4.55228 5.98128 5 5.429 5C4.71828 5 4.143 5.57528 4.143 6.286V10.857C4.143 11.1222 4.03764 11.3766 3.85011 11.5641L3.41421 12L3.85011 12.4359C4.03764 12.6234 4.143 12.8778 4.143 13.143V17.714C4.143 18.4247 4.71828 19 5.429 19C5.98128 19 6.429 19.4477 6.429 20C6.429 20.5523 5.98128 21 5.429 21C3.61372 21 2.143 19.5293 2.143 17.714V13.5572L1.29289 12.7071C1.10536 12.5196 1 12.2652 1 12C1 11.7348 1.10536 11.4804 1.29289 11.2929L2.143 10.4428V6.286Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BracketsMinusIcon = forwardRef(BracketsMinusIconInner);
export { BracketsMinusIcon };
