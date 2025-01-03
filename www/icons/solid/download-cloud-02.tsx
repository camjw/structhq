import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function DownloadCloud02IconInner(
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
        d="M0 12C0 16.9706 4.02944 21 9 21H16.5C20.6421 21 24 17.6421 24 13.5C24 9.35786 20.6421 6 16.5 6C16.2441 6 15.9913 6.01281 15.742 6.03783C14.0931 4.17464 11.6837 3 9 3C4.02944 3 0 7.02944 0 12ZM12 8C12.5523 8 13 8.44772 13 9V14.5858L15.2929 12.2929C15.6834 11.9024 16.3166 11.9024 16.7071 12.2929C17.0976 12.6834 17.0976 13.3166 16.7071 13.7071L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L7.29289 13.7071C6.90237 13.3166 6.90237 12.6834 7.29289 12.2929C7.68342 11.9024 8.31658 11.9024 8.70711 12.2929L11 14.5858V9C11 8.44772 11.4477 8 12 8Z"
        fill="currentColor"
      />
    </svg>
  );
}
const DownloadCloud02Icon = forwardRef(DownloadCloud02IconInner);
export { DownloadCloud02Icon };
