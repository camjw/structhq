import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Award02IconInner(
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
        d="M12 1C7.30558 1 3.5 4.80558 3.5 9.5C3.5 11.8525 4.45569 13.9818 6 15.5208V22.0001C6 22.3319 6.1646 22.6421 6.43937 22.8281C6.71414 23.0142 7.0633 23.0518 7.37139 22.9285L12 21.0771L16.6286 22.9285C16.9367 23.0518 17.2859 23.0142 17.5606 22.8281C17.8354 22.6421 18 22.3319 18 22.0001V15.5208C19.5443 13.9818 20.5 11.8525 20.5 9.5C20.5 4.80558 16.6944 1 12 1ZM8 17.0019C9.19215 17.6389 10.5539 18 12 18C13.4461 18 14.8079 17.6389 16 17.0019V20.523L12.6685 19.1904L12.647 19.1817C12.5682 19.1496 12.4055 19.0832 12.2274 19.0559C12.0767 19.0328 11.9233 19.0328 11.7726 19.0559C11.5945 19.0832 11.4318 19.1496 11.353 19.1817L11.3315 19.1904L8 20.523V17.0019Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Award02Icon = forwardRef(Award02IconInner);
export { Award02Icon };
