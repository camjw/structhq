import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Cloud01IconInner(
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
        d="M12 4C8.7764 4 6.0632 6.17816 5.24923 9.14303C2.8139 9.70961 1 11.8925 1 14.5C1 17.5376 3.46243 20 6.5 20H17.5C20.5376 20 23 17.5376 23 14.5C23 11.8925 21.1861 9.70961 18.7508 9.14303C17.9368 6.17816 15.2236 4 12 4Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Cloud01Icon = forwardRef(Cloud01IconInner);
export { Cloud01Icon };
