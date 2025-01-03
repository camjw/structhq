import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function NavigationPointer02IconInner(
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
        d="M12.6656 1.90254C12.2438 1.69199 11.7475 1.69199 11.3257 1.90254C10.9524 2.08891 10.7595 2.41706 10.6676 2.58421C10.5674 2.76638 10.4648 3.00031 10.3619 3.23501L3.05067 19.9047C2.9356 20.167 2.82415 20.421 2.75284 20.6318C2.69123 20.8139 2.56632 21.2071 2.70005 21.63C2.84752 22.0964 3.21313 22.4616 3.67969 22.6085C4.10276 22.7417 4.49578 22.6164 4.67785 22.5545C4.88857 22.483 5.14247 22.3712 5.40464 22.2558L11.9957 19.3558L18.5868 22.2559C18.8489 22.3712 19.1028 22.483 19.3135 22.5545C19.4955 22.6164 19.8886 22.7417 20.3116 22.6085C20.7782 22.4616 21.1438 22.0964 21.2913 21.63C21.425 21.2071 21.3001 20.8139 21.2385 20.6318C21.1672 20.421 21.0557 20.167 20.9407 19.9047L13.6294 3.23506C13.5265 3.00034 13.4239 2.7664 13.3238 2.58421C13.2319 2.41706 13.0389 2.08891 12.6656 1.90254Z"
        fill="currentColor"
      />
    </svg>
  );
}
const NavigationPointer02Icon = forwardRef(NavigationPointer02IconInner);
export { NavigationPointer02Icon };
