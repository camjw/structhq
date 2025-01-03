import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function PlayCircleIconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM9.59974 8.11608C9.5 8.24931 9.5 8.48795 9.5 8.96524V15.0346C9.5 15.5119 9.5 15.7505 9.59974 15.8837C9.68666 15.9998 9.81971 16.0725 9.96438 16.0828C10.1304 16.0947 10.3311 15.9656 10.7326 15.7075L15.4532 12.6728C15.8016 12.4489 15.9758 12.3369 16.0359 12.1945C16.0885 12.0701 16.0885 11.9297 16.0359 11.8053C15.9758 11.6629 15.8016 11.5509 15.4532 11.327L10.7326 8.2923C10.3311 8.0342 10.1304 7.90515 9.96438 7.91701C9.81971 7.92734 9.68666 7.99998 9.59974 8.11608Z"
        fill="currentColor"
      />
    </svg>
  );
}
const PlayCircleIcon = forwardRef(PlayCircleIconInner);
export { PlayCircleIcon };
