import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Glasses01IconInner(
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
        d="M2.46446 8.46446C4.41708 6.51184 7.58291 6.51185 9.53553 8.46446C10.0409 8.96984 10.4155 9.55648 10.6593 10.1823C11.5355 9.9392 12.4645 9.93923 13.3407 10.1824C13.5845 9.55652 13.9591 8.96986 14.4645 8.46446C16.4171 6.51184 19.5829 6.51185 21.5355 8.46446C23.4882 10.4171 23.4881 13.5829 21.5355 15.5355C19.5829 17.4882 16.4171 17.4882 14.4645 15.5355C13.5318 14.6029 13.0447 13.3935 13.0029 12.1717C12.3556 11.9428 11.6444 11.9428 10.9971 12.1716C10.9554 13.3934 10.4682 14.6029 9.53554 15.5355C7.58292 17.4882 4.41709 17.4882 2.46446 15.5355C0.511844 13.5829 0.511847 10.4171 2.46446 8.46446Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Glasses01Icon = forwardRef(Glasses01IconInner);
export { Glasses01Icon };
