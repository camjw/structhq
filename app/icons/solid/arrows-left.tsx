import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ArrowsLeftIconInner(
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
        d="M13.7071 3.70711C14.0976 3.31658 14.0976 2.68342 13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289L8.29289 6.29289C7.90237 6.68342 7.90237 7.31658 8.29289 7.70711L12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071C14.0976 11.3166 14.0976 10.6834 13.7071 10.2929L11.4142 8L20 8C20.5523 8 21 7.55229 21 7C21 6.44772 20.5523 6 20 6L11.4142 6L13.7071 3.70711Z"
        fill="currentColor"
      />
      <path
        d="M6.41421 16L8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929L3.29289 16.2929C2.90237 16.6834 2.90237 17.3166 3.29289 17.7071L7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071C9.09763 21.3166 9.09763 20.6834 8.70711 20.2929L6.41421 18L20 18C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16L6.41421 16Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ArrowsLeftIcon = forwardRef(ArrowsLeftIconInner);
export { ArrowsLeftIcon };
