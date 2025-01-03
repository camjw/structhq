import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Cube03IconInner(
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
        d="M19.7302 2.85561C20.0451 2.54066 19.8221 2.00214 19.3767 2.00206L8.41421 2C7.88378 2 7.37507 2.21071 7 2.58579L3.43934 6.14645C3.12436 6.46143 3.34744 7 3.79289 7H15.3787C15.5113 7 15.6385 6.94732 15.7322 6.85355L19.7302 2.85561Z"
        fill="currentColor"
      />
      <path
        d="M2.5 9C2.22386 9 2 9.22386 2 9.5V20.5C2 21.3284 2.67157 22 3.5 22H14.5C14.7761 22 15 21.7761 15 21.5V9.5C15 9.22386 14.7761 9 14.5 9H2.5Z"
        fill="currentColor"
      />
      <path
        d="M17 20.2071C17 20.6526 17.5386 20.8756 17.8536 20.5607L21.4142 17C21.7893 16.6249 22 16.1162 22 15.5858L21.9979 4.62329C21.9979 4.17788 21.4593 3.95487 21.1444 4.26983L17.1464 8.26777C17.0527 8.36154 17 8.48871 17 8.62132V20.2071Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Cube03Icon = forwardRef(Cube03IconInner);
export { Cube03Icon };
