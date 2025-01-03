import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Award05IconInner(
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
        d="M2.43695 4.83157L5.9334 11.0883C3.79482 14.0216 4.04925 18.1559 6.6967 20.8033C9.62564 23.7322 14.3744 23.7322 17.3033 20.8033C19.9508 18.1558 20.2052 14.0216 18.0666 11.0883L21.563 4.83157C21.7642 4.4717 21.9474 4.14387 22.071 3.86564C22.1971 3.58191 22.332 3.20234 22.2824 2.77132C22.2181 2.21209 21.9211 1.70586 21.4643 1.3769C21.1122 1.12336 20.7151 1.05596 20.4059 1.02761C20.1027 0.999799 19.7271 0.999828 19.3149 0.999859L16.968 0.999693C16.7111 0.99878 16.388 0.997632 16.0822 1.09613C15.8176 1.18131 15.5737 1.32069 15.3661 1.50538C15.126 1.71893 14.963 1.99788 14.8334 2.21968L12 7.02959L9.16663 2.21967C9.03703 1.99787 8.87404 1.71893 8.63391 1.50538C8.42625 1.32069 8.18237 1.18131 7.91783 1.09613C7.61195 0.997632 7.28888 0.99878 7.03199 0.999693L4.6851 0.999859C4.27284 0.999828 3.89728 0.999799 3.5941 1.02761C3.28491 1.05596 2.88776 1.12336 2.53569 1.3769C2.07889 1.70586 1.78188 2.21209 1.71755 2.77132C1.66797 3.20234 1.80288 3.58191 1.92895 3.86564C2.05258 4.14387 2.23581 4.4717 2.43695 4.83157ZM5.1017 3.00171C4.65473 3.00115 4.43124 3.00087 4.30036 3.09468C4.18616 3.17653 4.11167 3.30266 4.09513 3.44218C4.07616 3.6021 4.18431 3.79767 4.4006 4.18883L7.38536 9.58673C8.28054 8.88634 9.29816 8.41782 10.3571 8.18116L7.53399 3.39731C7.44948 3.25412 7.40723 3.18252 7.34866 3.13045C7.29684 3.08438 7.236 3.04959 7.17001 3.02829C7.09544 3.00422 7.0123 3.00412 6.84603 3.00391L5.1017 3.00171ZM16.6146 9.58673C15.7194 8.88634 14.7018 8.41782 13.6428 8.18116L16.466 3.39731C16.5505 3.25412 16.5928 3.18252 16.6513 3.13045C16.7031 3.08438 16.764 3.04959 16.83 3.02829C16.9045 3.00422 16.9877 3.00412 17.154 3.00391L18.8983 3.00171C19.3453 3.00115 19.5687 3.00087 19.6996 3.09468C19.8138 3.17653 19.8883 3.30266 19.9049 3.44218C19.9238 3.6021 19.8157 3.79767 19.5994 4.18883L16.6146 9.58673ZM12.472 12.1183C12.7971 12.2923 13.0001 12.6312 13.0001 13V17H13.25C13.8023 17 14.25 17.4477 14.25 18C14.25 18.5523 13.8023 19 13.25 19H10.75C10.1977 19 9.75 18.5523 9.75 18C9.75 17.4477 10.1977 17 10.75 17H11.0001V14.8661C10.5471 15.1282 9.96241 14.9962 9.66806 14.5547C9.3617 14.0952 9.48588 13.4743 9.94541 13.168L11.4454 12.168C11.7523 11.9634 12.1468 11.9443 12.472 12.1183Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Award05Icon = forwardRef(Award05IconInner);
export { Award05Icon };