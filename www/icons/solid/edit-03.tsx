import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Edit03IconInner(
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
        d="M11 20C11 19.4477 11.4477 19 12 19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H12C11.4477 21 11 20.5523 11 20Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.793 2.79287C17.0119 1.57393 18.9882 1.57392 20.2072 2.79287C21.4261 4.01183 21.4261 5.98814 20.2072 7.20709L7.64443 19.7698C7.62463 19.7896 7.60502 19.8093 7.58556 19.8288C7.29811 20.1168 7.04467 20.3707 6.73914 20.5579C6.47072 20.7224 6.17809 20.8436 5.87198 20.9171C5.52353 21.0007 5.16478 21.0004 4.75788 21C4.73034 21 4.70258 21 4.67458 21H3.00004C2.44776 21 2.00004 20.5523 2.00004 20V18.3255C2.00004 18.2975 2.00001 18.2697 1.99999 18.2422C1.99961 17.8353 1.99928 17.4765 2.08293 17.1281C2.15642 16.822 2.27763 16.5293 2.44212 16.2609C2.62936 15.9554 2.88327 15.7019 3.17125 15.4145C3.19075 15.395 3.2104 15.3754 3.23019 15.3556L15.793 2.79287Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Edit03Icon = forwardRef(Edit03IconInner);
export { Edit03Icon };
