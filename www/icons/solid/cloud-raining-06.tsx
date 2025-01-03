import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CloudRaining06IconInner(
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
        d="M12 1C9.68905 1 7.66126 2.20617 6.50941 4.01977C3.42516 4.26936 1 6.85147 1 10C1 13.3137 3.68629 16 7 16H17.5C20.5376 16 23 13.5376 23 10.5C23 7.63481 20.8091 5.28134 18.0112 5.02345C17.0375 2.66263 14.714 1 12 1Z"
        fill="currentColor"
      />
      <path
        d="M4 18C4 17.4477 4.44772 17 5 17H7C7.55228 17 8 17.4477 8 18C8 18.5523 7.55228 19 7 19H5C4.44772 19 4 18.5523 4 18Z"
        fill="currentColor"
      />
      <path
        d="M10 17C9.44771 17 9 17.4477 9 18C9 18.5523 9.44771 19 10 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H10Z"
        fill="currentColor"
      />
      <path
        d="M6 20C5.44772 20 5 20.4477 5 21C5 21.5523 5.44772 22 6 22H13C13.5523 22 14 21.5523 14 21C14 20.4477 13.5523 20 13 20H6Z"
        fill="currentColor"
      />
      <path
        d="M16 20C15.4477 20 15 20.4477 15 21C15 21.5523 15.4477 22 16 22H18C18.5523 22 19 21.5523 19 21C19 20.4477 18.5523 20 18 20H16Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CloudRaining06Icon = forwardRef(CloudRaining06IconInner);
export { CloudRaining06Icon };
