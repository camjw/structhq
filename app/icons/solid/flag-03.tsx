import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Flag03IconInner(
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
        d="M21.0047 2.29095C20.7137 2.07731 20.3975 2.03304 20.2152 2.01632C20.0363 1.9999 19.8221 1.99996 19.6201 2.00001L4.00473 2.00001C4.00315 2 4.00158 2 4 2C3.44772 2 3 2.44772 3 3V21C3 21.5523 3.44772 22 4 22C4.55229 22 5 21.5523 5 21L5 14L19.6201 14C19.8221 14.0001 20.0363 14.0001 20.2152 13.9837C20.3975 13.967 20.7137 13.9227 21.0047 13.7091C21.3502 13.4554 21.5706 13.066 21.6104 12.6392C21.6439 12.2798 21.5192 11.9859 21.4397 11.8209C21.3618 11.6591 21.2515 11.4754 21.1476 11.3023L19.1662 8.00001L21.1475 4.69782C21.2515 4.52463 21.3618 4.34093 21.4397 4.17907C21.5192 4.01415 21.6439 3.7202 21.6104 3.36079C21.5706 2.93401 21.3502 2.54464 21.0047 2.29095Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Flag03Icon = forwardRef(Flag03IconInner);
export { Flag03Icon };
