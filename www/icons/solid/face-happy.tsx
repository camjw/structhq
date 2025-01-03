import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function FaceHappyIconInner(
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
        d="M9.44663 15.6021C9.20881 15.4069 9.01973 15.2024 8.87506 15H15.1249C14.9803 15.2024 14.7912 15.4069 14.5534 15.6021C13.9106 16.1294 13.0074 16.5 12 16.5C10.9926 16.5 10.0894 16.1294 9.44663 15.6021Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9.00001 7.5C8.17158 7.5 7.50001 8.17157 7.50001 9C7.50001 9.82843 8.17158 10.5 9.00001 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9.00001 7.5ZM15 7.5C14.1716 7.5 13.5 8.17157 13.5 9C13.5 9.82843 14.1716 10.5 15 10.5C15.8284 10.5 16.5 9.82843 16.5 9C16.5 8.17157 15.8284 7.5 15 7.5ZM7.5 13C6.94772 13 6.5 13.4477 6.5 14C6.5 15.2245 7.21556 16.3585 8.17799 17.1482C9.16012 17.9541 10.5069 18.5 12 18.5C13.4931 18.5 14.8399 17.9541 15.822 17.1482C16.7844 16.3585 17.5 15.2245 17.5 14C17.5 13.4477 17.0523 13 16.5 13H7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const FaceHappyIcon = forwardRef(FaceHappyIconInner);
export { FaceHappyIcon };
