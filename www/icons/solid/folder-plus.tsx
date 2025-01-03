import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function FolderPlusIconInner(
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
        d="M1 6.16167V16.2413C0.999989 17.0463 0.99998 17.7106 1.0442 18.2518C1.09012 18.8139 1.18869 19.3306 1.43598 19.816C1.81947 20.5686 2.43139 21.1805 3.18404 21.564C3.66938 21.8113 4.18608 21.9099 4.74818 21.9558C5.28937 22 5.95374 22 6.7587 22H17.2413C18.0463 22 18.7106 22 19.2518 21.9558C19.8139 21.9099 20.3306 21.8113 20.816 21.564C21.5686 21.1805 22.1805 20.5686 22.564 19.816C22.8113 19.3306 22.9099 18.8139 22.9558 18.2518C23 17.7106 23 17.0463 23 16.2413V11.7587C23 10.9537 23 10.2894 22.9558 9.74817C22.9099 9.18608 22.8113 8.66937 22.564 8.18404C22.1805 7.43139 21.5686 6.81947 20.816 6.43598C20.3306 6.18868 19.8139 6.09012 19.2518 6.04419C18.7106 5.99998 18.0463 5.99999 17.2413 6H13.6179L12.7234 4.21064C12.4586 3.67939 12.2258 3.21221 11.8631 2.85696C11.5454 2.54581 11.1625 2.30918 10.7421 2.16418C10.2622 1.99863 9.74022 1.99932 9.14666 2.00011L5.16146 2.00021C4.63431 2.0002 4.17955 2.00018 3.80498 2.03078C3.40963 2.06309 3.01641 2.1344 2.63803 2.3272C2.07355 2.61482 1.6146 3.07376 1.32698 3.63824C1.13419 4.01662 1.06287 4.40984 1.03057 4.80519C0.999971 5.17974 0.999985 5.63456 1 6.16167ZM10.09 4.05487C9.96938 4.01326 9.81271 4.00022 9.02229 4.00022H5.2C4.62345 4.00022 4.25118 4.00099 3.96784 4.02414C3.69618 4.04634 3.59546 4.08402 3.54601 4.10921C3.35785 4.20508 3.20487 4.35806 3.109 4.54622C3.0838 4.59567 3.04613 4.69639 3.02393 4.96805C3.00358 5.21716 3.00052 5.53501 3.00008 6L11.3819 6L10.99 5.21635C10.6366 4.50938 10.5548 4.37508 10.4637 4.2858C10.3578 4.18208 10.2301 4.1032 10.09 4.05487ZM12 10C12.5523 10 13 10.4477 13 11V13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V15H9C8.44772 15 8 14.5523 8 14C8 13.4477 8.44772 13 9 13H11V11C11 10.4477 11.4477 10 12 10Z"
        fill="currentColor"
      />
    </svg>
  );
}
const FolderPlusIcon = forwardRef(FolderPlusIconInner);
export { FolderPlusIcon };
