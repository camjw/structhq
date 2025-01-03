import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function LockUnlocked02IconInner(
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
        d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const LockUnlocked02Icon = forwardRef(LockUnlocked02IconInner);
export { LockUnlocked02Icon };
