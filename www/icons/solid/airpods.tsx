import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function AirpodsIconInner(
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
        d="M1 7.625C1 4.79454 3.29454 2.5 6.125 2.5C8.95546 2.5 11.25 4.79454 11.25 7.625V18.875C11.25 20.3247 10.0747 21.5 8.625 21.5C7.17525 21.5 6 20.3247 6 18.875V12.7485C3.22729 12.6821 1 10.4137 1 7.625Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.75 7.625C12.75 4.79454 15.0445 2.5 17.875 2.5C20.7055 2.5 23 4.79454 23 7.625C23 10.4137 20.7727 12.6821 18 12.7485V18.875C18 20.3247 16.8247 21.5 15.375 21.5C13.9253 21.5 12.75 20.3247 12.75 18.875V7.625Z"
        fill="currentColor"
      />
    </svg>
  );
}
const AirpodsIcon = forwardRef(AirpodsIconInner);
export { AirpodsIcon };
