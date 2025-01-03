import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ChromeCastIconInner(
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
        d="M17.2413 2H6.7587C5.95374 1.99999 5.28937 1.99998 4.74818 2.04419C4.18608 2.09012 3.66937 2.18868 3.18404 2.43598C2.43139 2.81947 1.81947 3.43139 1.43598 4.18404C1.18868 4.66937 1.09012 5.18608 1.04419 5.74818C0.999978 6.28937 0.999988 6.95372 1 7.75869V16.2413C0.999988 17.0463 0.999978 17.7106 1.04419 18.2518C1.09012 18.8139 1.18868 19.3306 1.43598 19.816C1.81947 20.5686 2.43139 21.1805 3.18404 21.564C3.66937 21.8113 4.18608 21.9099 4.74818 21.9558C5.28937 22 5.95372 22 6.75868 22H17.2413C18.0463 22 18.7106 22 19.2518 21.9558C19.8139 21.9099 20.3306 21.8113 20.816 21.564C21.5686 21.1805 22.1805 20.5686 22.564 19.816C22.8113 19.3306 22.9099 18.8139 22.9558 18.2518C23 17.7106 23 17.0463 23 16.2413V7.75868C23 6.95372 23 6.28937 22.9558 5.74818C22.9099 5.18608 22.8113 4.66937 22.564 4.18404C22.1805 3.43139 21.5686 2.81947 20.816 2.43598C20.3306 2.18868 19.8139 2.09012 19.2518 2.04419C18.7106 1.99998 18.0463 1.99999 17.2413 2ZM4.00608 9.93935C4.06713 9.39045 4.56159 8.99497 5.11049 9.05602C7.36692 9.30698 9.4708 10.3183 11.0762 11.9237C12.6816 13.529 13.6929 15.6329 13.9438 17.8894C14.0049 18.4383 13.6094 18.9327 13.0605 18.9938C12.5116 19.0548 12.0171 18.6593 11.9561 18.1104C11.7553 16.3053 10.9463 14.6222 9.66196 13.3379C8.37766 12.0536 6.69456 11.2445 4.88941 11.0438C4.34051 10.9827 3.94503 10.4883 4.00608 9.93935ZM4.02012 13.9001C4.13049 13.3589 4.65864 13.0097 5.19978 13.1201C6.35285 13.3552 7.41131 13.9243 8.24344 14.7564C9.07557 15.5885 9.64462 16.647 9.87978 17.8C9.99015 18.3412 9.64093 18.8693 9.09978 18.9797C8.55864 19.0901 8.03049 18.7409 7.92012 18.1997C7.76335 17.431 7.38398 16.7254 6.82923 16.1706C6.27448 15.6159 5.56884 15.2365 4.80012 15.0797C4.25898 14.9693 3.90976 14.4412 4.02012 13.9001ZM4.99995 16.9999C4.44767 16.9999 3.99995 17.4476 3.99995 17.9999C3.99995 18.5522 4.44767 18.9999 4.99995 18.9999H5.00995C5.56224 18.9999 6.00995 18.5522 6.00995 17.9999C6.00995 17.4476 5.56224 16.9999 5.00995 16.9999H4.99995Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ChromeCastIcon = forwardRef(ChromeCastIconInner);
export { ChromeCastIcon };
