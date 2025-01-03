import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function AnchorIconInner(
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
        d="M16 5C16 6.86384 14.7252 8.42994 13 8.87398V20.9443C15.019 20.7186 16.9135 19.8144 18.364 18.364C19.8144 16.9135 20.7186 15.019 20.9443 13H19C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11H22C22.5523 11 23 11.4477 23 12C23 14.9174 21.8411 17.7153 19.7782 19.7782C17.7153 21.8411 14.9174 23 12 23C9.08262 23 6.28473 21.8411 4.22183 19.7782C2.15893 17.7153 1 14.9174 1 12C1 11.7348 1.10536 11.4804 1.29289 11.2929C1.48043 11.1054 1.73478 11 2 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H3.0557C3.28137 15.019 4.18561 16.9135 5.63604 18.364C7.08647 19.8144 8.98098 20.7186 11 20.9443V8.87398C9.27477 8.42994 8 6.86384 8 5C8 2.79086 9.79086 1 12 1C14.2091 1 16 2.79086 16 5ZM12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}
const AnchorIcon = forwardRef(AnchorIconInner);
export { AnchorIcon };
