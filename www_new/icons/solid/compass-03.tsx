import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Compass03IconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM15.6174 8.07938C15.4549 8.02146 15.2106 8.10288 14.7221 8.26573L10.2595 9.75327C10.1203 9.79965 10.0508 9.82284 9.99298 9.86236C9.94181 9.89737 9.8976 9.94158 9.86259 9.99275C9.82307 10.0505 9.79988 10.1201 9.7535 10.2592L8.26596 14.7219C8.10311 15.2104 8.02169 15.4547 8.07961 15.6171C8.13002 15.7585 8.24126 15.8697 8.38262 15.9201C8.54507 15.9781 8.78934 15.8966 9.27789 15.7338L13.7405 14.2463C13.8797 14.1999 13.9492 14.1767 14.007 14.1372C14.0582 14.1022 14.1024 14.0579 14.1374 14.0068C14.1769 13.949 14.2001 13.8794 14.2465 13.7403L15.734 9.27766C15.8969 8.78911 15.9783 8.54484 15.9204 8.3824C15.87 8.24103 15.7587 8.12979 15.6174 8.07938Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Compass03Icon = forwardRef(Compass03IconInner);
export { Compass03Icon };
