import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Scissors01IconInner(
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
        d="M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C6.74181 10 7.43645 9.79807 8.03197 9.44618L10.5858 12L8.03197 14.5538C7.43645 14.2019 6.74181 14 6 14C3.79086 14 2 15.7909 2 18C2 20.2091 3.79086 22 6 22C8.20914 22 10 20.2091 10 18C10 17.2582 9.79807 16.5635 9.44618 15.968L12 13.4142L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L13.4142 12L20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L12 10.5858L9.44618 8.03197C9.79807 7.43645 10 6.74181 10 6C10 3.79086 8.20914 2 6 2ZM4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6ZM6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Scissors01Icon = forwardRef(Scissors01IconInner);
export { Scissors01Icon };
