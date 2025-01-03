import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CloudOffIconInner(
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
        d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L5.99188 7.40609C5.67054 7.94234 5.41873 8.52549 5.24923 9.1429C2.8139 9.70948 1 11.8924 1 14.4999C1 17.5374 3.46243 19.9999 6.5 19.9999H17.5C17.8372 19.9999 18.1681 19.9694 18.4899 19.9109L18.4956 19.9098L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L3.70711 2.29289Z"
        fill="currentColor"
      />
      <path
        d="M21.9607 17.7181C22.6146 16.8133 23 15.7017 23 14.5C23 11.8925 21.1861 9.70961 18.7508 9.14303C17.9368 6.17816 15.2236 4 12 4C10.9039 4 9.86686 4.25182 8.9434 4.70076L21.9607 17.7181Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CloudOffIcon = forwardRef(CloudOffIconInner);
export { CloudOffIcon };
