import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function CurrencyEthereumIconInner(
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
        d="M12.7474 1.33564C12.5576 1.12215 12.2856 1 12 1C11.7143 1 11.4423 1.12215 11.2526 1.33564L3.25257 10.3358C3.02019 10.5972 2.9413 10.9611 3.04453 11.2953C3.14777 11.6295 3.41812 11.8855 3.75747 11.9703L11.7575 13.9701C11.9167 14.01 12.0833 14.01 12.2425 13.9701L20.2425 11.9701C20.5819 11.8853 20.8522 11.6293 20.9554 11.2951C21.0587 10.9609 20.9798 10.5971 20.7474 10.3356L12.7474 1.33564Z"
        fill="currentColor"
      />
      <path
        d="M5.72484 14.0257C5.29683 13.9269 4.85448 14.119 4.63446 14.4992C4.41445 14.8794 4.4683 15.3586 4.7672 15.6805L11.2673 22.6805C11.4565 22.8843 11.722 23.0001 12.0001 23.0001C12.2782 23.0001 12.5437 22.8843 12.7329 22.6805L19.2328 15.6805C19.5317 15.3586 19.5855 14.8794 19.3655 14.4992C19.1455 14.119 18.7031 13.9269 18.2751 14.0257L12 15.4738L5.72484 14.0257Z"
        fill="currentColor"
      />
    </svg>
  );
}
const CurrencyEthereumIcon = forwardRef(CurrencyEthereumIconInner);
export { CurrencyEthereumIcon };