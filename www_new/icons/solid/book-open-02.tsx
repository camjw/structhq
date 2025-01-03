import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function BookOpen02IconInner(
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
        d="M5.64281 3H5.16146C4.63433 2.99998 4.17954 2.99997 3.80497 3.03057C3.40963 3.06287 3.01641 3.13419 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1.13419 5.01641 1.06287 5.40963 1.03057 5.80497C0.999969 6.17954 0.999984 6.63428 1 7.16142V16.8385C0.999984 17.3657 0.999969 17.8205 1.03057 18.195C1.06287 18.5904 1.13419 18.9836 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.01641 20.8658 3.40963 20.9371 3.80497 20.9694C4.17954 21 4.6343 21 5.16144 21H18.8386C19.3657 21 19.8205 21 20.195 20.9694C20.5904 20.9371 20.9836 20.8658 21.362 20.673C21.9265 20.3854 22.3854 19.9265 22.673 19.362C22.8658 18.9836 22.9371 18.5904 22.9694 18.195C23 17.8205 23 17.3657 23 16.8386V7.16146C23 6.63432 23 6.17954 22.9694 5.80497C22.9371 5.40963 22.8658 5.01641 22.673 4.63803C22.3854 4.07354 21.9265 3.6146 21.362 3.32698C20.9836 3.13419 20.5904 3.06287 20.195 3.03057C19.8205 2.99997 19.3657 2.99998 18.8386 3H18.3572C17.2734 2.99999 16.3992 2.99999 15.6914 3.05782C14.9625 3.11737 14.3223 3.24318 13.73 3.54497C13.0465 3.89326 12.4558 4.39228 12 4.99999C11.5442 4.39228 10.9535 3.89326 10.27 3.54497C9.67766 3.24318 9.03748 3.11737 8.30863 3.05782C7.60076 2.99999 6.72657 2.99999 5.64281 3Z"
        fill="currentColor"
      />
    </svg>
  );
}
const BookOpen02Icon = forwardRef(BookOpen02IconInner);
export { BookOpen02Icon };
