import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function VoicemailIconInner(
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
        d="M11 12C11 13.1256 10.6281 14.1643 10.0004 15H13.9996C13.3719 14.1643 13 13.1256 13 12C13 9.23858 15.2386 7 18 7C20.7614 7 23 9.23858 23 12C23 14.7603 20.7632 16.9982 18.0032 17L18 17L5.99688 17C3.23689 16.9983 1 14.7604 1 12C1 9.23858 3.23858 7 6 7C8.76142 7 11 9.23858 11 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const VoicemailIcon = forwardRef(VoicemailIconInner);
export { VoicemailIcon };
