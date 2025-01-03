import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function NavigationPointer01IconInner(
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
        d="M21.5951 1.4575C21.1993 1.32529 20.8308 1.4209 20.6476 1.47411C20.448 1.5321 20.2101 1.625 19.9714 1.7182L3.01429 8.3356C2.74746 8.43969 2.48901 8.54051 2.28953 8.63914C2.11718 8.72436 1.75084 8.91405 1.54635 9.30766C1.32085 9.74172 1.32115 10.2585 1.54717 10.6923C1.75212 11.0856 2.11868 11.2749 2.29113 11.3599C2.49072 11.4583 2.74924 11.5588 3.01619 11.6626L9.72748 14.2725L12.3374 20.9837C12.4412 21.2507 12.5417 21.5093 12.6401 21.7089C12.7251 21.8813 12.9144 22.2479 13.3077 22.4528C13.7415 22.6788 14.2583 22.6791 14.6923 22.4536C15.086 22.2492 15.2756 21.8828 15.3609 21.7105C15.4595 21.511 15.5603 21.2526 15.6644 20.9858L22.2818 4.02861C22.375 3.7899 22.4679 3.55198 22.5259 3.35235C22.5791 3.16916 22.6747 2.8007 22.5425 2.40493C22.3931 1.95779 22.0422 1.60688 21.5951 1.4575Z"
        fill="currentColor"
      />
    </svg>
  );
}
const NavigationPointer01Icon = forwardRef(NavigationPointer01IconInner);
export { NavigationPointer01Icon };
