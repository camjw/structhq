import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function UserCircleIconInner(
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
        d="M7 9.5C7 6.73858 9.23858 4.5 12 4.5C14.7614 4.5 17 6.73858 17 9.5C17 12.2614 14.7614 14.5 12 14.5C9.23858 14.5 7 12.2614 7 9.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 14.2211 20.1954 16.2543 18.8618 17.824C17.9457 16.7114 16.5564 16 15 16H9.00005C7.44368 16 6.05439 16.7114 5.13825 17.8241C3.8046 16.2543 3 14.2211 3 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
const UserCircleIcon = forwardRef(UserCircleIconInner);
export { UserCircleIcon };
