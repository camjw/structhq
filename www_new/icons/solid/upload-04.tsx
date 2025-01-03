import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Upload04IconInner(
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
        d="M16.3788 22.0939C15.6165 22.4251 15.2353 22.5907 14.6333 22.4784C14.194 22.3965 13.593 22.0024 13.3428 21.632C13 21.1246 13 20.5677 13 19.4538V10.4142L15.2929 12.7071C15.6834 13.0976 16.3166 13.0976 16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L11 10.4142L10.9999 19.3446C10.9989 20.6056 10.9981 21.6012 11.734 22.642C11.8217 22.7659 11.9258 22.8858 12.0402 22.9999C12.0268 23 12.0134 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 16.5189 20.2751 20.4013 16.3788 22.0939Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Upload04Icon = forwardRef(Upload04IconInner);
export { Upload04Icon };
