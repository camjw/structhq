import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Asterisk02IconInner(
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
        d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V9.58579L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L9.58579 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H9.58579L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L11 14.4142V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V14.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L14.4142 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H14.4142L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L13 9.58579V4Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Asterisk02Icon = forwardRef(Asterisk02IconInner);
export { Asterisk02Icon };
