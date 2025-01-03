import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function UploadCloud01IconInner(
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
        d="M19.4914 8.18681C22.0836 8.84987 24 11.2011 24 14C24 17.3137 21.3137 20 18 20H6.5C2.91015 20 0 17.0899 0 13.5C0 10.4377 2.11764 7.87004 4.96841 7.18148C6.32398 4.69055 8.96456 3 12 3C15.4283 3 18.3528 5.15641 19.4914 8.18681ZM7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L11 10.4142L11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16L13 10.4142L15.2929 12.7071C15.6834 13.0976 16.3166 13.0976 16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071Z"
        fill="currentColor"
      />
    </svg>
  );
}
const UploadCloud01Icon = forwardRef(UploadCloud01IconInner);
export { UploadCloud01Icon };