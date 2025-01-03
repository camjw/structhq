import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ShoppingBag03IconInner(
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
        d="M15.9996 8C15.9996 9.06087 15.5782 10.0783 14.828 10.8284C14.0779 11.5786 13.0605 12 11.9996 12C10.9387 12 9.92131 11.5786 9.17116 10.8284C8.42102 10.0783 7.99959 9.06087 7.99959 8M3.63281 7.40138L2.93281 15.8014C2.78243 17.6059 2.70724 18.5082 3.01227 19.2042C3.28027 19.8157 3.74462 20.3204 4.33177 20.6382C5.00006 21 5.90545 21 7.71623 21H16.283C18.0937 21 18.9991 21 19.6674 20.6382C20.2546 20.3204 20.7189 19.8157 20.9869 19.2042C21.2919 18.5082 21.2167 17.6059 21.0664 15.8014L20.3664 7.40138C20.237 5.84875 20.1723 5.07243 19.8285 4.48486C19.5257 3.96744 19.0748 3.5526 18.5341 3.29385C17.92 3 17.141 3 15.583 3L8.41623 3C6.85821 3 6.07921 3 5.4651 3.29384C4.92433 3.5526 4.47349 3.96744 4.17071 4.48486C3.82689 5.07243 3.76219 5.84875 3.63281 7.40138Z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ShoppingBag03Icon = forwardRef(ShoppingBag03IconInner);
export { ShoppingBag03Icon };