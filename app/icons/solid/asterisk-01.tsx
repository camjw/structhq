import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Asterisk01IconInner(
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
        d="M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V9.58582L5.63603 4.22185C5.24551 3.83132 4.61234 3.83132 4.22182 4.22185C3.83129 4.61237 3.83129 5.24554 4.22182 5.63606L9.58576 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H9.5858L4.22182 18.364C3.83129 18.7545 3.83129 19.3877 4.22182 19.7782C4.61234 20.1687 5.24551 20.1687 5.63603 19.7782L11 14.4142V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V14.4142L18.364 19.7782C18.7545 20.1687 19.3876 20.1687 19.7782 19.7782C20.1687 19.3877 20.1687 18.7545 19.7782 18.364L14.4142 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H14.4142L19.7782 5.63606C20.1687 5.24554 20.1687 4.61237 19.7782 4.22185C19.3876 3.83132 18.7545 3.83132 18.364 4.22185L13 9.5858V2Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Asterisk01Icon = forwardRef(Asterisk01IconInner);
export { Asterisk01Icon };