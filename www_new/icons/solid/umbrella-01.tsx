import React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

function Umbrella01IconInner(
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
        d="M12 1C6.52054 1 1.97852 5.00541 1.13886 10.2481C1.13418 10.2774 1.1292 10.3075 1.12408 10.3384C1.06256 10.7099 0.981654 11.1986 1.17219 11.7047C1.32867 12.1203 1.66645 12.5165 2.05211 12.7367C2.33031 12.8956 2.60686 12.9539 2.85627 12.9787C3.07232 13.0001 3.32166 13.0001 3.56505 13L11 13V19.4C11 21.3509 12.5304 23 14.5 23C16.4696 23 18 21.3509 18 19.4C18 18.8477 17.5523 18.4 17 18.4C16.4477 18.4 16 18.8477 16 19.4C16 20.321 15.2918 21 14.5 21C13.7082 21 13 20.321 13 19.4V13L20.4349 13C20.6783 13.0001 20.9276 13.0001 21.1437 12.9787C21.3931 12.9539 21.6696 12.8956 21.9478 12.7368C22.3335 12.5165 22.6713 12.1203 22.8278 11.7047C23.0183 11.1986 22.9374 10.7099 22.8759 10.3384C22.8707 10.3075 22.8658 10.2774 22.8611 10.2481C22.0214 5.00541 17.4794 1 12 1Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Umbrella01Icon = forwardRef(Umbrella01IconInner);
export { Umbrella01Icon };
