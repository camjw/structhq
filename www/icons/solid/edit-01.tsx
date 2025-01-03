import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Edit01IconInner(
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
        d="M16.2929 2.29289C17.788 0.797796 20.212 0.797798 21.7071 2.29289C23.2022 3.78799 23.2022 6.21201 21.7071 7.70711L8.50081 20.9134C8.48405 20.9301 8.46745 20.9468 8.45097 20.9633C8.20607 21.2086 7.99005 21.4249 7.73337 21.5942C7.50771 21.743 7.26298 21.8606 7.00581 21.9439C6.71332 22.0386 6.40942 22.0721 6.06491 22.1101C6.04172 22.1126 6.01834 22.1152 5.99478 22.1178L2.61041 22.4939C2.30848 22.5274 2.00768 22.4219 1.79287 22.2071C1.57806 21.9923 1.47255 21.6915 1.50609 21.3896L1.88213 18.0052C1.88475 17.9816 1.88733 17.9583 1.88989 17.9351C1.92789 17.5906 1.96141 17.2867 2.0561 16.9942C2.13935 16.737 2.25698 16.4923 2.40579 16.2666C2.57504 16.0099 2.79141 15.7939 3.0367 15.549C3.0532 15.5325 3.06984 15.5159 3.0866 15.4992L16.2929 2.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Edit01Icon = forwardRef(Edit01IconInner);
export { Edit01Icon };
