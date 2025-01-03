import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Atom02IconInner(
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
        d="M12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.56138 9.80291C2.77487 10.5288 3.07086 11.273 3.44345 12.0208C2.69373 13.5257 2.2422 15.04 2.16948 16.4321C2.089 17.9729 2.47418 19.4447 3.53551 20.506C5.08715 22.0577 7.47951 22.1635 9.80296 21.4801C10.5288 21.2666 11.273 20.9707 12.0208 20.5981C12.7685 20.9707 13.5128 21.2666 14.2386 21.4801C16.562 22.1635 18.9544 22.0577 20.506 20.506C22.0577 18.9544 22.1635 16.562 21.4801 14.2386C21.2666 13.5128 20.9707 12.7685 20.5981 12.0208C21.3766 10.4582 21.8355 8.88107 21.8791 7.4402C21.9237 5.96202 21.5281 4.55754 20.5061 3.53547C18.9544 1.98383 16.5621 1.87802 14.2386 2.56138C13.5128 2.77486 12.7686 3.07084 12.0208 3.44342C11.273 3.07084 10.5287 2.77486 9.80291 2.56138C7.47947 1.87802 5.0871 1.98383 3.53547 3.53547C1.98383 5.0871 1.87802 7.47947 2.56138 9.80291ZM9.23858 4.48011C7.21134 3.88387 5.74119 4.15817 4.94968 4.94968C4.15817 5.74119 3.88387 7.21134 4.48011 9.23858C5.0642 11.2245 6.43233 13.5034 8.48521 15.5563C9.62372 16.6948 10.8318 17.6227 12.0208 18.323C13.2098 17.6227 14.4178 16.6948 15.5563 15.5563C15.839 15.2736 16.109 14.9863 16.3662 14.6955C16.7321 14.2819 17.364 14.2431 17.7777 14.609C18.1914 14.9749 18.2302 15.6069 17.8643 16.0206C17.58 16.3419 17.282 16.6591 16.9705 16.9705C16.067 17.8741 15.112 18.6686 14.139 19.3408C14.3634 19.4237 14.5849 19.4973 14.8029 19.5614C16.8301 20.1576 18.3003 19.8833 19.0918 19.0918C19.8833 18.3003 20.1576 16.8301 19.5614 14.8029C18.9773 12.817 17.6092 10.5381 15.5563 8.48521C14.4178 7.34671 13.2098 6.41882 12.0208 5.71847C10.8318 6.41882 9.62375 7.34671 8.48525 8.48521C8.18979 8.78068 7.90806 9.0813 7.64048 9.38554C7.27575 9.80025 6.64388 9.84076 6.22917 9.47603C5.81446 9.11129 5.77394 8.47942 6.13868 8.06471C6.43452 7.72833 6.74547 7.39657 7.07104 7.071C7.97459 6.16745 8.92959 5.37291 9.90256 4.70071C9.67816 4.61781 9.4566 4.54424 9.23858 4.48011ZM7.071 16.9705C7.97456 17.8741 8.92957 18.6686 9.90255 19.3408C9.67816 19.4237 9.45663 19.4973 9.23862 19.5614C7.21139 20.1576 5.74123 19.8833 4.94972 19.0918C4.40465 18.5467 4.10608 17.6981 4.16676 16.5364C4.20447 15.8144 4.38159 15.003 4.70071 14.139C5.37291 15.1119 6.16745 16.0669 7.071 16.9705ZM19.88 7.3798C19.8573 8.13139 19.6792 8.98666 19.3408 9.9026C18.6686 8.9296 17.8741 7.97457 16.9705 7.071C16.0669 6.16745 15.1119 5.37291 14.139 4.70071C14.3634 4.61781 14.5849 4.54424 14.803 4.48011C16.8302 3.88387 18.3004 4.15817 19.0919 4.94968C19.6175 5.47535 19.9132 6.28156 19.88 7.3798Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Atom02Icon = forwardRef(Atom02IconInner);
export { Atom02Icon };
