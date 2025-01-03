import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function RefreshCw04IconInner(
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
        d="M11.7071 0.892869C11.3166 0.502344 10.6834 0.502344 10.2929 0.892869C9.90237 1.28339 9.90237 1.91656 10.2929 2.30708L10.5898 2.60395C6.01185 3.28521 2.5 7.23249 2.5 12C2.5 15.1587 4.04258 17.9572 6.41115 19.6828C6.85752 20.0081 7.48302 19.9098 7.80824 19.4635C8.13345 19.0171 8.03523 18.3916 7.58885 18.0664C5.71475 16.701 4.5 14.4924 4.5 12C4.5 8.3558 7.09907 5.31865 10.5447 4.6411L10.2929 4.89287C9.90237 5.28339 9.90237 5.91656 10.2929 6.30708C10.6834 6.69761 11.3166 6.69761 11.7071 6.30708L13.7071 4.30708C14.0976 3.91656 14.0976 3.28339 13.7071 2.89287L11.7071 0.892869Z"
        fill="currentColor"
      />
      <path
        d="M17.5889 4.3172C17.1425 3.99198 16.517 4.0902 16.1918 4.53658C15.8665 4.98296 15.9648 5.60846 16.4111 5.93367C18.2853 7.29908 19.5 9.50765 19.5 12C19.5 15.6443 16.9009 18.6814 13.4553 19.3589L13.7071 19.1071C14.0976 18.7166 14.0976 18.0834 13.7071 17.6929C13.3166 17.3024 12.6834 17.3024 12.2929 17.6929L10.2929 19.6929C9.90237 20.0834 9.90237 20.7166 10.2929 21.1071L12.2929 23.1071C12.6834 23.4977 13.3166 23.4977 13.7071 23.1071C14.0976 22.7166 14.0976 22.0834 13.7071 21.6929L13.4103 21.3961C17.9882 20.7148 21.5 16.7675 21.5 12C21.5 8.84135 19.9574 6.04285 17.5889 4.3172Z"
        fill="currentColor"
      />
    </svg>
  );
}
const RefreshCw04Icon = forwardRef(RefreshCw04IconInner);
export { RefreshCw04Icon };
