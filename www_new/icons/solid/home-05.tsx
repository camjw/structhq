import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Home05IconInner(
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
        d="M11.4773 1.33636C11.8196 1.24368 12.1804 1.24368 12.5227 1.33636C12.92 1.44395 13.2546 1.7066 13.5216 1.91623C15.825 3.72462 18.1427 5.51471 20.4562 7.31011C20.8329 7.6024 21.1647 7.8599 21.4119 8.19421C21.6289 8.48759 21.7906 8.8181 21.8889 9.1695C22.001 9.56992 22.0006 9.98993 22.0001 10.4667C21.9975 12.924 22 15.3813 22 17.8386C22 18.3657 22 18.8204 21.9694 19.195C21.9371 19.5904 21.8658 19.9836 21.673 20.362C21.3854 20.9264 20.9264 21.3854 20.362 21.673C19.9836 21.8658 19.5904 21.9371 19.195 21.9694C18.3935 22.0349 17.5805 21.9996 16.7768 22C16.6577 22 16.5155 22.0001 16.3902 21.9899C16.2449 21.978 16.0369 21.9475 15.819 21.8365C15.5368 21.6927 15.3073 21.4632 15.1635 21.181C15.0524 20.963 15.022 20.755 15.0101 20.6098C14.9999 20.4845 14.9999 20.3422 15 20.2231L15.0079 14.6269C15.0087 14.0661 15.009 13.7857 14.9002 13.5715C14.8044 13.3831 14.6514 13.2298 14.4631 13.1338C14.249 13.0246 13.9686 13.0246 13.4079 13.0246H10.608C10.0487 13.0246 9.76901 13.0246 9.55525 13.1334C9.36722 13.2291 9.21428 13.3818 9.11831 13.5697C9.0092 13.7833 9.0088 14.063 9.008 14.6223L8.99999 20.2231C9.00004 20.3422 9.00009 20.4845 8.98985 20.6098C8.97799 20.755 8.94755 20.963 8.8365 21.181C8.69269 21.4632 8.46322 21.6927 8.18097 21.8365C7.96303 21.9475 7.75503 21.978 7.60982 21.9899C7.4845 22.0001 7.34225 22 7.22314 22C6.41945 21.9996 5.60648 22.0349 4.80496 21.9694C4.40961 21.9371 4.0164 21.8658 3.63802 21.673C3.07353 21.3854 2.61459 20.9264 2.32697 20.362C2.13417 19.9836 2.06286 19.5904 2.03056 19.195C1.99995 18.8204 1.99997 18.3657 1.99999 17.8385C1.99999 15.3812 2.00257 12.9239 1.99992 10.4667C1.9994 9.98993 1.99895 9.56992 2.11103 9.1695C2.20939 8.8181 2.37104 8.48759 2.58803 8.19421C2.83529 7.85991 3.1671 7.6024 3.54373 7.31012C5.85716 5.51479 8.17509 3.72458 10.4784 1.91623C10.7454 1.7066 11.0799 1.44395 11.4773 1.33636Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Home05Icon = forwardRef(Home05IconInner);
export { Home05Icon };
