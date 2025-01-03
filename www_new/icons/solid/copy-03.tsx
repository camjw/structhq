import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Copy03IconInner(
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
        d="M5.16146 7H12.8385C13.3657 6.99998 13.8205 6.99997 14.195 7.03057C14.5904 7.06287 14.9836 7.13419 15.362 7.32698C15.9265 7.6146 16.3854 8.07354 16.673 8.63803C16.8658 9.01641 16.9371 9.40963 16.9694 9.80497C17 10.1795 17 10.6343 17 11.1614V18.8385C17 19.3657 17 19.8205 16.9694 20.195C16.9371 20.5904 16.8658 20.9836 16.673 21.362C16.3854 21.9265 15.9265 22.3854 15.362 22.673C14.9836 22.8658 14.5904 22.9371 14.195 22.9694C13.8205 23 13.3658 23 12.8386 23H5.16148C4.63437 23 4.17952 23 3.80497 22.9694C3.40963 22.9371 3.01641 22.8658 2.63803 22.673C2.07354 22.3854 1.6146 21.9265 1.32698 21.362C1.13419 20.9836 1.06287 20.5904 1.03057 20.195C0.999965 19.8205 0.999982 19.3657 1 18.8385V11.1615C0.999982 10.6343 0.999965 10.1796 1.03057 9.80497C1.06287 9.40963 1.13419 9.01641 1.32698 8.63803C1.6146 8.07354 2.07354 7.6146 2.63803 7.32698C3.01641 7.13419 3.40963 7.06287 3.80497 7.03057C4.17953 6.99997 4.63432 6.99998 5.16146 7Z"
        fill="currentColor"
      />
      <path
        d="M18.8385 1H11.1615C10.6343 0.999984 10.1795 0.999969 9.80498 1.03057C9.40963 1.06287 9.01641 1.13419 8.63803 1.32698C8.07355 1.6146 7.61461 2.07354 7.32699 2.63803C7.13419 3.01641 7.06287 3.40963 7.03057 3.80497C7.00314 4.14076 7.00031 4.54098 7.00003 5.00003L12.8809 5.00001C13.3695 4.9999 13.8993 4.99977 14.3579 5.03724C14.8769 5.07964 15.5626 5.1846 16.27 5.54499C17.2108 6.02436 17.9757 6.78926 18.455 7.73007C18.8154 8.43739 18.9204 9.12311 18.9628 9.64213C19.0003 10.1007 19.0001 10.6305 19 11.1192L19 17C19.459 16.9997 19.8593 16.9969 20.195 16.9694C20.5904 16.9371 20.9836 16.8658 21.362 16.673C21.9265 16.3854 22.3854 15.9265 22.673 15.362C22.8658 14.9836 22.9371 14.5904 22.9694 14.195C23 13.8205 23 13.3658 23 12.8386V5.16148C23 4.63437 23 4.17952 22.9694 3.80497C22.9371 3.40963 22.8658 3.01641 22.673 2.63803C22.3854 2.07354 21.9265 1.6146 21.362 1.32698C20.9836 1.13419 20.5904 1.06287 20.195 1.03057C19.8205 0.999969 19.3657 0.999984 18.8385 1Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Copy03Icon = forwardRef(Copy03IconInner);
export { Copy03Icon };
