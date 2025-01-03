import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function SwitchHorizontal01IconInner(
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
        d="M16.7071 2.29289C16.3166 1.90237 15.6834 1.90237 15.2929 2.29289C14.9024 2.68342 14.9024 3.31658 15.2929 3.70711L17.5858 6L4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8L17.5858 8L15.2929 10.2929C14.9024 10.6834 14.9024 11.3166 15.2929 11.7071C15.6834 12.0976 16.3166 12.0976 16.7071 11.7071L20.7071 7.70711C21.0976 7.31658 21.0976 6.68342 20.7071 6.29289L16.7071 2.29289Z"
        fill="currentColor"
      />
      <path
        d="M8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929L3.29289 16.2929C2.90237 16.6834 2.90237 17.3166 3.29289 17.7071L7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071C9.09763 21.3166 9.09763 20.6834 8.70711 20.2929L6.41421 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16L6.41421 16L8.70711 13.7071Z"
        fill="currentColor"
      />
    </svg>
  );
}
const SwitchHorizontal01Icon = forwardRef(SwitchHorizontal01IconInner);
export { SwitchHorizontal01Icon };
