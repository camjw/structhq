import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Keyboard01IconInner(
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
        d="M18.8385 5H5.16146C4.63433 4.99998 4.17954 4.99997 3.80497 5.03057C3.40963 5.06287 3.01641 5.13419 2.63803 5.32698C2.07354 5.6146 1.6146 6.07354 1.32698 6.63803C1.13419 7.01641 1.06287 7.40963 1.03057 7.80497C0.999969 8.17954 0.999984 8.63428 1 9.16142V14.8385C0.999984 15.3657 0.999969 15.8205 1.03057 16.195C1.06287 16.5904 1.13419 16.9836 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.01641 18.8658 3.40963 18.9371 3.80497 18.9694C4.17954 19 4.63431 19 5.16145 19H18.8385C19.3657 19 19.8205 19 20.195 18.9694C20.5904 18.9371 20.9836 18.8658 21.362 18.673C21.9265 18.3854 22.3854 17.9265 22.673 17.362C22.8658 16.9836 22.9371 16.5904 22.9694 16.195C23 15.8205 23 15.3657 23 14.8386V9.16144C23 8.6343 23 8.17954 22.9694 7.80497C22.9371 7.40963 22.8658 7.01641 22.673 6.63803C22.3854 6.07354 21.9265 5.6146 21.362 5.32698C20.9836 5.13419 20.5904 5.06287 20.195 5.03057C19.8205 4.99997 19.3657 4.99998 18.8385 5ZM5 10C5 9.44772 5.44772 9 6 9H6.01C6.56229 9 7.01 9.44772 7.01 10C7.01 10.5523 6.56229 11 6.01 11H6C5.44772 11 5 10.5523 5 10ZM7 14C7 13.4477 7.44772 13 8 13H8.01C8.56229 13 9.01 13.4477 9.01 14C9.01 14.5523 8.56229 15 8.01 15H8C7.44772 15 7 14.5523 7 14ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H10.01C10.5623 11 11.01 10.5523 11.01 10C11.01 9.44772 10.5623 9 10.01 9H10ZM11 14C11 13.4477 11.4477 13 12 13H12.01C12.5623 13 13.01 13.4477 13.01 14C13.01 14.5523 12.5623 15 12.01 15H12C11.4477 15 11 14.5523 11 14ZM14 9C13.4477 9 13 9.44772 13 10C13 10.5523 13.4477 11 14 11H14.01C14.5623 11 15.01 10.5523 15.01 10C15.01 9.44772 14.5623 9 14.01 9H14ZM15 14C15 13.4477 15.4477 13 16 13H16.01C16.5623 13 17.01 13.4477 17.01 14C17.01 14.5523 16.5623 15 16.01 15H16C15.4477 15 15 14.5523 15 14ZM18 9C17.4477 9 17 9.44772 17 10C17 10.5523 17.4477 11 18 11H18.01C18.5623 11 19.01 10.5523 19.01 10C19.01 9.44772 18.5623 9 18.01 9H18Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Keyboard01Icon = forwardRef(Keyboard01IconInner);
export { Keyboard01Icon };
