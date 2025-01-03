import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Mail03IconInner(
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
        d="M2.02143 8.21618C1.80766 8.07366 1.70077 8.0024 1.61104 7.98197C1.37067 7.92722 1.12054 8.06108 1.03276 8.29145C0.999995 8.37745 0.999997 8.50453 1 8.75869V15.2413C0.999988 16.0463 0.999978 16.7106 1.04419 17.2518C1.09012 17.8139 1.18868 18.3306 1.43598 18.816C1.81947 19.5686 2.43139 20.1805 3.18404 20.564C3.66937 20.8113 4.18608 20.9099 4.74818 20.9558C5.28937 21 5.95372 21 6.75868 21H17.2413C18.0463 21 18.7106 21 19.2518 20.9558C19.8139 20.9099 20.3306 20.8113 20.816 20.564C21.5686 20.1805 22.1805 19.5686 22.564 18.816C22.8113 18.3306 22.9099 17.8139 22.9558 17.2518C23 16.7106 23 16.0463 23 15.2413V8.75868C23 8.50465 23 8.37764 22.9673 8.29168C22.8795 8.06123 22.6293 7.92732 22.3889 7.98213C22.2992 8.00257 22.1924 8.07379 21.9787 8.21623L17.3104 11.3285C17.0605 11.4953 16.8401 11.6425 16.5948 11.7495C16.379 11.8438 16.1528 11.9122 15.921 11.9536C15.6575 12.0005 15.3925 12.0003 15.0921 12.0001H8.90811C8.60776 12.0003 8.34272 12.0005 8.0792 11.9536C7.84738 11.9122 7.62123 11.8438 7.40542 11.7495C7.1601 11.6425 6.93968 11.4953 6.68989 11.3285L2.02143 8.21618Z"
        fill="currentColor"
      />
      <path
        d="M22.0949 5.73505C22.2868 5.60714 22.3827 5.54318 22.4415 5.43856C22.4871 5.35732 22.513 5.22821 22.5021 5.13567C22.4882 5.01648 22.436 4.93803 22.3315 4.78111C21.9533 4.21305 21.4207 3.74413 20.816 3.43598C20.3306 3.18868 19.8139 3.09012 19.2518 3.04419C18.7106 2.99998 18.0463 2.99999 17.2413 3H6.7587C5.95374 2.99999 5.28937 2.99998 4.74818 3.04419C4.18608 3.09012 3.66937 3.18868 3.18404 3.43598C2.5793 3.74411 2.04681 4.21299 1.66858 4.78099C1.56409 4.93791 1.51185 5.01637 1.49791 5.13555C1.48709 5.2281 1.51295 5.35721 1.55858 5.43845C1.61734 5.54308 1.71328 5.60704 1.90516 5.73496L7.74865 9.63062C8.07693 9.84947 8.14317 9.88934 8.20558 9.91659C8.27751 9.94799 8.3529 9.97081 8.43017 9.98459C8.49721 9.99654 8.57444 10.0001 8.96899 10.0001H15.0312C15.4258 10.0001 15.503 9.99654 15.57 9.98459C15.6473 9.97081 15.7227 9.94799 15.7946 9.91659C15.857 9.88934 15.9233 9.84947 16.2516 9.63062L22.0949 5.73505Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Mail03Icon = forwardRef(Mail03IconInner);
export { Mail03Icon };
