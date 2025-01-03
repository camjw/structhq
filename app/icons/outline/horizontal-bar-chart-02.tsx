import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function HorizontalBarChart02IconInner(
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
        d="M17 9.5V12.9C17 13.4601 17 13.7401 16.891 13.954C16.7951 14.1422 16.6422 14.2951 16.454 14.391C16.2401 14.5 15.9601 14.5 15.4 14.5L3 14.5M13 14.5V17.9C13 18.4601 13 18.7401 12.891 18.954C12.7951 19.1422 12.6422 19.2951 12.454 19.391C12.2401 19.5 11.9601 19.5 11.4 19.5H3M3 2L3 22M3 9.5L19.4 9.5C19.9601 9.5 20.2401 9.5 20.454 9.39101C20.6422 9.29513 20.7951 9.14215 20.891 8.95399C21 8.74008 21 8.46005 21 7.9V6.1C21 5.53995 21 5.25992 20.891 5.04601C20.7951 4.85785 20.6422 4.70487 20.454 4.60899C20.2401 4.5 19.9601 4.5 19.4 4.5L3 4.5L3 9.5Z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const HorizontalBarChart02Icon = forwardRef(HorizontalBarChart02IconInner);
export { HorizontalBarChart02Icon };
