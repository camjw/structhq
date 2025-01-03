import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CreditCardXIconInner(
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
        d="M17.2071 15.2929C16.8166 14.9024 16.1834 14.9024 15.7929 15.2929C15.4024 15.6834 15.4024 16.3166 15.7929 16.7071L17.5858 18.5L15.7929 20.2929C15.4024 20.6834 15.4024 21.3166 15.7929 21.7071C16.1834 22.0976 16.8166 22.0976 17.2071 21.7071L19 19.9142L20.7929 21.7071C21.1834 22.0976 21.8166 22.0976 22.2071 21.7071C22.5976 21.3166 22.5976 20.6834 22.2071 20.2929L20.4142 18.5L22.2071 16.7071C22.5976 16.3166 22.5976 15.6834 22.2071 15.2929C21.8166 14.9024 21.1834 14.9024 20.7929 15.2929L19 17.0858L17.2071 15.2929Z"
        fill="currentColor"
      />
      <path
        d="M5.16146 4L18.8385 4C19.3657 3.99999 19.8205 3.99997 20.195 4.03057C20.5904 4.06288 20.9836 4.13419 21.362 4.32699C21.9265 4.61461 22.3854 5.07355 22.673 5.63803C22.8658 6.01641 22.9371 6.40963 22.9694 6.80498C23 7.17954 23 7.6343 23 8.16144C23 8.62456 22.6246 9 22.1614 9H1.83859C1.37545 9 1 8.62455 1 8.16141C0.999985 7.63431 0.999972 7.17952 1.03057 6.80498C1.06287 6.40963 1.13419 6.01641 1.32698 5.63803C1.6146 5.07355 2.07355 4.6146 2.63803 4.32698C3.01641 4.13419 3.40963 4.06287 3.80498 4.03057C4.17953 3.99997 4.63435 3.99998 5.16146 4Z"
        fill="currentColor"
      />
      <path
        d="M2.6 11C2.03995 11 1.75992 11 1.54601 11.109C1.35785 11.2049 1.20487 11.3578 1.10899 11.546C1 11.7599 1 12.0399 1 12.6V15.8385C0.999985 16.3656 0.999972 16.8205 1.03057 17.195C1.06287 17.5904 1.13419 17.9836 1.32698 18.362C1.6146 18.9265 2.07355 19.3854 2.63803 19.673C3.01641 19.8658 3.40963 19.9371 3.80498 19.9694C4.17949 20 4.63416 20 5.1612 20L13.1047 20C13.302 20 13.4006 20 13.4755 19.9758C13.5541 19.9504 13.5934 19.9278 13.655 19.8729C13.7137 19.8204 13.7787 19.7093 13.9086 19.4871C14.0356 19.2698 14.1923 19.065 14.3787 18.8787L14.7574 18.5L14.3787 18.1213C13.2071 16.9497 13.2071 15.0503 14.3787 13.8787C15.5503 12.7071 17.4497 12.7071 18.6213 13.8787L19 14.2574L19.3787 13.8787C20.1598 13.0976 21.2644 12.8373 22.2611 13.0977C22.6055 13.1876 23 12.9559 23 12.6C23 12.04 23 11.7599 22.891 11.546C22.7951 11.3578 22.6422 11.2049 22.454 11.109C22.2401 11 21.9601 11 21.4 11H2.6Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CreditCardXIcon = forwardRef(CreditCardXIconInner);
export { CreditCardXIcon };