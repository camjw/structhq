import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BatteryCharging01IconInner(
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
        d="M14.2413 5H6.7587C5.95374 4.99999 5.28937 4.99998 4.74818 5.04419C4.18608 5.09012 3.66937 5.18868 3.18404 5.43598C2.43139 5.81947 1.81947 6.43139 1.43598 7.18404C1.18868 7.66937 1.09012 8.18608 1.04419 8.74818C0.999978 9.28937 0.999988 9.95372 1 10.7587V13.2413C0.999988 14.0463 0.999978 14.7106 1.04419 15.2518C1.09012 15.8139 1.18868 16.3306 1.43598 16.816C1.81947 17.5686 2.43139 18.1805 3.18404 18.564C3.66937 18.8113 4.18608 18.9099 4.74818 18.9558C5.28938 19 5.95374 19 6.75873 19H14.2413C15.0463 19 15.7106 19 16.2518 18.9558C16.8139 18.9099 17.3306 18.8113 17.816 18.564C18.5686 18.1805 19.1805 17.5686 19.564 16.816C19.8113 16.3306 19.9099 15.8139 19.9558 15.2518C20 14.7106 20 14.0463 20 13.2413V10.7587C20 9.95372 20 9.28936 19.9558 8.74818C19.9099 8.18608 19.8113 7.66937 19.564 7.18404C19.1805 6.43139 18.5686 5.81947 17.816 5.43598C17.3306 5.18868 16.8139 5.09012 16.2518 5.04419C15.7106 4.99998 15.0463 4.99999 14.2413 5ZM11.0408 9.48558C11.309 9.0028 11.1351 8.39399 10.6523 8.12578C10.1695 7.85757 9.56072 8.03151 9.29251 8.5143L7.62584 11.5143C7.45377 11.824 7.45844 12.2017 7.63813 12.5071C7.81781 12.8124 8.14568 12.9999 8.5 12.9999H10.8005L9.95918 14.5143C9.69096 14.9971 9.86491 15.6059 10.3477 15.8741C10.8305 16.1423 11.4393 15.9684 11.7075 15.4856L13.3742 12.4856C13.5462 12.1759 13.5416 11.7982 13.3619 11.4928C13.1822 11.1874 12.8543 10.9999 12.5 10.9999H10.1995L11.0408 9.48558Z"
        fill="currentColor"
      />
      <path
        d="M23 11C23 10.4477 22.5523 10 22 10C21.4477 10 21 10.4477 21 11V13C21 13.5523 21.4477 14 22 14C22.5523 14 23 13.5523 23 13V11Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BatteryCharging01Icon = forwardRef(BatteryCharging01IconInner);
export { BatteryCharging01Icon };
