import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Repeat04IconInner(
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
        d="M11.7071 0.892991C11.3166 0.502467 10.6834 0.502467 10.2929 0.892991C9.90237 1.28352 9.90237 1.91668 10.2929 2.3072L10.5897 2.60397C6.0118 3.28527 2.5 7.23252 2.5 12C2.5 15.1587 4.04258 17.9572 6.41114 19.6828C6.85752 20.0081 7.48302 19.9098 7.80824 19.4635C8.13345 19.0171 8.03523 18.3916 7.58885 18.0664C5.71475 16.701 4.5 14.4924 4.5 12C4.5 8.35575 7.09915 5.31856 10.5448 4.64107L10.2929 4.89299C9.90237 5.28352 9.90237 5.91668 10.2929 6.3072C10.6834 6.69773 11.3166 6.69773 11.7071 6.3072L13.7071 4.3072C14.0976 3.91668 14.0976 3.28352 13.7071 2.89299L11.7071 0.892991Z"
        fill="currentColor"
      />
      <path
        d="M17.5889 4.31708C17.1425 3.99186 16.517 4.09008 16.1918 4.53646C15.8665 4.98284 15.9648 5.60834 16.4111 5.93355C18.2853 7.29896 19.5 9.50753 19.5 11.9999C19.5 15.6441 16.9009 18.6813 13.4553 19.3588L13.7071 19.107C14.0976 18.7165 14.0976 18.0833 13.7071 17.6928C13.3166 17.3023 12.6834 17.3023 12.2929 17.6928L10.2929 19.6928C9.90237 20.0833 9.90237 20.7165 10.2929 21.107L12.2929 23.107C12.6834 23.4975 13.3166 23.4975 13.7071 23.107C14.0976 22.7165 14.0976 22.0833 13.7071 21.6928L13.4103 21.396C17.9882 20.7147 21.5 16.7674 21.5 11.9999C21.5 8.84123 19.9574 6.04273 17.5889 4.31708Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Repeat04Icon = forwardRef(Repeat04IconInner);
export { Repeat04Icon };
