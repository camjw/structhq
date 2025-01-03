import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CheckCircleBrokenIconInner(
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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 10.5488 22.719 9.1632 22.2084 7.89471C21.995 7.36473 21.8884 7.09973 21.6359 6.92851C21.436 6.79297 21.1191 6.72837 20.8821 6.77485C20.5828 6.83357 20.35 7.06662 19.8843 7.53273L12.7075 14.7168C12.52 14.9044 12.2656 15.0099 12.0002 15.01C11.7349 15.0101 11.4805 14.9047 11.2929 14.7171L8.29289 11.7171C7.90237 11.3266 7.90237 10.6934 8.29289 10.3029C8.68342 9.91237 9.31658 9.91237 9.70711 10.3029L11.9996 12.5954L18.9776 5.61054C19.3533 5.23445 19.5411 5.0464 19.6128 4.80042C19.6703 4.60264 19.6567 4.33574 19.5792 4.14487C19.4829 3.90748 19.3031 3.76099 18.9435 3.468C17.05 1.9251 14.633 1 12 1Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CheckCircleBrokenIcon = forwardRef(CheckCircleBrokenIconInner);
export { CheckCircleBrokenIcon };
