import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MarkerPin02IconInner(
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
        d="M3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10C21 13.1191 19.2561 15.3655 17.4713 17.2244C17.0407 17.673 16.5965 18.1098 16.1671 18.5321L16.1114 18.5869C15.6608 19.0301 15.2274 19.4575 14.8192 19.8878C13.9985 20.7526 13.3284 21.5792 12.8944 22.4472C12.725 22.786 12.3788 23 12 23C11.6212 23 11.275 22.786 11.1056 22.4472C10.6716 21.5792 10.0015 20.7526 9.18085 19.8878C8.77261 19.4575 8.33924 19.0301 7.88863 18.5869L7.8328 18.532C7.40342 18.1097 6.9593 17.673 6.52865 17.2244C4.74387 15.3655 3 13.1191 3 10ZM15 9.5C15 11.1569 13.6569 12.5 12 12.5C10.3431 12.5 9 11.1569 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MarkerPin02Icon = forwardRef(MarkerPin02IconInner);
export { MarkerPin02Icon };