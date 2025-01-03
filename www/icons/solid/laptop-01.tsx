import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Laptop01IconInner(
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
        d="M6.16135 3H17.8384C18.3656 2.99998 18.8204 2.99997 19.1949 3.03057C19.5903 3.06287 19.9835 3.13419 20.3619 3.32698C20.9264 3.6146 21.3853 4.07355 21.6729 4.63803C21.8657 5.01641 21.937 5.40963 21.9693 5.80498C21.9999 6.17954 21.9999 6.6343 21.9999 7.16144V13.3999C21.9999 13.96 21.9999 14.24 21.8909 14.4539C21.795 14.6421 21.642 14.7951 21.4539 14.891C21.24 14.9999 20.9599 14.9999 20.3999 14.9999H15.6626L15.6116 14.9999C15.4217 14.9993 15.1825 14.9987 14.9472 15.0552C14.7431 15.1042 14.5481 15.185 14.3691 15.2947C14.1628 15.4211 13.9941 15.5907 13.8602 15.7253C13.6835 15.9023 13.4412 15.9975 13.1911 15.9975H10.8087C10.5586 15.9975 10.3163 15.9023 10.1396 15.7253C10.0057 15.5907 9.83703 15.4211 9.63067 15.2947C9.45173 15.185 9.25664 15.1042 9.05257 15.0552C8.81724 14.9987 8.5781 14.9993 8.38819 14.9999L8.33715 14.9999H3.59989C3.03984 14.9999 2.75981 14.9999 2.5459 14.891C2.35774 14.7951 2.20476 14.6421 2.10889 14.4539C1.99989 14.24 1.99989 13.96 1.99989 13.3999L1.99989 7.16146C1.99987 6.63431 1.99986 6.17955 2.03046 5.80498C2.06276 5.40963 2.13408 5.01641 2.32687 4.63803C2.61449 4.07355 3.07344 3.6146 3.63792 3.32698C4.0163 3.13419 4.40952 3.06287 4.80487 3.03057C5.17942 2.99997 5.63423 2.99998 6.16135 3Z"
        fill="currentColor"
      />
      <path
        d="M2.53384 17.0004C1.99189 17.0003 1.72091 17.0002 1.49135 17.1303C1.31263 17.2316 1.12485 17.4496 1.05111 17.6413C0.956394 17.8876 0.988571 18.1022 1.05292 18.5313C1.06633 18.6207 1.08253 18.7037 1.10202 18.7765C1.37943 19.8118 2.18807 20.6204 3.22335 20.8978C3.60887 21.0011 4.0469 21.0007 4.55463 21.0001H19.445C19.9527 21.0007 20.3907 21.0011 20.7763 20.8978C21.8115 20.6204 22.6202 19.8118 22.8976 18.7765C22.917 18.7041 22.933 18.6212 22.9463 18.5316C23.0101 18.1015 23.042 17.8864 22.947 17.6404C22.873 17.4488 22.6854 17.2314 22.5066 17.1303C22.2771 17.0004 22.0059 17.0006 21.4634 17.001L15.7962 17.0047C15.5493 17.0049 15.314 17.0999 15.1396 17.2746C15.0057 17.4092 14.837 17.5788 14.6307 17.7052C14.4517 17.8149 14.2566 17.8957 14.0526 17.9447C13.8172 18.0012 13.5781 18.0005 13.3882 18L13.3371 17.9999H10.6626L10.6116 18C10.4217 18.0005 10.1825 18.0012 9.94721 17.9447C9.74314 17.8957 9.54805 17.8149 9.36911 17.7052C9.16276 17.5788 8.99411 17.4092 8.86018 17.2746C8.68366 17.0974 8.44119 17.0023 8.1911 17.0022L2.53384 17.0004Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Laptop01Icon = forwardRef(Laptop01IconInner);
export { Laptop01Icon };