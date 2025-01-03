import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function ImageIndentRightIconInner(
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
        d="M3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5H21C21.5523 5 22 4.55228 22 4C22 3.44772 21.5523 3 21 3H3Z"
        fill="currentColor"
      />
      <path
        d="M3 19C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20C22 19.4477 21.5523 19 21 19H3Z"
        fill="currentColor"
      />
      <path
        d="M2 9.25C2 8.69772 2.44772 8.25 3 8.25H9C9.55228 8.25 10 8.69772 10 9.25C10 9.80228 9.55228 10.25 9 10.25H3C2.44772 10.25 2 9.80228 2 9.25Z"
        fill="currentColor"
      />
      <path
        d="M3 13.75C2.44772 13.75 2 14.1977 2 14.75C2 15.3023 2.44772 15.75 3 15.75H9C9.55228 15.75 10 15.3023 10 14.75C10 14.1977 9.55228 13.75 9 13.75H3Z"
        fill="currentColor"
      />
      <path
        d="M14.5681 7C14.3157 6.99997 14.0699 6.99994 13.8618 7.01695C13.6332 7.03563 13.3634 7.07969 13.092 7.21799C12.7157 7.40974 12.4097 7.7157 12.218 8.09202C12.0797 8.36345 12.0356 8.63318 12.017 8.86178C11.9999 9.06993 12 9.31572 12 9.56811V14.4319C12 14.6843 11.9999 14.9301 12.017 15.1382C12.0356 15.3668 12.0797 15.6366 12.218 15.908C12.4097 16.2843 12.7157 16.5903 13.092 16.782C13.3634 16.9203 13.6332 16.9644 13.8618 16.9831C14.0699 17.0001 14.3157 17 14.5681 17H19.4319C19.6843 17 19.9301 17.0001 20.1382 16.9831C20.3668 16.9644 20.6366 16.9203 20.908 16.782C21.2843 16.5903 21.5903 16.2843 21.782 15.908C21.9203 15.6366 21.9644 15.3668 21.9831 15.1382C22.0001 14.9301 22 14.6843 22 14.4319V9.56812C22 9.31574 22.0001 9.06994 21.9831 8.86178C21.9644 8.63318 21.9203 8.36345 21.782 8.09202C21.5903 7.7157 21.2843 7.40974 20.908 7.21799C20.6366 7.07969 20.3668 7.03563 20.1382 7.01695C19.9301 6.99994 19.6843 6.99997 19.4319 7H14.5681Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ImageIndentRightIcon = forwardRef(ImageIndentRightIconInner);
export { ImageIndentRightIcon };