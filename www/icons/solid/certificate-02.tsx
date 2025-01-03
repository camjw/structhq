import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Certificate02IconInner(
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
        d="M5 1C3.24665 1 2 2.54435 2 4.22222V19.7778C2 21.4557 3.24665 23 5 23H19C20.7534 23 22 21.4557 22 19.7778V4.22222C22 2.54435 20.7534 1 19 1H5ZM7 14C6.44772 14 6 14.4477 6 15C6 15.5523 6.44772 16 7 16H17C17.5523 16 18 15.5523 18 15C18 14.4477 17.5523 14 17 14H7ZM9 17.5C8.44772 17.5 8 17.9477 8 18.5C8 19.0523 8.44772 19.5 9 19.5H15C15.5523 19.5 16 19.0523 16 18.5C16 17.9477 15.5523 17.5 15 17.5H9ZM9.25414 5.93667C10.1309 5.22321 11.2978 5.4328 11.9976 6.21194C12.6974 5.4328 13.8492 5.23072 14.7411 5.93667C15.6329 6.64262 15.7413 7.84299 15.0527 8.6868C14.664 9.16319 13.7404 9.99833 13.0098 10.6353C12.6633 10.9374 12.4901 11.0885 12.2805 11.1503C12.1018 11.203 11.8934 11.203 11.7147 11.1503C11.5051 11.0885 11.3319 10.9374 10.9854 10.6353C10.2548 9.99833 9.33119 9.16319 8.94247 8.6868C8.25394 7.84299 8.37738 6.65013 9.25414 5.93667Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Certificate02Icon = forwardRef(Certificate02IconInner);
export { Certificate02Icon };
