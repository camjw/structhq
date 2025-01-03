import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Power02IconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V7ZM8.79949 9.60019C9.13124 9.15864 9.04222 8.53176 8.60067 8.20002C8.15913 7.86828 7.53225 7.95729 7.20051 8.39884C6.44694 9.40182 6 10.6502 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 10.6502 17.5531 9.40182 16.7995 8.39884C16.4677 7.95729 15.8409 7.86828 15.3993 8.20002C14.9578 8.53176 14.8688 9.15864 15.2005 9.60019C15.7028 10.2687 16 11.0982 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 11.0982 8.29723 10.2687 8.79949 9.60019Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Power02Icon = forwardRef(Power02IconInner);
export { Power02Icon };
