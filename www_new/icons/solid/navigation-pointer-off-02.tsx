import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function NavigationPointerOff02IconInner(
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
        d="M2.70711 1.29289C2.31658 0.902369 1.68342 0.902369 1.29289 1.29289C0.902369 1.68342 0.902369 2.31658 1.29289 2.70711L7.75803 9.17224L3.05062 19.9051C2.93555 20.1674 2.82409 20.4214 2.75278 20.6322C2.69117 20.8144 2.56625 21.2075 2.69998 21.6304C2.84746 22.0968 3.21307 22.462 3.67963 22.6089C4.1027 22.7422 4.49572 22.6168 4.67778 22.555C4.8885 22.4834 5.14239 22.3717 5.40455 22.2563L11.9956 19.3562L18.5867 22.2563C18.8488 22.3717 19.1027 22.4834 19.3134 22.555C19.4955 22.6168 19.8885 22.7422 20.3116 22.6089C20.5227 22.5425 20.7131 22.4313 20.8721 22.2863L21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L2.70711 1.29289Z"
        fill="currentColor"
      />
      <path
        d="M18.4354 14.1928L13.6294 3.23506C13.5265 3.00034 13.4239 2.7664 13.3238 2.58421C13.2319 2.41706 13.0389 2.08891 12.6656 1.90254C12.2438 1.69199 11.7475 1.69199 11.3257 1.90254C10.9524 2.08891 10.7595 2.41706 10.6676 2.58421C10.5674 2.76638 10.4648 3.00031 10.3619 3.23501L9.48259 5.23995L18.4354 14.1928Z"
        fill="currentColor"
      />
    </svg>
  );
}
const NavigationPointerOff02Icon = forwardRef(NavigationPointerOff02IconInner);
export { NavigationPointerOff02Icon };
