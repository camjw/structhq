import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MedicalCircleIconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM13.7788 6.773C13.8333 6.87996 13.8333 7.01997 13.8333 7.3V9.36667C13.8333 9.64669 13.8333 9.78671 13.8878 9.89366C13.9358 9.98774 14.0123 10.0642 14.1063 10.1122C14.2133 10.1667 14.3533 10.1667 14.6333 10.1667H16.7C16.98 10.1667 17.12 10.1667 17.227 10.2212C17.3211 10.2691 17.3976 10.3456 17.4455 10.4397C17.5 10.5466 17.5 10.6866 17.5 10.9667V13.0333C17.5 13.3134 17.5 13.4534 17.4455 13.5603C17.3976 13.6544 17.3211 13.7309 17.227 13.7788C17.12 13.8333 16.98 13.8333 16.7 13.8333H14.6333C14.3533 13.8333 14.2133 13.8333 14.1063 13.8878C14.0123 13.9358 13.9358 14.0123 13.8878 14.1063C13.8333 14.2133 13.8333 14.3533 13.8333 14.6333V16.7C13.8333 16.98 13.8333 17.12 13.7788 17.227C13.7309 17.3211 13.6544 17.3976 13.5603 17.4455C13.4534 17.5 13.3134 17.5 13.0333 17.5H10.9667C10.6866 17.5 10.5466 17.5 10.4397 17.4455C10.3456 17.3976 10.2691 17.3211 10.2212 17.227C10.1667 17.12 10.1667 16.98 10.1667 16.7V14.6333C10.1667 14.3533 10.1667 14.2133 10.1122 14.1063C10.0642 14.0123 9.98774 13.9358 9.89366 13.8878C9.78671 13.8333 9.64669 13.8333 9.36667 13.8333H7.3C7.01997 13.8333 6.87996 13.8333 6.773 13.7788C6.67892 13.7309 6.60243 13.6544 6.5545 13.5603C6.5 13.4534 6.5 13.3134 6.5 13.0333V10.9667C6.5 10.6866 6.5 10.5466 6.5545 10.4397C6.60243 10.3456 6.67892 10.2691 6.773 10.2212C6.87996 10.1667 7.01997 10.1667 7.3 10.1667H9.36667C9.64669 10.1667 9.78671 10.1667 9.89366 10.1122C9.98774 10.0642 10.0642 9.98774 10.1122 9.89366C10.1667 9.78671 10.1667 9.64669 10.1667 9.36667V7.3C10.1667 7.01997 10.1667 6.87996 10.2212 6.773C10.2691 6.67892 10.3456 6.60243 10.4397 6.5545C10.5466 6.5 10.6866 6.5 10.9667 6.5H13.0333C13.3134 6.5 13.4534 6.5 13.5603 6.5545C13.6544 6.60243 13.7309 6.67892 13.7788 6.773Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MedicalCircleIcon = forwardRef(MedicalCircleIconInner);
export { MedicalCircleIcon };
