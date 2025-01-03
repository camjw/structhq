import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Server01IconInner(
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
        d="M18.8385 1H5.16146C4.63434 0.999985 4.17953 0.999971 3.80498 1.03057C3.40963 1.06287 3.01641 1.13419 2.63803 1.32698C2.07355 1.6146 1.6146 2.07355 1.32698 2.63803C1.13419 3.01641 1.06287 3.40963 1.03057 3.80498C0.999971 4.17953 0.999985 4.63427 1 5.16138V6.83855C0.999985 7.36566 0.999971 7.82048 1.03057 8.19503C1.06287 8.59038 1.13419 8.9836 1.32698 9.36197C1.6146 9.92646 2.07355 10.3854 2.63803 10.673C3.01641 10.8658 3.40963 10.9371 3.80498 10.9694C4.17955 11 4.63431 11 5.16145 11H18.8385C19.3657 11 19.8205 11 20.195 10.9694C20.5904 10.9371 20.9836 10.8658 21.362 10.673C21.9265 10.3854 22.3854 9.92646 22.673 9.36197C22.8658 8.9836 22.9371 8.59038 22.9694 8.19503C23 7.82047 23 7.36571 23 6.83857V5.16144C23 4.6343 23 4.17954 22.9694 3.80498C22.9371 3.40963 22.8658 3.01641 22.673 2.63803C22.3854 2.07355 21.9265 1.6146 21.362 1.32698C20.9836 1.13419 20.5904 1.06287 20.195 1.03057C19.8205 0.999971 19.3657 0.999985 18.8385 1ZM6 4.75C5.30965 4.75 4.75 5.30965 4.75 6C4.75 6.69036 5.30965 7.25 6 7.25C6.69036 7.25 7.25 6.69036 7.25 6C7.25 5.30965 6.69036 4.75 6 4.75Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8385 13H5.16146C4.63431 13 4.17955 13 3.80498 13.0306C3.40963 13.0629 3.01641 13.1342 2.63803 13.327C2.07355 13.6146 1.6146 14.0735 1.32698 14.638C1.13419 15.0164 1.06287 15.4096 1.03057 15.805C0.999971 16.1795 0.999985 16.6343 1 17.1614V18.8385C0.999985 19.3657 0.999971 19.8205 1.03057 20.195C1.06287 20.5904 1.13419 20.9836 1.32698 21.362C1.6146 21.9265 2.07355 22.3854 2.63803 22.673C3.01641 22.8658 3.40963 22.9371 3.80498 22.9694C4.17955 23 4.63432 23 5.16148 23H18.8385C19.3657 23 19.8205 23 20.195 22.9694C20.5904 22.9371 20.9836 22.8658 21.362 22.673C21.9265 22.3854 22.3854 21.9265 22.673 21.362C22.8658 20.9836 22.9371 20.5904 22.9694 20.195C23 19.8205 23 19.3657 23 18.8386V17.1614C23 16.6343 23 16.1795 22.9694 15.805C22.9371 15.4096 22.8658 15.0164 22.673 14.638C22.3854 14.0735 21.9265 13.6146 21.362 13.327C20.9836 13.1342 20.5904 13.0629 20.195 13.0306C19.8205 13 19.3657 13 18.8385 13ZM4.75 18C4.75 17.3096 5.30965 16.75 6 16.75C6.69036 16.75 7.25 17.3096 7.25 18C7.25 18.6904 6.69036 19.25 6 19.25C5.30965 19.25 4.75 18.6904 4.75 18Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Server01Icon = forwardRef(Server01IconInner);
export { Server01Icon };