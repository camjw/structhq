import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Percent01IconInner(
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
        d="M19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 6.5C4.5 5.39543 5.39543 4.5 6.5 4.5C7.60457 4.5 8.5 5.39543 8.5 6.5C8.5 7.60457 7.60457 8.5 6.5 8.5C5.39543 8.5 4.5 7.60457 4.5 6.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 17.5C15.5 16.3954 16.3954 15.5 17.5 15.5C18.6046 15.5 19.5 16.3954 19.5 17.5C19.5 18.6046 18.6046 19.5 17.5 19.5C16.3954 19.5 15.5 18.6046 15.5 17.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Percent01Icon = forwardRef(Percent01IconInner);
export { Percent01Icon };
