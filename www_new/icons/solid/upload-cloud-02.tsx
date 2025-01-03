import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function UploadCloud02IconInner(
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
        d="M9 21C4.02944 21 0 16.9706 0 12C0 7.02944 4.02944 3 9 3C11.6837 3 14.0931 4.17464 15.742 6.03783C15.9913 6.01281 16.2441 6 16.5 6C20.6421 6 24 9.35786 24 13.5C24 17.6421 20.6421 21 16.5 21H9ZM7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071L11 11.4142L11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17L13 11.4142L15.2929 13.7071C15.6834 14.0976 16.3166 14.0976 16.7071 13.7071C17.0976 13.3166 17.0976 12.6834 16.7071 12.2929L12.7071 8.29289C12.3166 7.90237 11.6834 7.90237 11.2929 8.29289L7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071Z"
        fill="currentColor"
      />
    </svg>
  );
}
const UploadCloud02Icon = forwardRef(UploadCloud02IconInner);
export { UploadCloud02Icon };
