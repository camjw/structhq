import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Scale03IconInner(
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
        d="M16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8M16.2 3C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8M16.2 3H15.2C14.0799 3 13.5198 3 13.092 3.21799C12.7157 3.40973 12.4097 3.71569 12.218 4.09202C12 4.51984 12 5.07989 12 6.2V8.8C12 9.9201 12 10.4802 12.218 10.908C12.4097 11.2843 12.7157 11.5903 13.092 11.782C13.5198 12 14.0799 12 15.2 12H17.8C18.9201 12 19.4802 12 19.908 11.782C20.2843 11.5903 20.5903 11.2843 20.782 10.908C21 10.4802 21 9.92011 21 8.8V7.8M12.5 11.5L7 17M7 17H12M7 17L7 12"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Scale03Icon = forwardRef(Scale03IconInner);
export { Scale03Icon };
