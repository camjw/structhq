import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CreditCardShieldIconInner(
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
        d="M20.1496 13.1998L22.3365 13.9812C22.7344 14.1234 23 14.5003 23 14.9229V17.4252C23 18.9643 21.9436 20.1151 21.1405 20.7849C20.7141 21.1405 20.2929 21.4161 19.9806 21.6021C19.8233 21.6958 19.6909 21.7685 19.5956 21.8188C19.5418 21.8472 19.4875 21.8746 19.4329 21.9015L19.4314 21.9021L19.4303 21.9027C19.1581 22.0324 18.8414 22.0322 18.5692 21.9024C18.5139 21.8753 18.4589 21.8475 18.4044 21.8188C18.3091 21.7685 18.1767 21.6958 18.0194 21.6021C17.7071 21.4161 17.2859 21.1405 16.8595 20.7849C16.0565 20.1151 15 18.9643 15 17.4252V14.9229C15 14.5004 15.2655 14.1235 15.6633 13.9813L17.8492 13.1998C18.5924 12.9337 19.4064 12.9337 20.1496 13.1998Z"
        fill="currentColor"
      />
      <path
        d="M18.8385 3L5.16146 3C4.63436 2.99998 4.17953 2.99997 3.80498 3.03057C3.40963 3.06287 3.01641 3.13419 2.63803 3.32698C2.07355 3.6146 1.6146 4.07355 1.32698 4.63803C1.13419 5.01641 1.06287 5.40963 1.03057 5.80498C0.999972 6.17952 0.999985 6.63428 1 7.16138C1 7.62452 1.37545 8 1.83859 8H22.1614C22.6246 8 23 7.62456 23 7.16144C23 6.6343 23 6.17954 22.9694 5.80498C22.9371 5.40963 22.8658 5.01641 22.673 4.63803C22.3854 4.07355 21.9265 3.61461 21.362 3.32699C20.9836 3.13419 20.5904 3.06288 20.195 3.03057C19.8205 2.99997 19.3657 2.99999 18.8385 3Z"
        fill="currentColor"
      />
      <path
        d="M1.54601 10.109C1.75992 10 2.03995 10 2.6 10H21.4C21.9601 10 22.2401 10 22.454 10.109C22.6422 10.2049 22.7951 10.3578 22.891 10.546C23 10.7599 23 11.04 23 11.6C23 11.8408 22.7615 12.0088 22.5347 11.9278L20.8226 11.316C19.6442 10.8945 18.3537 10.8947 17.1751 11.3164L14.99 12.0976C13.7966 12.5243 13 13.655 13 14.9225V17.4249C13 17.6015 13.0085 17.774 13.0247 17.9423C13.0654 18.367 13.0858 18.5793 13.0356 18.6967C12.9861 18.8124 12.9261 18.8784 12.8156 18.9388C12.7036 19 12.5206 19 12.1548 19L5.16129 19C4.63429 19 4.17947 19 3.80498 18.9694C3.40963 18.9371 3.01641 18.8658 2.63803 18.673C2.07355 18.3854 1.6146 17.9265 1.32698 17.362C1.13419 16.9836 1.06287 16.5904 1.03057 16.195C0.999972 15.8205 0.999985 15.3657 1 14.8386V11.6C1 11.0399 1 10.7599 1.10899 10.546C1.20487 10.3578 1.35785 10.2049 1.54601 10.109Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CreditCardShieldIcon = forwardRef(CreditCardShieldIconInner);
export { CreditCardShieldIcon };