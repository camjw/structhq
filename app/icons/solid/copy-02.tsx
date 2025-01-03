import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Copy02IconInner(
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
        d="M18.8385 7H11.1615C10.6343 6.99998 10.1795 6.99997 9.80498 7.03057C9.40963 7.06287 9.01641 7.13419 8.63803 7.32698C8.07355 7.6146 7.61461 8.07354 7.32699 8.63803C7.13419 9.01641 7.06288 9.40963 7.03057 9.80497C6.99997 10.1795 6.99999 10.6343 7 11.1614V18.8385C6.99999 19.3657 6.99997 19.8205 7.03057 20.195C7.06288 20.5904 7.13419 20.9836 7.32699 21.362C7.61461 21.9265 8.07355 22.3854 8.63803 22.673C9.01641 22.8658 9.40963 22.9371 9.80498 22.9694C10.1795 23 10.6343 23 11.1614 23H18.8385C19.3656 23 19.8205 23 20.195 22.9694C20.5904 22.9371 20.9836 22.8658 21.362 22.673C21.9265 22.3854 22.3854 21.9265 22.673 21.362C22.8658 20.9836 22.9371 20.5904 22.9694 20.195C23 19.8205 23 19.3657 23 18.8385V11.1615C23 10.6343 23 10.1796 22.9694 9.80497C22.9371 9.40963 22.8658 9.01641 22.673 8.63803C22.3854 8.07354 21.9265 7.6146 21.362 7.32698C20.9836 7.13419 20.5904 7.06287 20.195 7.03057C19.8205 6.99997 19.3657 6.99998 18.8385 7Z"
        fill="currentColor"
      />
      <path
        d="M5.16146 1H12.8385C13.3657 0.999984 13.8205 0.999969 14.195 1.03057C14.5904 1.06287 14.9836 1.13419 15.362 1.32698C15.9265 1.6146 16.3854 2.07354 16.673 2.63803C16.8658 3.01641 16.9371 3.40963 16.9694 3.80497C16.9969 4.14076 16.9997 4.54098 17 5.00003L11.1191 5.00001C10.6305 4.9999 10.1007 4.99977 9.64211 5.03724C9.12309 5.07964 8.43737 5.1846 7.73005 5.54499C6.78924 6.02436 6.02434 6.78926 5.54497 7.73007C5.18458 8.43739 5.07962 9.12311 5.03722 9.64213C4.99975 10.1007 4.99988 10.6305 4.99999 11.1192L5.00001 17C4.54097 16.9997 4.14075 16.9969 3.80497 16.9694C3.40963 16.9371 3.01641 16.8658 2.63803 16.673C2.07354 16.3854 1.6146 15.9265 1.32698 15.362C1.13419 14.9836 1.06287 14.5904 1.03057 14.195C0.999967 13.8205 0.999984 13.3658 1 12.8386V5.16148C0.999984 4.63437 0.999967 4.17952 1.03057 3.80497C1.06287 3.40963 1.13419 3.01641 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.01641 1.13419 3.40963 1.06287 3.80497 1.03057C4.17953 0.999969 4.63433 0.999984 5.16146 1Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Copy02Icon = forwardRef(Copy02IconInner);
export { Copy02Icon };