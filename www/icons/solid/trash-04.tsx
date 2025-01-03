import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Trash04IconInner(
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
        d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4H9C8.44772 4 8 3.55228 8 3Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H19.9356L19.2939 16.6255C19.2435 17.3809 19.2019 18.0061 19.1272 18.5149C19.0494 19.0447 18.926 19.5288 18.6689 19.98C18.2688 20.6824 17.6652 21.2471 16.9378 21.5996C16.4705 21.8261 15.9792 21.917 15.4454 21.9594C14.9327 22.0001 14.3062 22 13.5491 22H10.451C9.69386 22 9.06731 22.0001 8.55462 21.9594C8.02083 21.917 7.52955 21.8261 7.06226 21.5996C6.33482 21.2471 5.73126 20.6824 5.33112 19.98C5.07408 19.5288 4.95069 19.0447 4.8729 18.5149C4.79819 18.0061 4.75652 17.3809 4.70617 16.6255L4.06447 7H3C2.44772 7 2 6.55228 2 6Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Trash04Icon = forwardRef(Trash04IconInner);
export { Trash04Icon };
