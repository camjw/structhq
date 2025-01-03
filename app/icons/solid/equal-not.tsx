import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function EqualNotIconInner(
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
        d="M19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L14.5858 8H5C4.44772 8 4 8.44772 4 9C4 9.55228 4.44772 10 5 10H12.5858L8.58579 14H5C4.44772 14 4 14.4477 4 15C4 15.5523 4.44772 16 5 16H6.58579L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L9.41421 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14H11.4142L15.4142 10H19C19.5523 10 20 9.55228 20 9C20 8.44772 19.5523 8 19 8H17.4142L19.7071 5.70711Z"
        fill="currentColor"
      />
    </svg>
  );
}
const EqualNotIcon = forwardRef(EqualNotIconInner);
export { EqualNotIcon };
