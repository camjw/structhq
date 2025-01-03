import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Wind03IconInner(
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
        d="M19 6.5C18.4078 6.5 17.8767 6.75615 17.5091 7.16691C17.1407 7.57844 16.5085 7.61346 16.097 7.24513C15.6855 6.87681 15.6505 6.24461 16.0188 5.83309C16.7498 5.01635 17.8153 4.5 19 4.5C21.2092 4.5 23 6.29086 23 8.5C23 10.7091 21.2092 12.5 19 12.5H13C12.4477 12.5 12 12.0523 12 11.5C12 10.9477 12.4477 10.5 13 10.5H19C20.1046 10.5 21 9.60457 21 8.5C21 7.39543 20.1046 6.5 19 6.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4C8.40776 4 7.87667 4.25615 7.50903 4.66691C7.1407 5.07844 6.50851 5.11346 6.09698 4.74513C5.68545 4.37681 5.65043 3.74461 6.01876 3.33309C6.74976 2.51635 7.81524 2 9 2C11.2091 2 13 3.79086 13 6C13 8.20914 11.2091 10 9 10H2C1.44772 10 1 9.55228 1 9C1 8.44772 1.44772 8 2 8H9C10.1046 8 11 7.10457 11 6C11 4.89543 10.1046 4 9 4Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 20C12.4078 20 11.8767 19.7438 11.509 19.3331C11.1407 18.9216 10.5085 18.8865 10.097 19.2549C9.68546 19.6232 9.65043 20.2554 10.0188 20.6669C10.7498 21.4836 11.8152 22 13 22C15.2091 22 17 20.2091 17 18C17 15.7909 15.2091 14 13 14H2C1.44772 14 1 14.4477 1 15C1 15.5523 1.44772 16 2 16H13C14.1046 16 15 16.8954 15 18C15 19.1046 14.1046 20 13 20Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Wind03Icon = forwardRef(Wind03IconInner);
export { Wind03Icon };
