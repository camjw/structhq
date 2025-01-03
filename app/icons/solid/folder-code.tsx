import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function FolderCodeIconInner(
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
        d="M1 6.16167V16.2416C0.999989 17.0465 0.99998 17.7109 1.0442 18.2521C1.09012 18.8142 1.18869 19.3309 1.43598 19.8162C1.81947 20.5689 2.43139 21.1808 3.18404 21.5643C3.66938 21.8116 4.18608 21.9101 4.74818 21.9561C5.28937 22.0003 5.95374 22.0003 6.7587 22.0002H17.2413C18.0463 22.0003 18.7106 22.0003 19.2518 21.9561C19.8139 21.9101 20.3306 21.8116 20.816 21.5643C21.5686 21.1808 22.1805 20.5689 22.564 19.8162C22.8113 19.3309 22.9099 18.8142 22.9558 18.2521C23 17.7109 23 17.0465 23 16.2416V11.7589C23 10.954 23 10.2896 22.9558 9.74842C22.9099 9.18632 22.8113 8.66962 22.564 8.18428C22.1805 7.43163 21.5686 6.81971 20.816 6.43622C20.3306 6.18893 19.8139 6.09036 19.2518 6.04444C18.7106 6.00022 18.0463 6.00023 17.2413 6.00024H13.6181L12.7234 4.21064C12.4586 3.67939 12.2258 3.21221 11.8631 2.85696C11.5454 2.54581 11.1625 2.30918 10.7421 2.16418C10.2622 1.99863 9.74022 1.99932 9.14666 2.00011L5.16146 2.00021C4.63431 2.0002 4.17955 2.00018 3.80498 2.03078C3.40963 2.06309 3.01641 2.1344 2.63803 2.3272C2.07355 2.61482 1.6146 3.07376 1.32698 3.63824C1.13419 4.01662 1.06287 4.40984 1.03057 4.80519C0.999971 5.17974 0.999985 5.63456 1 6.16167ZM10.7071 12.2074C11.0976 11.8168 11.0976 11.1837 10.7071 10.7931C10.3166 10.4026 9.68342 10.4026 9.29289 10.7931L6.79289 13.2931C6.40237 13.6837 6.40237 14.3168 6.79289 14.7074L9.29289 17.2074C9.68342 17.5979 10.3166 17.5979 10.7071 17.2074C11.0976 16.8168 11.0976 16.1837 10.7071 15.7931L8.91421 14.0002L10.7071 12.2074ZM14.7071 10.7931C14.3166 10.4026 13.6834 10.4026 13.2929 10.7931C12.9024 11.1837 12.9024 11.8168 13.2929 12.2074L15.0858 14.0002L13.2929 15.7931C12.9024 16.1837 12.9024 16.8168 13.2929 17.2074C13.6834 17.5979 14.3166 17.5979 14.7071 17.2074L17.2071 14.7074C17.5976 14.3168 17.5976 13.6837 17.2071 13.2931L14.7071 10.7931Z"
        fill="currentColor"
      />
    </svg>
  );
}
const FolderCodeIcon = forwardRef(FolderCodeIconInner);
export { FolderCodeIcon };
