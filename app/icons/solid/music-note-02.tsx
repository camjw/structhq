import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function MusicNote02IconInner(
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
        d="M14.7259 3.24492C14.3743 3.06907 14.0517 2.90772 13.7779 2.80076C13.4959 2.69061 13.1239 2.578 12.7077 2.63949C12.1635 2.7199 11.6764 3.02093 11.3611 3.47173C11.1199 3.81652 11.0543 4.19955 11.0267 4.50105C10.9999 4.7938 11 5.15455 11 5.54767L11 14.5351C10.4117 14.1948 9.72858 14 9 14C6.79086 14 5 15.7909 5 18C5 20.2091 6.79086 22 9 22C11.2081 22 12.9983 20.2109 13 18.0032L13 18V5.58884C13 5.14072 13.001 4.87355 13.0184 4.68335L13.0215 4.65274L13.0502 4.66369C13.2281 4.73319 13.4675 4.85178 13.8683 5.05218L17.5528 6.89441C18.0468 7.1414 18.6474 6.94117 18.8944 6.4472C19.1414 5.95322 18.9412 5.35254 18.4472 5.10555L14.7259 3.24492Z"
        fill="currentColor"
      />
    </svg>
  );
}
const MusicNote02Icon = forwardRef(MusicNote02IconInner);
export { MusicNote02Icon };
