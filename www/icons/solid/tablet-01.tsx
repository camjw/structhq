import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Tablet01IconInner(
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
        d="M16.8385 1H7.16146C6.63433 0.999984 6.17954 0.999969 5.80497 1.03057C5.40963 1.06287 5.01641 1.13419 4.63803 1.32698C4.07354 1.6146 3.6146 2.07354 3.32698 2.63803C3.13419 3.01641 3.06287 3.40963 3.03057 3.80497C2.99997 4.17954 2.99998 4.63429 3 5.16142V18.8385C2.99998 19.3657 2.99997 19.8205 3.03057 20.195C3.06287 20.5904 3.13419 20.9836 3.32698 21.362C3.6146 21.9265 4.07354 22.3854 4.63803 22.673C5.01641 22.8658 5.40963 22.9371 5.80497 22.9694C6.17954 23 6.6343 23 7.16144 23H16.8386C17.3657 23 17.8205 23 18.195 22.9694C18.5904 22.9371 18.9836 22.8658 19.362 22.673C19.9265 22.3854 20.3854 21.9265 20.673 21.362C20.8658 20.9836 20.9371 20.5904 20.9694 20.195C21 19.8205 21 19.3657 21 18.8386V5.16144C21 4.6343 21 4.17954 20.9694 3.80497C20.9371 3.40963 20.8658 3.01641 20.673 2.63803C20.3854 2.07354 19.9265 1.6146 19.362 1.32698C18.9836 1.13419 18.5904 1.06287 18.195 1.03057C17.8205 0.999969 17.3657 0.999984 16.8385 1ZM12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Tablet01Icon = forwardRef(Tablet01IconInner);
export { Tablet01Icon };