import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CloudSun03IconInner(
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
        d="M10.5 3C6.91015 3 4 5.91015 4 9.5C4 9.94651 4.04487 10.3815 4.13004 10.8011C4.23991 11.3423 3.89021 11.8701 3.34896 11.98C2.80771 12.0899 2.27988 11.7402 2.17001 11.1989C2.05842 10.6492 2 10.0809 2 9.5C2 4.80558 5.80558 1 10.5 1C14.811 1 18.3709 4.20834 18.9252 8.36793C18.9981 8.91538 18.6134 9.4183 18.066 9.49124C17.5185 9.56418 17.0156 9.17952 16.9427 8.63207C16.5191 5.45295 13.7952 3 10.5 3Z"
        fill="currentColor"
      />
      <path
        d="M12 9C9.20208 9 6.78961 10.641 5.66881 13.0108C3.06179 13.1813 1 15.3499 1 18C1 20.7614 3.23858 23 6 23H17.5C20.5376 23 23 20.5376 23 17.5C23 14.5459 20.671 12.1357 17.749 12.0055C16.4857 10.1906 14.3824 9 12 9Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CloudSun03Icon = forwardRef(CloudSun03IconInner);
export { CloudSun03Icon };
