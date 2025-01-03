import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ScissorsCut02IconInner(
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
        d="M3.95717 9.43974C2.78523 8.74223 2 7.46282 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6C10 7.40381 9.27684 8.63872 8.18273 9.35252L11.179 10.8779L20.5463 6.10905C21.0385 5.85849 21.6406 6.05435 21.8911 6.54653C22.1417 7.03871 21.9458 7.64081 21.4537 7.89138L13.3831 12L21.4537 16.1087C21.9459 16.3592 22.1418 16.9613 21.8912 17.4535C21.6406 17.9457 21.0385 18.1415 20.5463 17.891L11.179 13.1221L8.18273 14.6475C9.27684 15.3613 10 16.5962 10 18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18C2 16.5372 2.78519 15.2578 3.9571 14.5603C3.98383 14.5431 4.01161 14.527 4.04043 14.5121C4.1371 14.4576 4.23626 14.4071 4.33769 14.3607L8.97477 12L4.3376 9.63926C4.23623 9.59288 4.13713 9.54239 4.04052 9.488C4.0117 9.47309 3.98391 9.45697 3.95717 9.43974ZM4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6C8 7.10457 7.10457 8 6 8C5.71302 8 5.44016 7.93956 5.19345 7.83071L4.99699 7.73069C4.40085 7.38446 4 6.73904 4 6ZM4.99693 16.2693C4.40082 16.6156 4 17.261 4 18C4 19.1046 4.89543 20 6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C5.71304 16 5.4402 16.0604 5.19351 16.1693L4.99693 16.2693Z"
        fill="currentColor"
      />
      <path
        d="M16.5 12C16.5 11.4477 16.9477 11 17.5 11H17.51C18.0623 11 18.51 11.4477 18.51 12C18.51 12.5523 18.0623 13 17.51 13H17.5C16.9477 13 16.5 12.5523 16.5 12Z"
        fill="currentColor"
      />
      <path
        d="M22 11C21.4477 11 21 11.4477 21 12C21 12.5523 21.4477 13 22 13H22.01C22.5623 13 23.01 12.5523 23.01 12C23.01 11.4477 22.5623 11 22.01 11H22Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ScissorsCut02Icon = forwardRef(ScissorsCut02IconInner);
export { ScissorsCut02Icon };
