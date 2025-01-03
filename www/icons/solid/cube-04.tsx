import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Cube04IconInner(
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
        d="M7 2.58568L3.43934 6.14634C3.12436 6.46132 3.34744 6.99989 3.79289 6.99989H7V2.58568Z"
        fill="currentColor"
      />
      <path
        d="M9 6.99989V2L19.3767 2.00195C19.8221 2.00203 20.0451 2.54055 19.7302 2.8555L15.7322 6.85344C15.6385 6.94721 15.5113 6.99989 15.3787 6.99989H9Z"
        fill="currentColor"
      />
      <path
        d="M7 8.99989H2.5C2.22386 8.99989 2 9.22375 2 9.49989L2.00204 19.3766C2.00213 19.822 2.54064 20.045 2.85559 19.7301L6.85355 15.7321C6.94732 15.6384 7 15.5112 7 15.3786V8.99989Z"
        fill="currentColor"
      />
      <path
        d="M4.2698 21.1443C3.95486 21.4592 4.17785 21.9978 4.62326 21.9979L14.5 21.9999C14.7761 21.9999 15 21.776 15 21.4999V16.9999H8.62132C8.48871 16.9999 8.36154 17.0526 8.26777 17.1463L4.2698 21.1443Z"
        fill="currentColor"
      />
      <path
        d="M15 14.9999H9.5C9.22386 14.9999 9 14.776 9 14.4999V8.99989H14.5C14.7761 8.99989 15 9.22375 15 9.49989V14.9999Z"
        fill="currentColor"
      />
      <path
        d="M17 16.9999V20.207C17 20.6524 17.5386 20.8755 17.8536 20.5605L20.5607 17.8534C20.8756 17.5385 20.6526 16.9999 20.2071 16.9999H17Z"
        fill="currentColor"
      />
      <path
        d="M21.9998 14.4998C21.9998 14.776 21.776 14.9999 21.4998 14.9999H17V8.62121C17 8.4886 17.0527 8.36143 17.1464 8.26766L21.1444 4.26972C21.4593 3.95477 21.9979 4.17777 21.9979 4.62318L21.9998 14.4998Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Cube04Icon = forwardRef(Cube04IconInner);
export { Cube04Icon };
