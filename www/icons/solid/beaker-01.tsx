import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Beaker01IconInner(
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
        d="M7.5 2C7.5 1.44772 7.94772 1 8.5 1H15.5C16.0523 1 16.5 1.44772 16.5 2C16.5 2.55228 16.0523 3 15.5 3H15V6.54484C18.2126 7.75693 20.5 10.8601 20.5 14.5C20.5 19.1944 16.6944 23 12 23C7.30558 23 3.5 19.1944 3.5 14.5C3.5 10.8601 5.78742 7.75692 9 6.54484V3H8.5C7.94772 3 7.5 2.55228 7.5 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Beaker01Icon = forwardRef(Beaker01IconInner);
export { Beaker01Icon };
