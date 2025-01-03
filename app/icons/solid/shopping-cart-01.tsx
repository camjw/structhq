import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ShoppingCart01IconInner(
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
        d="M2 3.00001H3.1327L3.58101 6.13812L4.63722 13.9013C4.69987 14.3619 4.75433 14.7623 4.82517 15.0916C4.90043 15.4415 5.00806 15.7843 5.21399 16.1085C5.52401 16.5966 5.96847 16.9847 6.49387 17.2261C6.84288 17.3864 7.19707 17.4468 7.55391 17.4742C7.88978 17.5 8.29386 17.5 8.75873 17.5H17.3861C17.8282 17.5 18.2136 17.5 18.535 17.476C18.8772 17.4505 19.2167 17.3941 19.5539 17.2456C20.0633 17.0213 20.5003 16.6598 20.8159 16.2013C21.0249 15.8978 21.1438 15.5749 21.2329 15.2435C21.3166 14.9323 21.3887 14.5538 21.4714 14.1195L22.8064 7.11082C22.833 6.97125 22.8638 6.81024 22.8782 6.66825C22.8944 6.50852 22.9038 6.26571 22.8102 6.00051C22.6918 5.66532 22.4582 5.38307 22.1511 5.20406C21.9081 5.06244 21.6678 5.02624 21.5079 5.01229C21.3657 4.9999 21.2018 4.99995 21.0597 5L5.43872 5.00001L5.08515 2.52494C5.07045 2.42175 5.0525 2.29574 5.0279 2.18487C4.99894 2.05432 4.94695 1.87403 4.82874 1.68985C4.67333 1.44769 4.45155 1.25533 4.18984 1.13573C3.9908 1.04477 3.80497 1.01879 3.67163 1.00858C3.55839 0.999915 3.43112 0.999965 3.32688 1.00001L2 1.00001C1.44772 1.00001 1 1.44773 1 2.00001C1 2.5523 1.44772 3.00001 2 3.00001Z"
        fill="currentColor"
      />
      <path
        d="M7 21C7 19.8954 7.89543 19 9 19C10.1046 19 11 19.8954 11 21C11 22.1046 10.1046 23 9 23C7.89543 23 7 22.1046 7 21Z"
        fill="currentColor"
      />
      <path
        d="M15 21C15 19.8954 15.8954 19 17 19C18.1046 19 19 19.8954 19 21C19 22.1046 18.1046 23 17 23C15.8954 23 15 22.1046 15 21Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ShoppingCart01Icon = forwardRef(ShoppingCart01IconInner);
export { ShoppingCart01Icon };
