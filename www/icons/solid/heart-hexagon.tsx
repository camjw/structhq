import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function HeartHexagonIconInner(
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
        d="M12.4029 1.18492C12.1371 1.13025 11.8629 1.13025 11.5971 1.18492C11.2898 1.24812 11.0152 1.40195 10.7968 1.52424L10.7373 1.55749L3.33733 5.6686L3.27419 5.70347C3.04306 5.83078 2.75244 5.99085 2.52927 6.23303C2.33632 6.44241 2.1903 6.69057 2.10097 6.96092C1.99765 7.27363 1.99886 7.60541 1.99982 7.86928L2 7.94141V16.0585L1.99982 16.1306C1.99886 16.3945 1.99765 16.7263 2.10097 17.039C2.1903 17.3094 2.33632 17.5575 2.52927 17.7669C2.75243 18.0091 3.04303 18.1691 3.27416 18.2964L3.33733 18.3313L10.7373 22.4424L10.7968 22.4757C11.0152 22.598 11.2898 22.7518 11.5971 22.815C11.8629 22.8697 12.1371 22.8697 12.4029 22.815C12.7102 22.7518 12.9848 22.598 13.2032 22.4757L13.2627 22.4424L20.6627 18.3313L20.7258 18.2965C20.9569 18.1691 21.2476 18.0091 21.4707 17.7669C21.6637 17.5575 21.8097 17.3094 21.899 17.039C22.0023 16.7263 22.0011 16.3945 22.0002 16.1306L22 16.0585V7.94141L22.0002 7.86928C22.0011 7.60541 22.0023 7.27363 21.899 6.96092C21.8097 6.69057 21.6637 6.44241 21.4707 6.23303C21.2476 5.99085 20.9569 5.83078 20.7258 5.70347L20.6627 5.6686L13.2627 1.55749L13.2032 1.52424C12.9848 1.40195 12.7102 1.24812 12.4029 1.18492ZM8.07735 8.65501C9.32987 7.58482 10.9969 7.8992 11.9966 9.06791C12.9963 7.8992 14.6417 7.59608 15.9158 8.65501C17.1899 9.71393 17.3447 11.5145 16.3611 12.7802C15.731 13.5909 14.1176 15.0942 13.0389 16.0704C12.6805 16.3947 12.5012 16.5569 12.2866 16.622C12.102 16.6779 11.8911 16.6779 11.7066 16.622C11.4919 16.5569 11.3127 16.3947 10.9542 16.0704C9.87558 15.0942 8.26211 13.5909 7.6321 12.7802C6.64848 11.5145 6.82482 9.72519 8.07735 8.65501Z"
        fill="currentColor"
      />
    </svg>
  );
}
const HeartHexagonIcon = forwardRef(HeartHexagonIconInner);
export { HeartHexagonIcon };
