import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MarkerPin04IconInner(
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
        d="M5 8C5 4.13401 8.13401 1 12 1C15.866 1 19 4.13401 19 8C19 10.4418 17.6311 12.1882 16.2838 13.5915C15.9583 13.9306 15.6228 14.2604 15.3014 14.5766L15.2588 14.6184C14.9205 14.9512 14.5985 15.2688 14.2957 15.5879C13.686 16.2305 13.2034 16.8292 12.8944 17.4472C12.725 17.786 12.3788 18 12 18C11.6212 18 11.275 17.786 11.1056 17.4472C10.7966 16.8292 10.314 16.2305 9.70429 15.5879C9.40152 15.2688 9.07947 14.9512 8.74117 14.6184L8.69857 14.5765C8.37713 14.2604 8.04171 13.9306 7.71615 13.5915C6.36887 12.1882 5 10.4418 5 8ZM14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z"
        fill="currentColor"
      />
      <path
        d="M5.40361 15.2013C5.90892 14.9784 6.13784 14.3881 5.91493 13.8828C5.69202 13.3775 5.10169 13.1485 4.59639 13.3715C3.59349 13.8139 2.71916 14.369 2.08194 15.0374C1.43983 15.7109 1 16.5451 1 17.5C1 19.3813 2.64633 20.7514 4.51857 21.5939C6.48468 22.4787 9.13066 23 12 23C14.8693 23 17.5153 22.4787 19.4814 21.5939C21.3537 20.7514 23 19.3813 23 17.5C23 16.5451 22.5602 15.7109 21.9181 15.0374C21.2808 14.369 20.4065 13.8139 19.4036 13.3715C18.8983 13.1485 18.308 13.3775 18.0851 13.8828C17.8622 14.3881 18.0911 14.9784 18.5964 15.2013C19.4448 15.5756 20.0705 15.9979 20.4705 16.4174C20.8655 16.8318 21 17.1961 21 17.5C21 18.1041 20.4077 18.9839 18.6607 19.7701C17.0075 20.514 14.6535 21 12 21C9.34649 21 6.99248 20.514 5.3393 19.7701C3.59225 18.9839 3 18.1041 3 17.5C3 17.1961 3.13448 16.8318 3.52954 16.4174C3.92948 15.9979 4.55515 15.5756 5.40361 15.2013Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MarkerPin04Icon = forwardRef(MarkerPin04IconInner);
export { MarkerPin04Icon };
