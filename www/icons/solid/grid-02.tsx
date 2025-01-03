import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Grid02IconInner(
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
        d="M19.0322 4.02393C18.7488 4.00078 18.3766 4 17.8 4L16 4C15.4477 4 15 3.55229 15 3C15 2.44772 15.4477 2 16 2H17.8385C18.3657 1.99998 18.8205 1.99997 19.195 2.03057C19.5904 2.06287 19.9836 2.13419 20.362 2.32698C20.9265 2.6146 21.3854 3.07354 21.673 3.63803C21.8658 4.01641 21.9371 4.40963 21.9694 4.80497C22 5.17955 22 5.63431 22 6.16146V8C22 8.55229 21.5523 9 21 9C20.4477 9 20 8.55229 20 8V6.2C20 5.62345 19.9992 5.25118 19.9761 4.96784C19.9539 4.69618 19.9162 4.59546 19.891 4.54601C19.7951 4.35785 19.6422 4.20487 19.454 4.109C19.4045 4.0838 19.3038 4.04613 19.0322 4.02393Z"
        fill="currentColor"
      />
      <path
        d="M8 2H6.16146C5.63433 1.99998 5.17954 1.99997 4.80497 2.03057C4.40963 2.06287 4.01641 2.13419 3.63803 2.32698C3.07354 2.6146 2.6146 3.07354 2.32698 3.63803C2.13419 4.01641 2.06287 4.40963 2.03057 4.80497C1.99997 5.17954 1.99998 5.63429 2 6.16142V8C2 8.55229 2.44772 9 3 9C3.55229 9 4 8.55229 4 8V6.2C4 5.62345 4.00078 5.25118 4.02393 4.96784C4.04613 4.69618 4.0838 4.59546 4.109 4.54601C4.20487 4.35785 4.35785 4.20487 4.54601 4.109C4.59546 4.0838 4.69618 4.04613 4.96784 4.02393C5.25118 4.00078 5.62345 4 6.2 4H8C8.55229 4 9 3.55229 9 3C9 2.44772 8.55229 2 8 2Z"
        fill="currentColor"
      />
      <path
        d="M4 16C4 15.4477 3.55229 15 3 15C2.44772 15 2 15.4477 2 16V17.8385C1.99998 18.3657 1.99997 18.8205 2.03057 19.195C2.06287 19.5904 2.13419 19.9836 2.32698 20.362C2.6146 20.9265 3.07354 21.3854 3.63803 21.673C4.01641 21.8658 4.40963 21.9371 4.80497 21.9694C5.17955 22 5.63431 22 6.16146 22H8C8.55229 22 9 21.5523 9 21C9 20.4477 8.55229 20 8 20H6.2C5.62345 20 5.25118 19.9992 4.96784 19.9761C4.69618 19.9539 4.59546 19.9162 4.54601 19.891C4.35785 19.7951 4.20487 19.6422 4.109 19.454C4.0838 19.4045 4.04613 19.3038 4.02393 19.0322C4.00078 18.7488 4 18.3766 4 17.8V16Z"
        fill="currentColor"
      />
      <path
        d="M22 16C22 15.4477 21.5523 15 21 15C20.4477 15 20 15.4477 20 16V17.8C20 18.3766 19.9992 18.7488 19.9761 19.0322C19.9539 19.3038 19.9162 19.4045 19.891 19.454C19.7951 19.6422 19.6422 19.7951 19.454 19.891C19.4045 19.9162 19.3038 19.9539 19.0322 19.9761C18.7488 19.9992 18.3766 20 17.8 20H16C15.4477 20 15 20.4477 15 21C15 21.5523 15.4477 22 16 22H17.8385C18.3657 22 18.8205 22 19.195 21.9694C19.5904 21.9371 19.9836 21.8658 20.362 21.673C20.9265 21.3854 21.3854 20.9265 21.673 20.362C21.8658 19.9836 21.9371 19.5904 21.9694 19.195C22 18.8205 22 18.3657 22 17.8385V16Z"
        fill="currentColor"
      />
      <path
        d="M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Grid02Icon = forwardRef(Grid02IconInner);
export { Grid02Icon };