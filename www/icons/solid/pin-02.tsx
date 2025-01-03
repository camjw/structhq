import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Pin02IconInner(
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
        d="M16.3838 2.41026C16.1281 2.1545 15.8905 1.91688 15.6783 1.73997C15.4562 1.55487 15.1582 1.34476 14.7683 1.26571C14.2517 1.16099 13.7147 1.26441 13.274 1.55348C12.9413 1.77171 12.7427 2.07745 12.6053 2.33178C12.4739 2.57484 12.3416 2.88371 12.1991 3.21614L11.1145 5.74692C11.0902 5.80374 11.0782 5.83143 11.0691 5.85143L11.0685 5.85279L11.0675 5.85387C11.0523 5.86976 11.031 5.89112 10.9873 5.93483L9.42641 7.49572C9.35812 7.56401 9.32438 7.59756 9.29906 7.62119L9.29725 7.62286L9.29486 7.62343C9.26115 7.6314 9.21453 7.64086 9.11982 7.6598L5.41296 8.40118C4.97327 8.48908 4.57788 8.56813 4.26752 8.66033C3.95692 8.7526 3.5557 8.90434 3.25226 9.24632C2.86413 9.68374 2.68689 10.2691 2.7672 10.8484C2.82998 11.3012 3.07965 11.65 3.2869 11.8991C3.49399 12.148 3.77911 12.4331 4.09619 12.7501L6.96249 15.6164L2.01274 20.5662C1.62222 20.9567 1.62222 21.5898 2.01274 21.9804C2.40327 22.3709 3.03643 22.3709 3.42696 21.9804L8.37671 17.0306L11.2431 19.897C11.5601 20.2141 11.8452 20.4992 12.0941 20.7063C12.3432 20.9136 12.692 21.1632 13.1448 21.226C13.7241 21.3063 14.3095 21.1291 14.7469 20.7409C15.0889 20.4375 15.2406 20.0363 15.3329 19.7257C15.4251 19.4153 15.5041 19.0199 15.592 18.5802L16.3334 14.8734C16.3523 14.7787 16.3618 14.7321 16.3698 14.6983L16.3703 14.6959L16.372 14.6941C16.3956 14.6688 16.4292 14.6351 16.4975 14.5668L18.0584 13.0059C18.1021 12.9622 18.1234 12.9409 18.1393 12.9257L18.1404 12.9247L18.1418 12.9241C18.1618 12.915 18.1895 12.903 18.2463 12.8787L20.7771 11.7941C21.1095 11.6516 21.4184 11.5193 21.6614 11.3879C21.9158 11.2505 22.2215 11.0519 22.4397 10.7192C22.7288 10.2785 22.8322 9.74147 22.7275 9.22493C22.6484 8.83496 22.4383 8.53699 22.2532 8.31494C22.0763 8.10272 21.8387 7.86514 21.5829 7.60943L16.3838 2.41026Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Pin02Icon = forwardRef(Pin02IconInner);
export { Pin02Icon };
