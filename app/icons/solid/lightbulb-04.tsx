import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Lightbulb04IconInner(
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
        d="M12 1C7.58172 1 4 4.58172 4 9C4 11.9626 5.61038 14.5473 8 15.9295L8 16.032C7.99999 16.4706 7.99998 16.8491 8.02135 17.1624C8.04385 17.4922 8.09336 17.8221 8.22836 18.1481C8.53284 18.8831 9.11687 19.4672 9.85195 19.7716C10.1779 19.9066 10.5078 19.9561 10.8376 19.9787C11.1509 20 11.5294 20 11.968 20H12.032C12.4706 20 12.8491 20 13.1624 19.9787C13.4922 19.9561 13.8221 19.9066 14.1481 19.7716C14.8831 19.4672 15.4672 18.8831 15.7716 18.1481C15.9066 17.8221 15.9561 17.4922 15.9787 17.1624C16 16.8491 16 16.4707 16 16.032V15.9295C18.3896 14.5473 20 11.9626 20 9C20 4.58172 16.4183 1 12 1ZM9 10C9 9.44771 9.44772 9 10 9H14C14.5523 9 15 9.44771 15 10C15 10.5523 14.5523 11 14 11H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11H10C9.44772 11 9 10.5523 9 10Z"
        fill="currentColor"
      />
      <path
        d="M9.5 21C8.94772 21 8.5 21.4477 8.5 22C8.5 22.5523 8.94772 23 9.5 23H14.5C15.0523 23 15.5 22.5523 15.5 22C15.5 21.4477 15.0523 21 14.5 21H9.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Lightbulb04Icon = forwardRef(Lightbulb04IconInner);
export { Lightbulb04Icon };
