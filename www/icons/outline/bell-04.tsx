import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Bell04IconInner(
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
        d="M14.391 18.015C14.8198 19.6154 13.8701 21.2604 12.2697 21.6893C10.6693 22.1181 9.02426 21.1683 8.59543 19.5679M10.8915 5.74109C11.1957 5.19379 11.2959 4.53229 11.1211 3.8797C10.7637 2.54603 9.39288 1.75457 8.05921 2.11193C6.72555 2.46928 5.93409 3.84013 6.29144 5.17379C6.46631 5.82639 6.88384 6.34916 7.42094 6.67103M16.2359 9.44553C15.879 8.1134 14.926 6.99944 13.5868 6.3487C12.2475 5.69797 10.6316 5.56377 9.09449 5.97563C7.55741 6.38749 6.22508 7.31167 5.3906 8.54486C4.55612 9.77805 4.28785 11.2192 4.64479 12.5514C5.23537 14.7554 5.12069 16.5138 4.74774 17.8499C4.32267 19.3728 4.11014 20.1342 4.16756 20.2871C4.23325 20.462 4.28076 20.5101 4.455 20.5776C4.60729 20.6366 5.24706 20.4651 6.5266 20.1223L18.3917 16.9431C19.6712 16.6002 20.311 16.4288 20.4134 16.3015C20.5305 16.1559 20.5476 16.0906 20.5171 15.9063C20.4904 15.7451 19.9256 15.192 18.796 14.0857C17.805 13.115 16.8265 11.6496 16.2359 9.44553Z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Bell04Icon = forwardRef(Bell04IconInner);
export { Bell04Icon };
