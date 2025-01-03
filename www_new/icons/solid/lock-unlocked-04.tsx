import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function LockUnlocked04IconInner(
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
        d="M8 8C8 5.79086 9.79086 4 12 4C13.308 4 14.4693 4.62676 15.2008 5.60058C15.5325 6.04217 16.1594 6.13126 16.6009 5.79957C17.0425 5.46788 17.1316 4.84101 16.7999 4.39942C15.707 2.94434 13.9636 2 12 2C8.68629 2 6 4.68629 6 8V9.70835C4.75527 11.1186 4 12.9711 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 10.5817 16.4183 7 12 7C10.5429 7 9.17669 7.38958 8 8.07026V8ZM13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14L11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V14Z"
        fill="currentColor"
      />
    </svg>
  );
}
const LockUnlocked04Icon = forwardRef(LockUnlocked04IconInner);
export { LockUnlocked04Icon };