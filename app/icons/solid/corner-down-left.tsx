import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CornerDownLeftIconInner(
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
        d="M21 4C21 3.44772 20.5523 3 20 3C19.4477 3 19 3.44772 19 4V5.4C19 7.09666 18.9992 8.30901 18.9216 9.25936C18.8449 10.198 18.6982 10.7927 18.455 11.27C17.9757 12.2108 17.2108 12.9757 16.27 13.455C15.7927 13.6982 15.198 13.8449 14.2594 13.9216C13.309 13.9992 12.0967 14 10.4 14H6.41421L9.70711 10.7071C10.0976 10.3166 10.0976 9.68342 9.70711 9.29289C9.31658 8.90237 8.68342 8.90237 8.29289 9.29289L3.29289 14.2929C2.90237 14.6834 2.90237 15.3166 3.29289 15.7071L8.29289 20.7071C8.68342 21.0976 9.31658 21.0976 9.70711 20.7071C10.0976 20.3166 10.0976 19.6834 9.70711 19.2929L6.41421 16H10.4444C12.0869 16 13.3809 16 14.4222 15.9149C15.4846 15.8281 16.3717 15.6478 17.1779 15.237C18.4951 14.5659 19.5659 13.4951 20.237 12.1779C20.6478 11.3717 20.8281 10.4846 20.9149 9.42222C21 8.38091 21 7.08697 21 5.44444V4Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CornerDownLeftIcon = forwardRef(CornerDownLeftIconInner);
export { CornerDownLeftIcon };
