import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BarChartSquareUpIconInner(
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
        d="M2.25453 9.5C2.11396 9.5 2 9.61396 2 9.75453V17.8385C1.99998 18.3657 1.99997 18.8205 2.03057 19.195C2.06287 19.5904 2.13419 19.9836 2.32698 20.362C2.6146 20.9265 3.07354 21.3854 3.63803 21.673C4.01641 21.8658 4.40963 21.9371 4.80497 21.9694C5.17954 22 5.6343 22 6.16144 22H17.8386C18.3657 22 18.8205 22 19.195 21.9694C19.5904 21.9371 19.9836 21.8658 20.362 21.673C20.9265 21.3854 21.3854 20.9265 21.673 20.362C21.8658 19.9836 21.9371 19.5904 21.9694 19.195C22 18.8205 22 18.3657 22 17.8386V6.16144C22 5.6343 22 5.17954 21.9694 4.80497C21.9371 4.40963 21.8658 4.01641 21.673 3.63803C21.3854 3.07354 20.9265 2.6146 20.362 2.32698C19.9836 2.13419 19.5904 2.06287 19.195 2.03057C18.8205 1.99997 18.3657 1.99998 17.8386 2H10.4853C10.0267 2 9.79707 2.55442 10.1213 2.87868C11.2929 4.05025 11.2929 5.94975 10.1213 7.12132C9.53553 7.70711 8.76777 8 8 8C8 9.65685 6.65685 11 5 11C3.9421 11 3.0121 10.4524 2.47795 9.62525C2.42866 9.54892 2.34539 9.5 2.25453 9.5ZM18 7C18 6.44772 17.5523 6 17 6C16.4477 6 16 6.44772 16 7V17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17V7ZM13 10C13.5523 10 14 10.4477 14 11V17C14 17.5523 13.5523 18 13 18C12.4477 18 12 17.5523 12 17V11C12 10.4477 12.4477 10 13 10ZM9 12C9.55229 12 10 12.4477 10 13V17C10 17.5523 9.55229 18 9 18C8.44772 18 8 17.5523 8 17V13C8 12.4477 8.44772 12 9 12Z"
        fill="currentColor"
      />
      <path
        d="M5.70711 1.29289C5.51957 1.10536 5.26522 1 5 1C4.73478 1 4.48043 1.10536 4.29289 1.29289L1.29289 4.29289C0.902369 4.68342 0.902369 5.31658 1.29289 5.70711C1.68342 6.09763 2.31658 6.09763 2.70711 5.70711L4 4.41421L4 8C4 8.55228 4.44772 9 5 9C5.55229 9 6 8.55228 6 8L6 4.41421L7.29289 5.70711C7.68342 6.09763 8.31658 6.09763 8.70711 5.70711C9.09763 5.31658 9.09763 4.68342 8.70711 4.29289L5.70711 1.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BarChartSquareUpIcon = forwardRef(BarChartSquareUpIconInner);
export { BarChartSquareUpIcon };
