import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function SkipBackIconInner(
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
        d="M5 4C5.55228 4 6 4.44772 6 5V19C6 19.5523 5.55228 20 5 20C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9978 4.08063C18.6069 4.07997 19.1831 4.3569 19.5631 4.83292C19.8654 5.2116 19.9379 5.66715 19.9686 6.00542C20.0001 6.35179 20 6.78985 20 7.28453V16.7155C20 17.2102 20.0001 17.6482 19.9686 17.9946C19.9379 18.3329 19.8654 18.7884 19.5631 19.1671C19.1831 19.6431 18.6069 19.92 17.9978 19.9194C17.5133 19.9189 17.1123 19.6909 16.829 19.5036C16.5388 19.3118 16.1968 19.0381 15.8105 18.729L9.90858 14.0075C9.66626 13.8137 9.43621 13.6297 9.25837 13.4598C9.06773 13.2777 8.85309 13.0358 8.72788 12.7016C8.55842 12.2492 8.55842 11.7508 8.72788 11.2984C8.85309 10.9642 9.06773 10.7223 9.25837 10.5402C9.4362 10.3703 9.66624 10.1863 9.90854 9.99254C9.91802 9.98496 9.92752 9.97736 9.93704 9.96974L15.8105 5.27096C16.1968 4.96191 16.5388 4.68824 16.829 4.49643C17.1123 4.30911 17.5133 4.08115 17.9978 4.08063Z"
        fill="currentColor"
      />
    </svg>
  );
}
const SkipBackIcon = forwardRef(SkipBackIconInner);
export { SkipBackIcon };
