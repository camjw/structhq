import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CloudRaining02IconInner(
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
        d="M5.24923 6.14303C6.0632 3.17816 8.7764 1 12 1C15.2236 1 17.9368 3.17816 18.7508 6.14303C21.1861 6.70961 23 8.8925 23 11.5C23 14.5376 20.5376 17 17.5 17H17V20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20V17H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V17H9V20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20V17H6.5C3.46243 17 1 14.5376 1 11.5C1 8.8925 2.8139 6.70961 5.24923 6.14303Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CloudRaining02Icon = forwardRef(CloudRaining02IconInner);
export { CloudRaining02Icon };
