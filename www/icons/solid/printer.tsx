import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function PrinterIconInner(
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
        d="M9.16146 1H14.8385C15.3657 0.999984 15.8205 0.999969 16.195 1.03057C16.5904 1.06287 16.9836 1.13419 17.362 1.32698C17.9265 1.6146 18.3854 2.07354 18.673 2.63803C18.8658 3.01641 18.9371 3.40963 18.9694 3.80497C19 4.17952 19 4.63424 19 5.16134V6.02713C19.0868 6.03193 19.1707 6.03756 19.2519 6.0442C19.814 6.09012 20.3307 6.18869 20.8161 6.43598C21.5687 6.81947 22.1806 7.43139 22.5641 8.18404C22.8114 8.66938 22.91 9.18608 22.9559 9.74818C23.0001 10.2894 23.0001 10.9537 23.0001 11.7587L23.0001 14.1376C23.0006 14.933 23.0009 15.5236 22.8638 16.0353C22.4939 17.4156 21.4157 18.4938 20.0354 18.8637C19.7279 18.9461 19.3918 18.9789 19 18.9918C18.9997 19.4543 18.997 19.8573 18.9694 20.195C18.9371 20.5904 18.8658 20.9836 18.673 21.362C18.3854 21.9265 17.9265 22.3854 17.362 22.673C16.9836 22.8658 16.5904 22.9371 16.195 22.9694C15.8205 23 15.3658 23 14.8387 23H9.16144C8.63436 23 8.17951 23 7.80497 22.9694C7.40963 22.9371 7.01641 22.8658 6.63803 22.673C6.07354 22.3854 5.6146 21.9265 5.32698 21.362C5.13419 20.9836 5.06287 20.5904 5.03057 20.195C5.00297 19.8573 5.00028 19.4543 5.00002 18.9918C4.60824 18.9788 4.27227 18.9461 3.96482 18.8637C2.58445 18.4938 1.50626 17.4156 1.13639 16.0353C0.999297 15.5236 0.999617 14.933 1.00005 14.1376L1.0001 11.7587C1.00008 10.9537 1.00007 10.2894 1.04429 9.74818C1.09022 9.18608 1.18878 8.66938 1.43607 8.18404C1.81956 7.43139 2.43149 6.81947 3.18413 6.43598C3.66947 6.18869 4.18617 6.09012 4.74827 6.0442C4.82939 6.03757 4.91328 6.03193 5 6.02714L5 5.16146C4.99998 4.63431 4.99997 4.17954 5.03057 3.80497C5.06287 3.40963 5.13419 3.01641 5.32698 2.63803C5.6146 2.07354 6.07354 1.6146 6.63803 1.32698C7.01641 1.13419 7.40963 1.06287 7.80497 1.03057C8.17954 0.999969 8.63433 0.999984 9.16146 1ZM7 6H17V5.2C17 4.62345 16.9992 4.25118 16.9761 3.96784C16.9539 3.69618 16.9162 3.59546 16.891 3.54601C16.7951 3.35785 16.6422 3.20487 16.454 3.109C16.4045 3.0838 16.3038 3.04613 16.0322 3.02393C15.7488 3.00078 15.3766 3 14.8 3H9.2C8.62345 3 8.25117 3.00078 7.96784 3.02393C7.69617 3.04613 7.59546 3.0838 7.54601 3.109C7.35785 3.20487 7.20487 3.35785 7.109 3.54601C7.0838 3.59546 7.04612 3.69618 7.02393 3.96784C7.00078 4.25118 7 4.62345 7 5.2V6ZM7 18.8C7 19.3766 7.00078 19.7488 7.02393 20.0322C7.04612 20.3038 7.0838 20.4045 7.109 20.454C7.20487 20.6422 7.35785 20.7951 7.54601 20.891C7.59546 20.9162 7.69617 20.9539 7.96784 20.9761C8.25117 20.9992 8.62345 21 9.2 21H14.8C15.3766 21 15.7488 20.9992 16.0322 20.9761C16.3038 20.9539 16.4045 20.9162 16.454 20.891C16.6422 20.7951 16.7951 20.6422 16.891 20.454C16.9162 20.4045 16.9539 20.3038 16.9761 20.0322C16.9992 19.7488 17 19.3766 17 18.8V17.2C17 16.6234 16.9992 16.2512 16.9761 15.9678C16.9539 15.6962 16.9162 15.5955 16.891 15.546C16.7951 15.3579 16.6422 15.2049 16.454 15.109C16.4045 15.0838 16.3038 15.0461 16.0322 15.0239C15.9967 15.021 15.9599 15.0185 15.9215 15.0163C15.6526 15.0006 15.3045 15 14.8001 15C14.8001 15 14.8001 15 14.8001 15L9.2001 15C9.20007 15 9.20013 15 9.2001 15C8.62383 15 8.25155 15.0008 7.96827 15.0239C7.96815 15.0239 7.96838 15.0239 7.96827 15.0239C7.6966 15.0461 7.59555 15.0838 7.54611 15.109C7.35794 15.2049 7.20496 15.3578 7.10909 15.546C7.0839 15.5955 7.04622 15.6962 7.02402 15.9678C7.00087 16.2512 7.0001 16.6234 7.0001 17.2L7 18.8ZM14 10.5C14 9.94772 14.4477 9.5 15 9.5L18 9.5C18.5523 9.5 19 9.94772 19 10.5C19 11.0523 18.5523 11.5 18 11.5L15 11.5C14.4477 11.5 14 11.0523 14 10.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const PrinterIcon = forwardRef(PrinterIconInner);
export { PrinterIcon };
